import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoModal from "./components/InfoModal";
import TipCalculator from "./components/TipCalculator";

// Main App Component
export default function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <>
      <Header onInfoClick={() => setIsInfoOpen(true)} />

      <main>
        <TipCalculator />
      </main>

      <Footer />

      <InfoModal isOpen={isInfoOpen} toggle={() => setIsInfoOpen(false)} />
    </>
  );
}
