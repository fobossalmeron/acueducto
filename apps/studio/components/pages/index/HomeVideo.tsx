import React, { useState, useEffect, useRef } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'shader-doodle': any;
    }
  }
}

const HomeVideo = () => {
  const [show, setShow] = useState(false);
  const [shaderLoaded, setShaderLoaded] = useState(false);
  const shaderRef = useRef<any>(null);

  useEffect(() => {
    // Agregar polyfill para clearAnimationFrame
    if (typeof window !== 'undefined' && !window.clearAnimationFrame) {
      window.clearAnimationFrame = window.cancelAnimationFrame;
    }

    let shaderDoodleModule: any = null;

    if (typeof window !== 'undefined') {
      import('shader-doodle')
        .then((module) => {
          shaderDoodleModule = module;
          setShaderLoaded(true);
          setShow(true);
        })
        .catch((error) => {
          console.error('Error cargando shader-doodle:', error);
        });
    }

    // Función de limpieza para cuando el componente se desmonta
    return () => {
      // Asegurarse de que clearAnimationFrame esté definido
      if (typeof window !== 'undefined' && !window.clearAnimationFrame) {
        window.clearAnimationFrame = window.cancelAnimationFrame;
      }

      if (shaderRef.current) {
        // Intentamos acceder a cualquier método de limpieza que pueda tener el componente shader-doodle
        if (typeof shaderRef.current.cancelAnimationFrame === 'function') {
          shaderRef.current.cancelAnimationFrame();
        }

        // También podemos intentar detener cualquier animación en curso
        if (window.cancelAnimationFrame && shaderRef.current._animationFrame) {
          window.cancelAnimationFrame(shaderRef.current._animationFrame);
        }

        // Si el componente tiene un método destroy, lo llamamos
        if (typeof shaderRef.current.destroy === 'function') {
          try {
            shaderRef.current.destroy();
          } catch (e) {
            console.error('Error al destruir shader-doodle:', e);
          }
        }
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 mx-auto h-[120vh] w-full max-w-[1500px] mix-blend-lighten">
      {shaderLoaded && (
        <div
          className={`fixed inset-0 z-50 h-screen w-screen transition-opacity duration-[2000ms] will-change-[opacity] ${
            show ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <shader-doodle
            ref={shaderRef}
            className="absolute inset-0 h-full w-full"
          >
            <script type="x-shader/x-fragment">{`
              precision mediump float;

              // Función para generar ruido
              float noise(vec2 st) {
                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
              }

              float rand(float x) {
                return fract(sin(x) * 12345.6789);
              }

              void main() {
                vec2 st = gl_FragCoord.xy / u_resolution.xy;
                float t = u_time * 0.2; // Movimiento más lento

                // Centro del blob que se mueve
                vec2 blobCenter = vec2(
                    0.5 + sin(t * 0.7) * 0.3 + sin(t * 0.4) * 0.2,
                    0.5 + cos(t * 0.5) * 0.2 + cos(t * 0.3) * 0.3
                );

                // Distancia al centro del blob
                float dist = length(st - blobCenter);
                
                // Ruido para deformar el blob
                float deformation = noise(st * 3.0 + t * vec2(0.3, 0.2)) * 0.3;
                deformation += noise(st * 5.0 - t * vec2(0.2, 0.3)) * 0.2;

                // Forma base del blob
                float blob = smoothstep(0.4 + deformation, 0.0, dist);

                // Preferencia por el lado derecho
                float rightBias = smoothstep(0.0, 1.0, st.x) * 0.5 + 0.5;
                
                // Color base (accent puro)
                vec3 baseColor = vec3(0.0, 0.4, 1.0);
                
                // Colores de interferencia
                vec3 interference1 = vec3(0.0, 0.35, 0.9);
                vec3 interference2 = vec3(0.0, 0.25, 0.95);

                // Mezclamos los colores
                vec3 color = mix(vec3(0.0), baseColor, blob * rightBias);
                
                // Efectos adicionales de ruido
                float noiseEffect = noise(st * 4.0 + t * vec2(0.4, 0.5));
                
                color = mix(color, interference1, noiseEffect * blob * 0.7);
                color = mix(color, interference2, noiseEffect * blob * 0.4);

                // Intensidad general
                color *= 1.8;

                gl_FragColor = vec4(color, 1.0);
              }
            `}</script>
          </shader-doodle>
        </div>
      )}
    </div>
  );
};

// Añadimos tipos en el objeto Window global
declare global {
  interface Window {
    clearAnimationFrame?: (id: number) => void;
  }
}

export default HomeVideo;
