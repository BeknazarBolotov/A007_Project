import CompanyPhoto from "../assets/images/team.jpg"; 

function About() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Левая колонка: Текст */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4">О компании Dimed</h2>
            <p className="lead text-muted mb-4">
              Dimed — современная энергетическая компания, ориентированная на 
              устойчивое развитие и внедрение инновационных технологий в сфере энергетики.
            </p>
            <p className="text-secondary">
              Мы помогаем предприятиям и частным лицам переходить на возобновляемые 
              источники энергии, сокращая расходы и заботясь об экологии. Наш опыт 
              позволяет реализовывать проекты любой сложности — от частных домов 
              до крупных промышленных объектов.
            </p>
            <div className="mt-4">
              <button className="btn btn-primary px-4 py-2">Наши проекты</button>
            </div>
          </div>

          {/* Правая колонка: Фото */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <img 
                src={CompanyPhoto} 
                alt="О компании Dimed" 
                className="img-fluid rounded-4 shadow-lg" 
                style={{ objectFit: 'cover', height: '400px', width: '100%' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;