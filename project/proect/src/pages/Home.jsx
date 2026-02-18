import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>Энергетические решения нового поколения</h1>
        <p>
          Dimed — надежный партнер для бизнеса и частных клиентов.  
          Инновационные технологии, стабильная энергия и минимальные затраты.
        </p>
        <Link to="/services" className="btn btn-cta">
          Подробнее об услугах
        </Link>
      </div>
    </section>
  );
}

export default Home;
