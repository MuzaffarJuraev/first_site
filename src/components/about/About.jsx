import "./about.css";

export default function About() {
  return (
    <div className="about">
      <h1>about</h1>
      <div className="aboutHr"></div>
      <div className="aboutContainer">
        <div className="aboutContainerItem">
          <p>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="aboutContainerItem">
          <p>
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
        </div>
      </div>
      <div className="aboutButton">
        <p>Free Download</p>
      </div>
    </div>
  );
}
