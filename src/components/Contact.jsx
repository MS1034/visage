import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div class="contact-content">
        <h2 class="contact-title">Contact Us</h2>
        <p class="contact-description">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" class="contact-form">
          <div>
            <label for="email" class="contact-label">
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="contact-input"
              placeholder="name@visage.com"
              required
            />
          </div>
          <div>
            <label for="subject" class="contact-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="contact-input"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="input-label">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="contact-input"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" class="primary-button ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
