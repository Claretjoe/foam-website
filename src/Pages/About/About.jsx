import './About.css';

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <p className="about-eyebrow">OUR STORY</p>

        <h1>About UrComfort</h1>

        <p>
          Quality foams, bedding materials, pillows, and
          bedroom essentials designed with comfort in mind.
        </p>
      </section>

      <section className="about-content">

        <div className="about-block">
          <h2>Who We Are</h2>

          <p>
            UrComfort is a foam and bedding brand offering
            products that help customers create comfortable
            and welcoming sleeping spaces.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Mission</h2>

          <p>
            Our mission is to make it easier for customers
            to find quality foam products and bedroom
            essentials that suit their needs.
          </p>
        </div>

        <div className="about-block">
          <h2>Our Services</h2>

          <p>
            Our product range includes foams, mattresses,
            beds, pillows, bedsheets, duvets, and other
            bedding accessories.
          </p>
        </div>

      </section>

    </main>
  );
}

export default About;