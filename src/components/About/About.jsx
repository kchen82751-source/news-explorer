import "./About.css";
// import avatar from "../../assets/avatar-image.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import footer from "../../assets/footer.svg";
import placeholder from "../../assets/placeholder-image.svg";

function About({}) {
  // const { currentUser } = useContext(CurrentUserContext);

  return (
    <section>
      <div className="about__header-statement">
        <h1 className="about__header">
          About the author
          <p className="about__statement">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            <br />
            <br />
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </h1>
        <img
          src={placeholder}
          alt="Placeholder"
          className="about__placeholder"
        />
      </div>
      <img src={footer} alt="Footer" className="about__footer" />
    </section>
  );
}

export default About;
