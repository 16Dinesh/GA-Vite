import { Link } from 'react-router-dom';
import './index.css'; 

function NotFound() {
  return (
    <div className="Not-Found-container">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="graphic"
      >
        <ellipse cx="200" cy="350" rx="180" ry="40" fill="#F8C471" />
        <circle cx="100" cy="280" r="20" fill="#F5B041" className="small-bounce" />
        <circle cx="300" cy="270" r="30" fill="#F5B041" className="large-bounce" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#F39C12"
          fontSize="48"
          fontFamily="Arial"
        >
          404
        </text>
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#D35400"
          fontSize="18"
          fontFamily="Arial"
        >
          Page Lost in the Desert!
        </text>
      </svg>
      <p className="Not-Found-message">Looks like you're wandering in the sands of nowhere.</p>
      <Link to="/home" className="back-link">
        Find Your Way Back
      </Link>
    </div>
  );
}

export default NotFound;
