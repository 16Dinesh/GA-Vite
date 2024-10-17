import { Link } from 'react-router-dom';
import './UnauthPage.css'; 

function UnauthPage() {
  return (
    <div className="unauth-container">
      <div className="lock-icon">🔒</div>
      <h1 className="unauth-title">Access Denied</h1>
      <p className="unauth-message">You don't have permission to view this page.</p>
      <p className="unauth-hint">Please contact your administrator if you think this is a mistake.</p>
      <Link to="/home" className="back-link">
        Go Back Were You Are
      </Link>
    </div>
  );
}

export default UnauthPage;
