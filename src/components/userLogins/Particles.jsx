import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./UserLoginParticles.css"; // Custom styles

export default function UserLoginParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };
    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#5B864D" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          bubble: {
            distance: 250,
            size: 10,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
          grab: {
            distance: 200,
            lineLinked: { opacity: 0.6 },
          },
          push: { quantity: 5 },
          repulse: { distance: 300, duration: 0.4 },
        },
      },
      particles: {
        color: { value: ["#ffffff", "#f6f6f6"] },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "random",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 3,
          straight: false,
        },
        number: { density: { enable: true }, value: 200 },
        opacity: { value: { min: 0.8, max: 1 } },
        shape: { type: "circle" },
        size: {
          value: { min: 3, max: 8 },
          animation: { enable: true, speed: 5, sizeMin: 0.2, sync: true },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div>
      <div className="particles-container">
        <Particles
          id="tsparticles"
          loaded={particlesLoaded}
          options={options}
        />
        <div className="centered-text">
          <span className="green-text">Green</span>{" "}
          <span className="white-text">Assist</span>
        </div>
      </div>
      <div className="bottom-links-container">
        <Link to="/home" className="bottom-link1">
          if you see the progress click here
        </Link>
        <Link to="https://github.com/16Dinesh/GA-Vite" className="bottom-link2">
          if wish to Help Us Visit Our GitHub
        </Link>
      </div>
    </div>
  );
}
