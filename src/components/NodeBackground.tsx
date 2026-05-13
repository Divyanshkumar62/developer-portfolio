import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Engine, type Container } from "@tsparticles/engine";

const NodeBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: true, mode: "grab" },
              resize: { enable: true },
            },
            modes: {
              grab: {
                distance: 200,
                links: { opacity: 0.6 },
              },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: "#a2eede" },
            links: {
              color: "#a2eede",
              distance: 150,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 0.6,
              straight: false,
            },
            number: {
              density: { enable: true },
              value: 120,
            },
            opacity: {
              value: 0.4,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default NodeBackground;
