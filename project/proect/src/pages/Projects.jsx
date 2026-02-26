import { useState } from "react";
import Project1a from "../assets/images/project1-1.jpg";
import Project1b from "../assets/images/project1-2.jpg";
import Project2a from "../assets/images/project2-1.jpg";
import Project2b from "../assets/images/project2-2.jpg";

function Projects() {
  const projects = [
    { 
      title: "Солнечный парк 'EcoWave'", 
      location: "Алматы", 
      images: [Project1a, Project1b],
      desc: "Мощность 5 МВт, включает более 10 000 солнечных панелей. Полный цикл: проектирование, монтаж и обслуживание.",
      technologies: ["Солнечные панели LG", "Инверторы SMA", "Системы мониторинга SCADA"]
    },
    { 
      title: "Заводской энергоузел", 
      location: "Астана", 
      images: [Project2a, Project2b],
      desc: "Энергоузел для крупного промышленного комплекса, обеспечивает 100% энергоснабжение завода.",
      technologies: ["Трансформаторы ABB", "ДГУ резервное питание", "Система автоматизации"]
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentImage((currentImage + 1) % selectedProject.images.length);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    setCurrentImage((currentImage - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-5">Наши проекты</h2>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-4" key={i}>
              <div className="project-card shadow-lg rounded-4 h-100 overflow-hidden p-3 d-flex flex-column">
                <img 
                  src={p.images[0]} 
                  alt={p.title} 
                  className="img-fluid rounded-3 mb-3"
                  style={{ objectFit: "cover", height: "220px" }}
                />
                <h5 className="fw-bold">{p.title}</h5>
                <p className="text-primary fw-semibold mb-1">{p.location}</p>
                <p className="text-muted mb-3">{p.desc.substring(0, 80)}...</p>
                <button 
                  className="btn btn-primary mt-auto"
                  onClick={() => {setSelectedProject(p); setCurrentImage(0);}}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно с галереей */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>✖</button>
              
              {/* Галерея */}
              <div className="gallery">
                <button className="prev-btn" onClick={handlePrev}>‹</button>
                <img 
                  src={selectedProject.images[currentImage]} 
                  alt={selectedProject.title} 
                  className="img-fluid rounded-3 mb-3" 
                />
                <button className="next-btn" onClick={handleNext}>›</button>
              </div>

              <h3 className="fw-bold">{selectedProject.title}</h3>
              <p className="text-primary fw-semibold">{selectedProject.location}</p>
              <p className="text-muted">{selectedProject.desc}</p>
              <h6 className="mt-3">Используемые технологии:</h6>
              <ul>
                {selectedProject.technologies.map((tech, idx) => (
                  <li key={idx}>✔ {tech}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;