import "./Team.css";
import { FaLinkedin } from 'react-icons/fa';

export default function Teams() {
    return (
        <>
        {/* Team Section */}
        <section className="our-team">
            <h1 className="h1-middle">Our Team</h1>
            <div className="team-boxes">
                <div className="team-member">
                    <img src="/common/basic-profile.svg" alt="Dinesh R" className="team-image" />
                    <h3 className="linkin-name"><FaLinkedin /> - Dinesh R</h3>
                    <h3 className="names2">Founder, Green Assist</h3>
                    <h3 className="names3">E-Mail: <a href="mailto:Dinesh@greenassist.in">Dinesh@greenassist.in</a></h3>
                    <p>Dinesh is responsible for technical operations at Green Assist, focusing on designing innovative solutions. When not immersed in his work, Dinesh finds joy in exploring new culinary experiences, savoring the flavors of different cuisines.</p>
                </div>

                <div className="team-member">
                    <img src="/common/basic-profile.svg" alt="Yeswanth K" className="team-image" />
                    <h3 className="linkin-name"><FaLinkedin /> - Yeswanth K</h3>
                    <h3 className="names2">Founder, Green Assist</h3>
                    <h3 className="names3">E-Mail: <a href="mailto:Yeswanth@greenassist.in">Yeswanth@greenassist.in</a></h3>
                    <p>Yeswanth is in charge of management and negotiating deals with partners at Green Assist. When he's not immersed in his work, Yeswanth finds joy in experiencing nature's wonders.</p>
                </div>
            </div>
        </section>
        </>
    );
}
