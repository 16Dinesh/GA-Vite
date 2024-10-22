import "./forms.css";

export default function BeanAssistForm() {
    return (
        <>
        <div className="content-section">
            <div className="form-container">
            <div className="form-black-box">
                <div className="contact-info">
                    <p>Be An Assist</p>
                    <h2>Become a Part of Our<br />Team</h2>
                    <p>If you have skill in any work field that can help<br />
                        our community, feel free to fill out the form and<br />
                        wait till we reach out to you.</p>
                    <h2>Want to Reach Us?</h2>
                    <p>
                        Do you want to share anything? Reach us by mail or<br /> 
                        you can send a WhatsApp message on
                    </p>
                    <p><strong>PHONE</strong><br />XXXX-XXX-XXX</p>
                    <p><strong>EMAIL</strong><br /><a href="mailto:services@greenassist">services@greenassist</a></p>
                </div>
                
                <div className="contact-form">
                    <h2>Assist Us</h2>
                    <form>
                        <label htmlFor="name">Your Name *</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="phone">Contact Number *</label>
                        <input type="tel" id="phone" name="phone" required />
                        
                        <label htmlFor="city">Which City Do You Live In? *</label>
                        <input type="text" id="city" name="city" required />
                        
                        <label htmlFor="skills">Mention Skills that you have *</label>
                        <textarea id="skills" name="skills" rows="4" required></textarea>
                        
                        <div className="button-container">
                            <button type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>


            </div>
        </div>   
        </>
    );
}
