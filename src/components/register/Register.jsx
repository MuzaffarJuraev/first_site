import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <h1>contact me</h1>
      <div className="registerHr"></div>
      <form className="registerForm">
        <label>Full name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Phone number</label>
        <input type="number" />
        <label>Message</label>
        <textarea></textarea>
        <button className="registerButton">send</button>
      </form>
    </div>
  );
}
