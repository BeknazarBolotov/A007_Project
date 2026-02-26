import CompanyPhoto from "../assets/images/team.jpg";
import { Link } from "react-router-dom";


function About() {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Верхний блок */}
        <div className="row align-items-center mb-5">
          
          {/* Текст */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4">О компании Dimed</h2>

            <p className="lead text-muted">
              Dimed — современная энергетическая компания, ориентированная 
              на устойчивое развитие и внедрение инновационных технологий.
            </p>

            <p className="text-secondary">
              Мы реализуем проекты в сфере традиционной и возобновляемой энергетики,
              помогая предприятиям и частным клиентам повышать энергоэффективность,
              снижать расходы и минимизировать воздействие на окружающую среду.
            </p>

            <p className="text-secondary">
              Наша команда объединяет инженеров, проектировщиков и технических
              специалистов с многолетним опытом работы в отрасли.
            </p>

            <div className="mt-4">
                <Link to="/projects" id="Projects" className="btn btn-primary px-4 py-2">
                  Наши проекты
                </Link>
            </div>
          </div>

          {/* Фото */}
          <div className="col-lg-6">
            <img
              src={CompanyPhoto}
              alt="Команда Dimed"
              className="img-fluid rounded-4 shadow-lg"
              style={{ objectFit: "cover", height: "420px", width: "100%" }}
            />
          </div>
        </div>

        {/* Статистика */}
        <div className="row text-center mb-5">
          <div className="col-md-3 mb-3">
            <h3 className="fw-bold text-primary">10+</h3>
            <p className="text-muted">лет на рынке</p>
          </div>
          <div className="col-md-3 mb-3">
            <h3 className="fw-bold text-primary">150+</h3>
            <p className="text-muted">реализованных проектов</p>
          </div>
          <div className="col-md-3 mb-3">
            <h3 className="fw-bold text-primary">50+</h3>
            <p className="text-muted">партнёров</p>
          </div>
          <div className="col-md-3 mb-3">
            <h3 className="fw-bold text-primary">24/7</h3>
            <p className="text-muted">техническая поддержка</p>
          </div>
        </div>

        {/* Преимущества */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="p-4 border rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-3">Инновации</h5>
              <p className="text-muted small">
                Используем современные технологии и оборудование
                мирового уровня.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="p-4 border rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-3">Надёжность</h5>
              <p className="text-muted small">
                Строго соблюдаем стандарты качества и безопасности.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="p-4 border rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-3">Экологичность</h5>
              <p className="text-muted small">
                Продвигаем возобновляемые источники энергии и
                устойчивые решения.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="p-4 border rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-3">Индивидуальный подход</h5>
              <p className="text-muted small">
                Подбираем решения под конкретные задачи клиента.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;