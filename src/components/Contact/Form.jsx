function Form() {
  return (
    <div className="contact-form">
      <form>
        <div>
          <input type="text" placeholder="Full Name" />
        </div>
        <div>
          <input type="email" placeholder="Email Address" />
        </div>
        <div>
          <input type="text" placeholder="Subject" />
        </div>
        <div>
          <textarea rows="4" cols="50" placeholder="Your Message..."></textarea>
        </div>

        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Form;
