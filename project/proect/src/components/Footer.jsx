function Footer() {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container text-white">
        <div className="row">
          {/* Контакты */}
          <div className="col-md-4 mb-4">
            <h5>Контакты</h5>
            <p>Телефон: +996 700 123 456</p>
            <p>Email: info@dimed.kg</p>
            <p>Адрес: Улица Фрунзе 393а, Бишкек</p>
          </div>

          {/* Карта */}
          <div className="col-md-8 mb-4">
            <h5>Мы на карте</h5>
            <div className="map-container">
              <iframe
                title="Bishkek Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.2628544771583!2d74.59883621547386!3d42.87459457916006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8cbdb9fc001%3A0x9e282f6e4c6f1c04!2sFrunze%20393a%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1670000000000!5m2!1sen!2skg"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          &copy; 2026 Dimed. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
