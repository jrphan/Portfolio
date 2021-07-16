import Particles from 'react-particles-js';

import React from 'react';

function Particle() {
  return (
    <>
      <Particles width="100%" height="100vh" 
              params={{
                particles: {
                  number:{
                    value:80,
                    density:{
                      enable: true,
                      value_area: 2000
                    }
                  },
                  color:{
                    value: '#2e344e'
                  },
                  shape:{
                    type: 'polygon',
                    stroke: {
                      width: 2,
                      color: '#636e72'
                    },
                    polygon:{
                      nb_sides: 5
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    opacity: 0.4,
                    width: 0.7,
                    shadow: {
                      enable: true,
                      color: "#e74c3c",
                      blur: 5
                    }
                  },
                  move:{
                    enable: true,
                    random: false,
                    speed: 2,
                    straight: false,
                    outMode: 'out',
                    attract:{
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim:{
                      speed: 40,
                      size_min: 0.1,
                      enable:false,
                      sync: false
                    }
                  },
                  opacity: {
                    value: 0.8,
                    anim: {
                      speed: 1,
                      opacity_min: 0.1
                    }
                  }
                }
              }}
      />
    </>
  )
}

export default Particle;