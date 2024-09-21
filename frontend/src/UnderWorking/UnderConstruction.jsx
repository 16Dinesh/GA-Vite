import './UnderConstruction.css';

const UnderConstruction = () => {
    return (
        <div className="under-construction">
            <div className="construction-icon">
                <i className="fa-solid fa-hammer"></i>
            </div>
            <h1 className="title-underwork">Under Construction</h1>
            <p className="message">We're working hard to bring you something special!</p>
        </div>
    );
};

export default UnderConstruction;
