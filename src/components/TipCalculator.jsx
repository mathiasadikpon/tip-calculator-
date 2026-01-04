import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InfoModal from "./InfoModal";
import { Container } from "reactstrap";
// ... other imports

export default function TipCalculator() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Header onInfoClick={toggleModal} />
      <Container className="calculator">
        {/* TipCalculator inputs & sliders go here */}
      </Container>
      <Footer />
      <InfoModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
}
