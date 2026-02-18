function Services() {
  const services = [
    {
      title: "Электроснабжение",
      desc: "Комплексные решения по обеспечению стабильной подачи электроэнергии."
    },
    {
      title: "Солнечные станции",
      desc: "Проектирование и внедрение современных систем солнечной генерации."
    },
    {
      title: "Энергоаудит",
      desc: "Анализ энергопотребления и снижение затрат."
    }
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">Наши услуги</h2>
      <div className="row g-4">
        {services.map((s,i)=>(
          <div className="col-md-4" key={i}>
            <div className="card card-custom p-4 h-100 text-center">
              <h5 className="fw-bold mb-3">{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
