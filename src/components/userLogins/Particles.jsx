import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function UserLoginParticles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

      const particlesLoaded = (container) => {
        console.log(container);
      };
    
      const options = useMemo(
        () => ({
          background: {
            color: {
              value: "#5B864D",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#f6f6f6",
            },
            links: {
              color: "#ffffff",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 50,
            },
            opacity: {
              value: 2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 8 },
            },
          },
          detectRetina: true,
        }),
        []
      );

    return (
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )   

}