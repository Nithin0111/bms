import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-content">
          <h2>Contact us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, iusto. Itaque unde sit odio est explicabo vitae sed
            facere id ducimus praesentium, accusantium illo dolor natus suscipit
            perspiciatis vel exercitationem.
          </p>

          <h3>Email: bms@bms.com</h3>
          <h3>Phone: +91-9876543210</h3>
          <h3>Address: Capgemini Bharat India</h3>
        </div>
        <div className="contact-form">
          <form action="">
            <div className="form-group">
              <div className="input-1">
                <label htmlFor="name">Your Name</label>
                <br />
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="name">Your Name</label>
                <br />
                <input type="text" id="name" />
              </div>
            </div>
            <div className="message-field">
              <label htmlFor="message">Your message</label>
              <br />
              <textarea name="" id="message" cols="47" rows="5"></textarea>
            </div>
            <button type="button" className="form-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
