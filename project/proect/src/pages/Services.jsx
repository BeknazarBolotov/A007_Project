import { useState } from "react";
import SolarIcon from "../assets/icons/solar.png";
import PowerIcon from "../assets/icons/energy.png";
import AuditIcon from "../assets/icons/audit.png";

function ServiceCard({ title, desc, features, icon, color, onMore }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="service-card h-100 p-4 shadow-sm rounded-4 text-center position-relative"
        style={{ borderTop: `5px solid ${color}` }}
      >
        <div className="icon-wrapper mb-4">
          <img src={icon} alt={title} style={{ width: 70, height: 70 }} />
        </div>

        <h5 className="fw-bold mb-3">{title}</h5>
        <p className="text-muted">{desc}</p>

        <ul className="service-features mt-3 text-start">
          {features.slice(0, 3).map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <button
          className="btn btn-outline-primary mt-4 w-100 fw-bold"
          onClick={onMore} // кликабельная кнопка
        >
          Подробнее
        </button>

        <style jsx>{`
          .service-card:hover {
            transform: translateY(-10px);
            transition: 0.3s;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
          }
        `}</style>
      </div>
    </div>
  );
}

function Services() {
  const [modalService, setModalService] = useState(null); // null или объект сервиса

  const services = [
    {
      title: "Электроснабжение",
      desc: "Создаём надёжные и эффективные электросети для вашего бизнеса.",
      features: [
        "Проектирование под ключ",
        "Монтаж трансформаторных подстанций",
        "Резервное питание (ДГУ, ИБП)",
        "Модернизация существующих сетей",
        "Мониторинг и техническая поддержка",
      ],
      icon: PowerIcon,
      color: "#0077cc",
      fullText:
        "Электроснабжение – это комплексное решение для промышленных и коммерческих объектов, включая проектирование, монтаж, модернизацию и обслуживание сетей. Мы обеспечиваем стабильную подачу энергии и минимальные риски простоев.",
    },
    {
      title: "Солнечные станции",
      desc: "Используем энергию солнца для снижения затрат и заботы об экологии.",
      features: [
        "Подбор оборудования",
        "Монтаж солнечных панелей",
        "Инверторные системы",
        "Гарантийное обслуживание",
        "Подключение к сети",
      ],
      icon: SolarIcon,
      color: "#f4b400",
      fullText:
        "Солнечные станции помогают бизнесу и частным домам использовать возобновляемую энергию. Мы подбираем оборудование, устанавливаем панели, интегрируем инверторы и обеспечиваем гарантийное сопровождение.",
    },
    {
      title: "Энергоаудит",
      desc: "Оптимизируем потребление энергии и повышаем эффективность.",
      features: [
        "Анализ потребления энергии",
        "Выявление потерь",
        "Рекомендации по оптимизации",
        "Расчёт экономической эффективности",
        "План энергосбережения",
      ],
      icon: AuditIcon,
      color: "#34a853",
      fullText:
        "Энергоаудит позволяет определить слабые места в системе энергопотребления, снизить затраты и повысить эффективность. Мы предоставляем детальный анализ и рекомендации по улучшению.",
    },
  ];

  return (
    <section className="services-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-3 fw-bold display-5">Наши услуги</h2>
        <p className="text-center text-muted mb-5 fs-5">
          Предлагаем полный спектр энергетических решений: от проектирования до обслуживания объектов любой сложности.
        </p>

        <div className="row g-4">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              desc={s.desc}
              features={s.features}
              icon={s.icon}
              color={s.color}
              onMore={() => setModalService(s)} // открываем модалку
            />
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {modalService && (
        <div
          className="modal-overlay"
          onClick={() => setModalService(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="modal-content bg-white p-4 rounded-4 position-relative"
            style={{ maxWidth: "600px", width: "90%", maxHeight: "80%", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()} // предотвращаем закрытие при клике внутри
          >
            <h4 className="fw-bold mb-3">{modalService.title}</h4>
            <p className="text-muted mb-3">{modalService.fullText}</p>
            <ul className="mb-3">
              {modalService.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
            <button
              className="btn btn-primary mt-3 w-100"
              onClick={() => setModalService(null)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;