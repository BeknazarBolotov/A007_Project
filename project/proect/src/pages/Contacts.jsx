function Contacts() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Свяжитесь с нами</h2>
        <div className="row g-5">
          
          {/* Левая колонка: Контактная информация */}
          <div className="col-lg-5">
            <div className="p-4">
              <h4 className="fw-bold mb-4">Наши контакты</h4>
              
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary text-white rounded-circle p-3 me-3">
                  <i className="bi bi-geo-alt"></i> {/* Или просто текст [!] */}
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Адрес:</h6>
                  <p className="text-muted mb-0">г. Алматы, пр. Аль-Фараби, 77/7</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary text-white rounded-circle p-3 me-3">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Телефон:</h6>
                  <p className="text-muted mb-0">+7 (777) 123 45 67</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary text-white rounded-circle p-3 me-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Email:</h6>
                  <p className="text-muted mb-0">info@dimed.kz</p>
                </div>
              </div>

              <hr className="my-4" />
              <h5 className="fw-bold mb-3">Мы в соцсетях:</h5>
              <div className="d-flex gap-3">
                <button className="btn btn-outline-primary btn-sm">Instagram</button>
                <button className="btn btn-outline-primary btn-sm">LinkedIn</button>
              </div>
            </div>
          </div>

          {/* Правая колонка: Форма обратной связи */}
          <div className="col-lg-7">
            <form className="card p-4 shadow-sm border-0 rounded-4">
              <h4 className="fw-bold mb-4 text-center">Напишите нам</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Ваше имя</label>
                  <input className="form-control" placeholder="Иван" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="example@mail.com" />
                </div>
                <div className="col-12">
                  <label className="form-label">Сообщение</label>
                  <textarea className="form-control" rows="5" placeholder="Чем мы можем вам помочь?" />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-2 fw-bold">Отправить сообщение</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;