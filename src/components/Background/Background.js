import "./Background.css";

import React, { Component } from "react";
import Particles from "react-tsparticles";

class Background extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
  }

  particlesInit(main) {
    //console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    //console.log(container);
  }

  render() {
    return (
      <Particles
        id="particles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "#77b287",
            },
          },
          fpsLimit: 100,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              grab: {
                distance: 400,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 100,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 125,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}
export default Background;
