import SolarIcon from "../assets/icons/solar.png";
import PowerIcon from "../assets/icons/energy.png"; // Добавьте этот файл
import AuditIcon from "../assets/icons/audit.png"; // Добавьте этот файл

function ServiceCard({ title, desc, icon }) {
  return (
    <div className="col-md-4">
      <div className="card card-custom p-4 text-center h-100 shadow-sm">
        {/* Центрируем иконку с помощью mx-auto */}
        <img 
          src={icon} 
          alt={title} 
          className="mx-auto" 
          style={{ width: 60, height: 60, marginBottom: 15 }} 
        />
        <h5 className="fw-bold mb-3">{title}</h5>
        <p className="text-muted">{desc}</p>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { 
      title: "Электроснабжение", 
      desc: "Комплексные решения по обеспечению стабильной подачи электроэнергии.",
      icon: PowerIcon 
    },
    { 
      title: "Солнечные станции", 
      desc: "Проектирование и внедрение современных систем солнечной генерации.",
      icon: SolarIcon 
    },
    { 
      title: "Энергоаудит", 
      desc: "Анализ энергопотребления и снижение затрат.",
      icon: AuditIcon 
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Наши услуги</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <ServiceCard 
              key={i} 
              title={s.title} 
              desc={s.desc} 
              icon={s.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;