import "./Testimonials.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Testimonials() {
    // Testimonials data for dynamic rendering
    const testimonialsData = [
        {
            name: "Varsha",
            feedback: "I recently opted for plumbing services, and I must say, I was thoroughly impressed by the workmanship. They completed the job in under 30 minutes, and I didn't encounter any issues afterward. Overall, it was a very positive experience, and I'm quite satisfied with the service provided.",
        },
        {
            name: "NoName",
            feedback: "Impressed with Fan Repair Services. The fan now works perfectly. The technician was polite and professional. He arrived on time and had all the necessary equipment. Highly recommend their services.",
        },
        {
            name: "Dinesh",
            feedback: "I opted for their Water Purifier Services. I have gotten my purifier cleaned and changed the candles. Earlier my purifier was making sounds and now after the repair, the purifier is working just fine. Thanks to Green Assist.",
        },
    ];

    return (
        <>
            <h3 className="title-bold">What Our Customers Say</h3>
            <div className="container-flex">
                {testimonialsData.map((testimonial, index) => (
                    <div className="boxes" key={index}>
                        <div className="icon-text-wrapper">
                            {/* <i className="fas fa-quote-left quote-icon"></i> */}
                            <FormatQuoteIcon sx={{fontSize: "40px" , color: "#5B864D"}}/>
                            <h6>{testimonial.name}</h6>
                        </div>
                        <p>{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
