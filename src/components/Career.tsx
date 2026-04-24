import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Engineering</h4>
                <h5>Gandaki College of Engineering</h5>
              </div>
              <h3>2022 – Present</h3>
            </div>
            <p>
              Pursuing a Bachelor of Computer Engineering, developing skills in software development, machine learning, and AI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High-School</h4>
                <h5>Partiva Secondary School</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Completed higher secondary education with a strong foundation in science and mathematics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEE</h4>
                <h5>Partiva Secondary School</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Completed Secondary Education Examination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
