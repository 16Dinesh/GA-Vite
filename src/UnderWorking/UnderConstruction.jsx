import { Handshake } from 'lucide-react';
import './UnderConstruction.css';

const UnderConstruction = () => {
    return (
        <div className="under-construction">
            <div >
            <Handshake size={100} />            </div>
            <h1 className="title-underwork">Under Construction</h1>
            <p className="message">We're working hard to bring you something special!</p>
            <a href='/home'>To Go Back</a>
        </div>
    );
};

export default UnderConstruction;
