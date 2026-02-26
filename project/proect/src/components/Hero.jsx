import { Link } from "react-router-dom";
import "../index.css"; 

const Hero = () => {
  return (
    <section className="hero"
      style={{
        backgroundImage: `url(/images/hero.jpg)`, // <-- вот так работает
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-container">
        <h1 className="hero-title">Энергия для вашего бизнеса</h1>
        <p className="hero-subtitle">
          Современные решения в энергетике для промышленных предприятий и частных клиентов
        </p>
        <Link to="/services" className="hero-btn">
          Узнать больше
        </Link>
      </div>
    </section>
  );
};

export default Hero;