function Contacts() {
  return (
    <div className="container py-5">
      <h2 className="text-center section-title">Свяжитесь с нами</h2>

      <div className="col-md-6 mx-auto">
        <form className="card card-custom p-4 shadow-sm">
          <input className="form-control mb-3" placeholder="Ваше имя" />
          <input className="form-control mb-3" placeholder="Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Сообщение" />
          <button className="btn btn-primary w-100">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
