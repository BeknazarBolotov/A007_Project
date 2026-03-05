import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contacts() {
  const formRef = useRef();

  const [feedback, setFeedback] = useState("");
  const [sending, setSending] = useState(false);

  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("question");
  const [message, setMessage] = useState("");

  // защита от ботов
  const [startTime] = useState(Date.now());

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d+]/g, ""); // только цифры и +
    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Date.now() - startTime < 4000) {
      setFeedback("❌ Подождите несколько секунд перед отправкой формы");
      return;
    }

    if (phone.length < 6) {
      setFeedback("❌ Введите корректный номер телефона");
      return;
    }

    if (message.trim().length < 15) {
      setFeedback("❌ Сообщение должно содержать минимум 15 символов");
      return;
    }

    setSending(true);
    setFeedback("");

    emailjs.sendForm(
      "gmail_service",
      "template_hzm0hxx",
      formRef.current,
      "hXbwsdu3gFyOo8jQJ"
    )
      .then(() => {
        setFeedback("✅ Сообщение успешно отправлено!");
        setPhone("");
        setCategory("question");
        setMessage("");
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

          {/* Контакты */}
          <div className="col-lg-5">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100">

              <h4 className="fw-bold mb-4">Наши контакты</h4>

              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary text-white rounded-circle p-3 me-3">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Адрес:</h6>
                  <p className="text-muted mb-0">г. Бишкек, ул. Фрунзе, 393</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary text-white rounded-circle p-3 me-3">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Телефон:</h6>
                  <p className="text-muted mb-0">+996 (777) 777-777</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary text-white rounded-circle p-3 me-3">
                  <FaEnvelope />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Email:</h6>
                  <p className="text-muted mb-0">info@dimed.kg</p>
                </div>
              </div>

              <hr className="my-4" />

              <h5 className="fw-bold mb-3">Мы в соцсетях:</h5>

              <a
                href="https://www.instagram.com/bekawwwwwwwww"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
              >
                <FaInstagram />
                Instagram
              </a>

            </div>
          </div>

          {/* Форма */}
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
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Иван"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="example@mail.com"
                    required
                  />
                </div>

                {/* Телефон */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Телефон</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+996700000000"
                    value={phone}
                    onChange={handlePhoneChange}
                    name="phone"
                    required
                  />
                </div>

                {/* Категория */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Категория</label>
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="cowork">Cowork</option>
                    <option value="question">Question</option>
                  </select>
                </div>

                {/* Сообщение */}
                <div className="col-12">
                  <label className="form-label fw-semibold">Сообщение</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Чем мы можем вам помочь?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* Скрытое поле времени */}
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <div className="col-12">
                  <button
                    type="submit"
                    className={`btn btn-primary w-100 fw-bold py-2 ${sending ? "disabled" : ""}`}
                    disabled={sending}
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