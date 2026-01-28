- about tamaño de imagen
- Revisar webhook de prismic
- Aislar los deploys de studio y de podcast? 
- Configurar el nuevo proyecto de cuandoelriosuena.vercel.app


Revisar si esto es relevante:
Turbo env para build
En turbo.json los builds ya declaran PRISMIC_* y NEXT_PUBLIC_*. Si el podcast usara más vars (por ejemplo BREVO_*), podrías añadirlas a env en la task build para que los builds no usen caché incorrecto cuando cambien esas variables.