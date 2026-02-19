// Не забудьте импортировать фото для проектов
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";

function Projects() {
  const projects = [
    { title: "Солнечный парк 'EcoWave'", location: "Алматы", img: Project1 },
    { title: "Заводской энергоузел", location: "Астана", img: Project2 },
    { title: "Жилой комплекс 'SmartCity'", location: "Шымкент", img: Project1 },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Наши проекты</h2>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-4" key={i}>
              <div className="card border-0 shadow-sm overflow-hidden h-100 project-card">
                <img src={p.img} className="card-img-top" alt={p.title} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="fw-bold">{p.title}</h5>
                  <p className="text-muted mb-0">{p.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className="fw-bold mb-4">Посмотрите, как мы работаем</h2>
            <div className="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden">
              {/* Замените ссылку на ваше видео с YouTube или путь к файлу */}
              <iframe 
                src="https://www.youtube.com/embed/ваш-id-видео" 
                title="О компании Dimed" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-muted col-md-8 mx-auto">
              Мы используем только сертифицированное оборудование и современные методы монтажа 
              энергетических систем.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}