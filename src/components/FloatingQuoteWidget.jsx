import { useState } from "react";

export default function FloatingQuoteWidget() {
  const [open, setOpen] = useState(false);

  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [type, setType] = useState("regular");

  const calculatePrice = () => {
    let base = 120;

    // scale based on rooms
    let extraRooms = bedrooms + bathrooms - 2;
    if (extraRooms > 0) {
      base += extraRooms * 20;
    }

    // cleaning type adjustment
    if (type === "deep") base += 60;
    if (type === "move") base += 80;

    return base;
  };

  return (
    <>
      {/* Floating Button */}
      <div
        className={`floatingQuoteBtn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        💬 Get Quote
      </div>

      {/* Expandable Panel */}
      <div className={`quoteWidget ${open ? "show" : ""}`}>
        <h3>Instant Quote</h3>

        <label>Bedrooms</label>
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>

        <label>Bathrooms</label>
        <select
          value={bathrooms}
          onChange={(e) => setBathrooms(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>

        <label>Cleaning Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="regular">Regular</option>
          <option value="deep">Deep Cleaning</option>
          <option value="move">Move Out</option>
        </select>

        <div className="priceBox">${calculatePrice()}</div>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Now
        </button>
      </div>
    </>
  );
}
