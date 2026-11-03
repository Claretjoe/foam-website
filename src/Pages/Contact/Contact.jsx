import './Contact.css';

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    alert(
      'Your message form is ready for backend integration.'
    );
  }

  return (
    <main className="contact-page">

      <section className="contact-heading">
        <p className="contact-eyebrow">WE ARE HERE TO HELP</p>

        <h1>Contact SomniFlex</h1>

        <p>
          Have questions about our products?
          Send us a message and our team can assist you.
        </p>
      </section>

      <section className="contact-layout">

        <div className="contact-information">
          <h2>Get in Touch</h2>

          <p>
            Contact us for product enquiries, availability,
            and assistance with your order.
          </p>

          <div className="contact-detail">
            <h3>Telephone</h3>
            <p>Add the company's telephone number</p>
          </div>

          <div className="contact-detail">
            <h3>Email</h3>
            <p>Add the company's email address</p>
          </div>

          <div className="contact-detail">
            <h3>Location</h3>
            <p>Add the company's business address</p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label htmlFor="contact-name">
            Full Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">
            Email Address
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-subject">
            Subject
          </label>

          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What is your enquiry about?"
            required
          />

          <label htmlFor="contact-message">
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}

export default Contact;