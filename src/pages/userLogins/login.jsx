import { useNavigate } from "react-router-dom";

export default function UserLoginPage() {
  const navigate = useNavigate();

  function handleIMGHome() {
    navigate("/home");
  }
  return (
    <>
      <div>
        <img
          style={{
            width: "100%",
            maxWidth: "550px",
            height: "auto",
            display: "block",
            cursor: "pointer",
          }}
          src="/home/Green Assist xml.svg"
          alt="Green Assist Logo"
          onClick={handleIMGHome}
        />
      </div>
    </>
  );
}
