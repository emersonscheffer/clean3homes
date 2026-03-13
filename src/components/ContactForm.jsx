import emailjs from "@emailjs/browser";

export default function ContactForm() {
  function send(e) {
    e.preventDefault();

    emailjs.sendForm("serviceID", "templateID", e.target, "publicKey");

    alert("Message sent!");
  }

  return (
    <form onSubmit={send} className="contact">
      <input name="name" placeholder="Full Name" />

      <input name="phone" placeholder="Phone" />

      <input name="address" placeholder="Address" />

      <textarea name="message" placeholder="Request estimate" />

      <button>Send</button>
    </form>
  );
}
