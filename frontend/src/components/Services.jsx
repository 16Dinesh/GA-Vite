import "./Services.css";

// Services data array for dynamic rendering
const servicesData = [
  {
    title: "Plumbing Assistance",
    image: "/home/Plumbing Assistance .png",
    alt: "Plumbing Assistance",
    available: true,
  },
  {
    title: "Electrical Assistance",
    image: "/home/Electrical Assistance.png",
    alt: "Electrical Assistance",
    available: true,
  },
  {
    title: "Water-Purifier Assistance",
    image: "/home/Water-Purifier Assistance logo.png",
    alt: "Water Purifier Assistance",
    available: true,
  },
  {
    title: "Single Driver Assistance",
    image: "/home/Single driver Assist logo.png",
    alt: "Single Driver Assistance",
    available: true,
  },
  {
    title: "Coming Soon",
    image: "/common/Question Mark.png",
    alt: "Coming Soon",
    available: false,
  },
];

export default function ServicesHome() {
  const handleBooking = (serviceTitle) => {
    alert(`Booking for ${serviceTitle} coming soon!`);
    // Add logic here for booking functionality
  };

  return (
    <>
      <h3 className="title">In Services</h3>

      <div className="container-flex">
        {servicesData.map((service, index) => (
          <div className={`service-box ${!service.available ? "service-box-LAST" : ""}`} key={index}>
            <img src={service.image} alt={service.alt} className="service-icon" />
            <h4>{service.title}</h4>
            {service.available ? (
              <button
                className="service-button"
                onClick={() => handleBooking(service.title)}
              >
                Book a Service
              </button>
            ) : (
              <h4>{}</h4>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
