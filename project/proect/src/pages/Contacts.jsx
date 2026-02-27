import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contacts() {
  const formRef = useRef();
  const [feedback, setFeedback] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setFeedback("");

    emailjs.sendForm(
      "gmail_service",       // твой Service ID
      "template_hzm0hxx",    // твой Template ID
      formRef.current,
      "hXbwsdu3gFyOo8jQJ"   // твой Public Key
    )
    .then(() => {
      setFeedback("✅ Сообщение успешно отправлено!");
      e.target.reset();
      setSending(false);
    })
    .catch((error) => {
      console.error(error.text);
      setFeedback("❌ Ошибка при отправке. Попробуйте позже.");
      setSending(false);
    });
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f4f6f9" }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Свяжитесь с нами</h2>
        <div className="row g-5">

          {/* Левая колонка: Контакты */}
          <div className="col-lg-5">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100">
              <h4 className="fw-bold mb-4">Наши контакты</h4>

              <div className="d-flex align-items-center mb-3">
                <div className="icon bg-primary text-white rounded-circle p-3 me-3">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Адрес:</h6>
                  <p className="text-muted mb-0">г. Бишкек, ул. Фрунзе, 393</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="icon bg-primary text-white rounded-circle p-3 me-3">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Телефон:</h6>
                  <p className="text-muted mb-0">+996 (777) 777-777</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="icon bg-primary text-white rounded-circle p-3 me-3">
                  <FaEnvelope />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Email:</h6>
                  <p className="text-muted mb-0">info@dimed.kg</p>
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="fw-bold mb-3">Мы в соцсетях:</h5>
              <div className="d-flex gap-3">
                <a
                  href="https://www.instagram.com/bekawwwwwwwww"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                >
                  <FaInstagram /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Правая колонка: Форма */}
          <div className="col-lg-7">
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="p-5 bg-white rounded-4 shadow-lg"
            >
              <h4 className="fw-bold mb-4 text-center">Напишите нам</h4>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Ваше имя</label>
                  <input name="name" className="form-control" placeholder="Иван" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input name="email" type="email" className="form-control" placeholder="example@mail.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Сообщение</label>
                  <textarea name="message" className="form-control" rows="5" placeholder="Чем мы можем вам помочь?" required />
                </div>
                <div className="col-12">
                  <button 
                    type="submit" 
                    className={`btn btn-primary w-100 fw-bold py-2 ${sending ? "disabled" : ""}`}
                  >
                    {sending ? "Отправка..." : "Отправить сообщение"}
                  </button>
                </div>
              </div>

              {feedback && (
                <p className={`mt-3 text-center ${feedback.includes("✅") ? "text-success" : "text-danger"}`}>
                  {feedback}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacts;