import Ticket from "@/app/(models)/Ticket"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
	try {
		const { id } = params

		const foundTicket = await Ticket.findOne({ _id: id })

		return NextResponse.json({ foundTicket }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 })
	}
}

export async function DELETE(req, { params }) {
	try {
		const { id } = params
		await Ticket.findByIdAndDelete(id)

		return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 })
	}
}

export async function PUT(req, { params }) {
	try {
		const { id } = params
		const body = await req.json()
		const ticketData = body.formData

		// Assuming ticketData contains simple field-value pairs
		const updateFields = Object.keys(ticketData).reduce((acc, key) => {
			acc[key] = ticketData[key];
			return acc;
		}, {});

		const updateResult = await Ticket.findOneAndUpdate(
			{ _id: id },
			{ $set: updateFields },
			{ new: true } // Return the modified document
		);

		if (!updateResult) {
			throw new Error("Ticket not found");
		}

		return NextResponse.json({ message: "Ticket Updated", ticket: updateResult }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
