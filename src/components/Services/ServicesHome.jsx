import { useNavigate, useLocation } from "react-router-dom";
import "./Services.css";

// Services data array for dynamic rendering
const servicesData = [
  {
    title: "Electrical Assist",
    image: "/home/Electrical Assistance.png",
    alt: "Electrical Assistance",
    available: true,
    path: "/service/electrician-assist",
  },
  {
    title: "Water Purifier Assist",
    image: "/home/Water-Purifier Assistance logo.png",
    alt: "Water Purifier Assistance",
    available: true,
    path: "/service/water-purifier-assist",
  },
  {
    title: "Plumbing Assist",
    image: "/home/Plumbing Assistance .png",
    alt: "Plumbing Assistance",
    available: true,
    path: "/service/plumbing-assist",
  },
  {
    title: "Single Driver Assist",
    image: "/home/Single driver Assist logo.png",
    alt: "Single Driver Assistance",
    available: true,
    path: "/service/single-Driver-assist",
  },
];

export default function ServicesHome() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBooking = (service) => {
    if (service.available) {
      navigate(service.path, { state: { from: location } });
    } else {
      alert(`Booking for ${service.title} coming soon!`);
    }
  };

  return (
    <div className="container-flex">
      {servicesData.map((service, index) => (
        <div
          className={`service-box ${!service.available ? "service-box-LAST" : ""}`}
          key={index}
        >
          <img
            src={service.image}
            alt={service.alt}
            className="service-icon"
          />
          <h4>{service.title}</h4>
          {service.available ? (
            <button
              className="service-button"
              onClick={() => handleBooking(service)}
            >
              Book a Assist
            </button>
          ) : (
            <h4>Coming Soon</h4>
          )}
        </div>
      ))}
    </div>
  );
}
