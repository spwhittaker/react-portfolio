import React from "react";
//import axios from "axios";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: null,
      formEmailSent: false,
      formSubmitted: false
    };
  }
  handleSubmit(event) {
    event.preventDefault();

    const { receiverEmail, template, user } = this.props;

    this.sendFeedback(
      template,
      this.props.senderEmail,
      receiverEmail,
      this.state.feedback,
      user
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(senderEmail, receiverEmail, feedback, user) {
    window.emailjs
      .send(
        "default_service", // default email provider in your EmailJS account
        "template_imyiM3Ab",
        {
          senderEmail,
          receiverEmail,
          feedback
        },
        user
      )
      .then(res => {
        this.setState({ formEmailSent: true });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <h1>Your Message</h1>
        <textarea
          className="text-input"
          id="contact-entry"
          name="contact-entry"
          onChange={this.handleChange}
          placeholder="Enter your contact here"
          required
          value={this.props.contact}
        />
        <div className="btn-group">
          <button className="btn btn--cancel" onClick={this.handleClose}>
            Cancel
          </button>
          <input type="submit" value="Submit" className="btn btn--submit" />
        </div>
      </form>
    );
  }
}

export default ContactForm;
