import HeroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <div className="container text-center text-white">
        <h1>Энергетические решения нового поколения</h1>
        <p>Надежная энергия для бизнеса и частных клиентов</p>
      </div>
    </section>
  );
}

export default Hero;
