export default function ContactUs() {
  return (
    <section id="contact">
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Contact Us</h2>

      <form className="contact">
        <input type="text" placeholder="Full Name" required />

        <input type="text" placeholder="Address" />

        <input type="tel" placeholder="Phone Number" required />

        <textarea
          rows="4"
          placeholder="Request an estimate visit or ask a question..."
        ></textarea>

        <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <input type="checkbox" />
          Request an in-person estimate visit
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
