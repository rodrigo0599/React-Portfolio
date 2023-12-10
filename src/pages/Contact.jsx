import React  from "react";
//import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the values from the form
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Validate email
   // if (!isValidEmail(email)) {
      // Handle invalid email
//alert("Please enter a valid email address");
   //   return;
  //  }

    // Recipient's email address
    const recipientEmail = "rodrigo0599@gmail.com";

    // Generate the mailto link with recipient's email, sender's email, subject, and body
    const mailtoLink = `mailto:${recipientEmail}?subject=Message from ${name}&body=${message}%0D%0A%0D%0ASender's Email: ${email}`;

    // Open the user's email client with the pre-filled email
    window.location.href = mailtoLink;
  };

  return (
    <>
      <div className="container mt-5 contact-container">
        <h1 className="mb-4 text-center">Contact Me</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;