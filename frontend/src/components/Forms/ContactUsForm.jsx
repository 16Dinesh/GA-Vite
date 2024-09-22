import "./forms.css"

export default function ContactUsForm() {

    return (
        <>
        <div class="content-section">
            <div class="form-container">
            <div class="form-black-box">
                <div class="contact-info">
                    <h5>Give Us a Call</h5>
                    <h2>Reach Out for Skilled Assistance</h2>
                    <p>Have a question or need assistance? Reach out to us for expert services!</p>
                    <p><strong>PHONE</strong><br/>XXXX-XXX-XXX</p>
                    <p><strong>EMAIL</strong><br/><a href="mailto:Contact@greenassist">Contact@greenassist</a></p>
                </div>
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <label htmlFor="name">Your Name *</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="phone">Contact Number *</label>
                        <input type="tel" id="phone" name="phone" required />
                        
                        <label htmlFor="address">Your Address</label>
                        <input type="text" id="address" name="address"/>
                        
                        <label htmlFor="reqHelp">How may we help? *</label>
                        <textarea id="reqHelp" name="reqHelp" rows="4" required></textarea>
                        
                        <div className="button-container">
                            <button type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>   
        </>
    )
}