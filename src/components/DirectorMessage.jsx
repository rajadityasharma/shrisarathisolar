import "./DirectorMessage.css";
import directorImg from "../assets/CEO_&_Founder.webp"; // director photo

function DirectorMessage() {
  return (
    <section className="director-section">
      <div className="director-container">

        {/* IMAGE */}
        <div className="director-image">
          <img src={directorImg} alt="Director Shri Sarathi Solar" />
        </div>

        {/* CONTENT */}
        <div className="director-content">
          <span className="director-subtitle">DIRECTOR'S MESSAGE</span>

          <h2>Message from Our Director</h2>

          <p>
            At <b>Shri Sarathi Solar</b>, my purpose has always been to play an active role in shaping India’s transition towards clean and sustainable energy. As Director, I am personally committed to driving technical excellence, operational efficiency, and uncompromised quality across every project we undertake.
          </p>

          <p>
            With advanced academic training in Renewable Energy from the Dublin Institute of Technology, I bring a strong global outlook combined with a deep technical understanding of modern solar technologies. This foundation allows us to design and deliver energy solutions that are not only innovative but also reliable, efficient, and future-ready.
          </p>
          <p>
            With advanced academic training in Renewable Energy from the Dublin Institute of Technology, I bring a strong global outlook combined with a deep technical understanding of modern solar technologies. This foundation allows us to design and deliver energy solutions that are not only innovative but also reliable, efficient, and future-ready.
          </p>

          <div className="director-sign">
            <h4><b>Mr. Narender singh </b> <br/> [Managing Director]</h4>
            <span>Shri Sarathi Solar</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DirectorMessage;
