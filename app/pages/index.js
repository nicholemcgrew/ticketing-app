// pages/index.js or wherever you want the modal to appear
import React, { useState } from 'react';
import CustomModal from '../components/Modal';

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Create New Ticket</button>
      <CustomModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {/* Modal content goes here */}
        <h2>Create New Ticket</h2>
        {/* Form fields and other content */}
      </CustomModal>
    </div>
  );
};

export default HomePage;
