import "./About.css";
import selfie from "../../assets/linkedIn-selfie.png";

function About() {
  return (
    <section>
      <div className="about__header-statement">
        <h1 className="about__header">
          About the author
          <p className="about__statement">
            Hello my name is Kevin Chen and Im a TripleTen student studying as
            software engineering. For this project I'll be customising news
            exploere website can display news articles
            <br />
            <br />
            My experience with TripleTen is better than my previous education
            background so far. Only it because TripleTen provide alot of coding
            lesson, witch it does help me to learned coding better than how I
            learn during my college years. So far I learn how to use HTML, CSS,
            React jxs, JavaScript, GitHub, Node.js, mongoDB, postman, and Visual
            code. With those lesson i learn, Im thinking about helping cutomer
            by creating a website for the business owner or a website to
            entertaining people.
          </p>
        </h1>
        <div className="about__photo">
          <img src={selfie} alt="The author" className="about__selfie" />
        </div>
      </div>
    </section>
  );
}

export default About;
