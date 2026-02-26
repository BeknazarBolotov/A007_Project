import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px" }}>404</h1>
      <p>Страница не найдена</p>
      <Link 
        to="/" 
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 24px",
          background: "#00b894",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;