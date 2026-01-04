import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-4 mb-2 p-2 bg-light text-muted">
      <p>© {new Date().getFullYear()} Tip Calculator. All rights reserved.</p>
    </footer>
  );
}
