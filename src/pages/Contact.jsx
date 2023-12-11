import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Send form data to server
      // await sendFormData(data);
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      // Handle error
    }
  };

  return (
    <>
      <div className="container mt-5 contact-container">
        <h1 className="mb-4 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="form-control"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        {success && <p>Form submitted successfully!</p>}
      </div>
    </>
  );
};

export default Contact;