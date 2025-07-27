---
episode: 84
date: "2023-03-06"
title: Cómo construir una herramienta con código escalable
guest: Oscar Castillo
business: Worky
category: Desarrollo
description: Acompáñanos con Oscar Castillo, CTO de Worky, la startup remota de recursos humanos número uno en México.
insights:
  - <b>Las estimaciones optimistas son responsabilidad de tus desarrolladores pero también de tu organización.</b> Los procesos de una compañía deben evitar que las estimaciones individuales guíen el calendario de entregas, en Worky, todo el equipo de desarrollo trabaja en intervalos fijos de seis semanas siguiendo el framework de Shape Up.
  - <b>¿Cómo es este framework?</b><br/>
    &nbsp - Tomas un problema<br/>
    &nbsp - Identificas qué solución se puede diseñar y desarrollar en 6 semanas con tu equipo de desarrollo, diseño y product management.<br/>
    &nbsp - Se fija el alcance y se comienza a trabajar.<br/>
    &nbsp - El resultado de este periodo puede ser maleable pero el plazo de 6 semanas no. Y si la funcionalidad no se desarrolla en esas seis semanas, se deshecha.
  - <b>Optimiza el tiempo de tu equipo de QA.</b> En Worky prueban en dos ambientes de desarrollo antes de salir a producción, cada uno con su testing automatizado, en el primero prueba QA y en el segundo toda la célula de trabajo.
  - <b>Choose boring technology.</b> Utilizar tecnología de punta puede complejizar el proceso de desarrollo, por eso en Worky se decidieron por tecnologías con comunidades fuertes y bien documentadas.
spotify: https://open.spotify.com/episode/5MiOMyosSwEFARsBvBa3pF
apple: https://podcasts.apple.com/us/podcast/e84-c%C3%B3mo-construir-una-herramienta-con-c%C3%B3digo-escalable/id1500473556?i=1000602904410
google: https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz/episode/QnV6enNwcm91dC0xMjM2OTA5OQ?sa=X&ved=0CAUQkfYCahcKEwjwrbWexcf9AhUAAAAAHQAAAAAQAQ
youtube: https://www.youtube.com/watch?v=1v_gMHAf9D8
---

**Artemio:** ¡Hola! ¿Qué tal? Bienvenidos a una edición más de Cuando El Río Suena, el podcast en el que estamos ayudando a la gente y a la comunidad de emprendedores en Latinoamérica a construir cosas donde antes no había nada. El día de hoy me acompaña, como ya es costumbre, mi socio Rodrigo, ¿cómo estás, Ro?

**Rodrigo:** ¿Qué tal? Muy bien

**Artemio:** Qué gusto estar grabando uno más de estos episodios. Yo creo que esto se ha convertido en una de mis partes favoritas del trabajo que hacemos. El día de hoy nos acompaña Oscar Castillo de Worky, ¿cómo estás, Oscar?

**Oscar:** Muy bien, muchas gracias, ¿ustedes qué tal?

**Artemio:** Muy bien, arrancando el día e intrigados en qué tal está el clima allá en Mérida, que es desde donde te estás conectando.

**Oscar:** Ya empezó el calor, tuvimos mucha frescura los últimos meses, pero hoy ya el calor es ese que todos se imaginan de Mérida.

**Artemio:** Es un calor que te apachurra, no es juego de niños el calor de allá.

**Oscar:** Sí y uno quiere trabajar remoto, pero, en estas épocas, hay que meterse donde hay techo y aire acondicionado.

**Artemio:** Yo me acuerdo que fui a Sisal hace como dos años, era temporada de invierno y aún así sufrí un poco el calor de allá. La gente que vivía allá me decía “esto que estás viviendo no tiene nada que ver con el verano”.

**Oscar:** Sí, hoy estamos a unos templados 30°.

## ¿Cuál es el _pitch_ de elevador de Worky?

**Artemio:** Oscar, lo que te trae a la mesa el día de hoy es tu posición como CTO en Worky y, para poner a toda la gente en la misma página, ¿podrías contarnos cuál es su _pitch_ de elevador y cómo ofrecen valor al mercado?

**Oscar:** Worky es una plataforma de recursos humanos que brinda transparencia a los administradores y a los empleados. Recursos Humanos es una de estas últimas partes a las cuales le invierten las empresas, pero es la más importante, son las personas que trabajan contigo, que ellos tengan transparencia, claridad de qué se espera de ellos, de sus vacaciones, sus bonos, su sueldo, todo esto que pasa alrededor de la vida del colaborador dentro de una empresa y centralizarlo, digitalizarlo, que en México sufrimos un montón de que nada está digitalizado, entonces estamos ayudando en ese lugar.

**Artemio:** Qué fregón. Mencionas algo bien importante y que me hace reflexionar ahorita. Pareciera que los departamentos de RRHH son los últimos que se forman en las empresas en crecimiento. Arrancas corriendo con diseño, desarrollo, ventas, marketing, primero vende y luego resuelve y, tal vez, ya que empieza a crecer la empresa y que empiezas a tener un volumen considerable de colaboradores es cuando ya dices “necesito a alguien de RRHH porque no sé cuándo están siendo las vacaciones, la gente me hace preguntas repetitivas todo el tiempo, aquí están bien molestas tres personas”.

También mencionas esto de que es la parte más importante de una empresa, sus colaboradores. Algo que siempre decimos en este espacio es que algo de lo que no se percatan muchos fundadores y CFOs es que, si tú elevas el promedio de retención que tiene tu empresa, el dinero que te ahorras en materia de rotación, de liquidaciones, de todo este tema, es muchísimo y ya no tienes que estar sudando los _pennies_, como dicen allá en Estados Unidos, porque esto te ahorra muchísimo dinero, además de todas las ventajas que te da tener un equipo a largo plazo que está unido y motivado, mínimo en línea y en la misma página respecto a qué es lo que se espera de ellos.

**Oscar:** Y tocaste un punto importantísimo que es la rotación. Al poner Worky en las empresas, les ayudamos a disminuir esta rotación, les damos visibilidad clara de qué está pasando con sus empleados, cómo se sienten, qué tanto toman vacaciones, esto de las vacaciones se puso de moda ahorita, somos de los países con menos vacaciones y ese tipo de cosas los empleados lo merecemos y tenemos que tratar de hacer el proceso lo más sencillo posible porque en México todo se siente como burocracia.

**Artemio:** Sí, luego en estas empresas que no se han digitalizado que mencionas, te dicen “ve con el de RRHH”, pero el de RRHH no está, pero está su asistente y tú le dices a él, pero el asistente no le dice al de RRHH y ya pasaron 5 días, pero luego el plazo para pedir las vacaciones ya pasó entonces no las puedes pedir y hay ahí un problema que nunca tuvo que haber existido si la cosa hubiera sido digital en un _dashboard_ organizado.

## ¿Cómo miden el clima laboral con Worky las empresas?

**Rodrigo:** Oye, Oscar, vimos en su plataforma que ustedes miden el clima laboral, que pensamos que es la interacción que hay entre todos los colaboradores de la empresa, cómo se siente para cada uno de ellos individualmente, si piensan que las cosas se están poniendo tensas, si consideran que la comunicación y la convivencia es amena y sana, ¿cómo miden esto? ¿Qué tecnología utilizan para poder generar esta data?

**Oscar:** La generamos de dos principales módulos. El más sencillo es algo que llamamos Pulso. Todas las semanas, a partir del miércoles, te sale una encuesta de cómo te sientes con cinco opciones: enojado, motivado, feliz, triste. Opciones sencillas así de caritas y vamos midiendo por persona, por área y demás, eso ya lo mostramos en un reporte detallado para que puedas ver la evolución de las áreas, de la persona, y puedas tener una foto clara de simplemente cómo se sienten ahora, ayer, hace un mes o el año pasado.

Tenemos otra parte de evaluaciones que son estas evaluaciones 360 de cómo te perciben, es una evaluación mucho más amplia del clima laboral y la vamos desplegando por áreas, cómo te sientes con tu jefe, cómo te sientes tú, te califican tus iguales, la gente que te reporta también y son estas evaluaciones 360 que nos ayudan a tener esta foto clara de cómo te estás desarrollando dentro de la empresa.

**Rodrigo:** Es como un sistema complejo de encuestas que después se despliega en forma de _dashboard_ informativos para la administración y contrae récords largos para que puedan ver la evolución del tiempo.

**Oscar:** Sí. Al principio sólo era web y ya después lo pasamos a las aplicaciones móviles y este proceso de ir contestando estas evaluaciones en móvil lo hizo más _engaging_, como dirían los marketeros, e hizo que la gente lo usara más, que realmente entrara más a detalle, y también permitimos a las empresas crear sus propias evaluaciones con más detalle, decidir a quién se los envían, si son sólo encuestas, si es una evaluación directa y cosas por el estilo. También les brindamos toda esta herramienta para que ellos decidan qué es lo que quieren estar preguntando.

**Artemio:** Además me imagino que este factor móvil para llenar la encuesta, porque me imagino que no todo mundo la llena, aunque esté ahí semanalmente, seguro ayuda mucho el factor notificación _push_ en el momento particular para que contesten esto o si no lo han contestado, para perseguirlos un poco.

**Oscar:** Obviamente, cuando tú entras a tu Worky, tal vez entras a pedir vacaciones, un día libre, un día personal o bajar tu recibo de nómina, hacer alguna de estas cosas o, tal vez, hay empresas que lo usan para _time_ _check_, como reloj checador, entonces entras a hacer eso y, justo después, te sale la encuestas de cómo te sientes.

## ¿Cómo hacen en Worky para que todas las funcionalidades de su plataforma funcionen correctamente?

**Artemio:** Está fantástico, Oscar, qué emocionante herramienta la que están construyendo ahí en Worky. Vimos en el sitio que hacen un chorro de cosas. Dentro de las funcionalidades que vimos está el administrar la nómina, esto de medir el clima laboral, administrar las vacaciones, los bonos y beneficios, son muchos componentes los que ustedes están automatizando y, aunque muchos tienen que ver con formularios dinámicos como esto del clima laboral, ¿cómo hacen para que no se les quiebre el robot? Porque luego pasa mucho en los desarrollos, particularmente en los que no se hacen con mucho cuidado, que le mueves algo a la cosa que está por allá y quiebras la que está allá atrás, entonces vas y arreglas la de atrás y, mientras la arreglas, se rompe otra cosa por allá. ¿Qué acercamiento tienen a esta problemática?

**Oscar:** Tratando de romper un poquito la arquitectura para que sea un poco más claro, nuestro _back_ _end_ tiene sus propias pruebas. Entonces, cada vez que se lanza alguna cosa, alguno de nuestros ambientes, sea de prueba o de producción, corren un montón de pruebas automatizadas, cada vez que entra un nuevo _feature_ o algún nuevo módulo, tiene que correr todas las otras pruebas automatizadas que ya teníamos, no les digo que tenemos un 100% de _coverage_, pero tal vez un 70% y nos ayuda a estar seguros de que lo que estamos lanzando atrás está funcionando.

Lo mismo con el _front_ _end,_ lo que estamos lanzando hacia adelante está funcionando, y pruebas de integración, que se vea como se tiene que ver y haga lo que tiene que hacer y también cuando se comunique atrás, que haga lo que tiene que hacer.

Y todavía después de todo esto, cuando se va a lanzar, el mismo Kubernete levanta la nueva versión, prueba que sí haya levantado y, ya que levanta, empieza a sustituir los otros _pods_ para que, por lo menos, estés siempre seguro de que lo que estás lanzando al menos carga de un lado, ya hiciste pruebas del _back_, que te da los datos que te tiene que dar, el _front_ da los datos y se ve como se tiene que ver, y el Kubernete es que cargue.

Estamos más o menos seguros y, obviamente, hay un equipo de QA que también va validando todo esto y es un gran esfuerzo pero es el esfuerzo que debes tener cuando la gente que utiliza tu plataforma espera que estés 24 horas al día, 7 días a la semana funcionando.

Uno de los desarrolladores, Osiel, que cuando preparó su propuesta de reloj checador, puso una foto de “3am. Es momento de checar y calcular mi nómina”, la gente en cualquier momento lo hace y tienes que estar listo para eso.

**Artemio:** Sí, es como esta anécdota que tiene alguien del equipo de Kavak, que le abrió mucho la mente cuando vio la primer compra de un auto a las 3am. Ese es el paradigma digital del que hablamos, es lo que estamos esperando, incluso comprar un coche en la madrugada, si es ahí donde me agarra el impulso, tener la posibilidad de hacerlo desde mi teléfono o desde una computadora.

## ¿En qué parte del proceso de desarrollo entra el equipo de QA de Worky?

**Rodrigo:** Y, profundizando un poco más en esta pregunta. Si ya tienen sus pruebas en el _back_ y sus pruebas en el *front*  y está este proceso de _DevOps_ al final, ¿en dónde meten a su equipo de QA? ¿Cómo saben qué componentes o qué piezas o dónde meter a su equipo de QA? Es una plataforma grande, ¿cómo saben dónde alocar los recursos para saber dónde necesitan más pruebas además de las que ya has mencionado?

**Oscar:** Worky se divide en _pods_. Estos _pods_ son un _Product Manager,_ un _back_ _end_, un _front_ _end_, un móvil si se requiere, un UX y un QA. Ellos funcionan como este pequeño equipo de fut7 que en realidad son 6 y no tienen cambios. Se ponen de acuerdo en qué se va a lanzar en este proceso que usamos que se llama Shape Up y ellos deciden qué va a pasar en esas 6 semanas.

**Artemio:** ¿Es el de Basecamp?

**Oscar:** Sí, es ese. Entonces se ponen de acuerdo, ya saben qué va a pasar y tenemos estos ambientes de pruebas internos y, al lanzar a ese ambiente de pruebas, ya pasamos todas estas pruebas que te contaba, ya llegó al ambiente de pruebas y ahí ya entra la persona de QA a evaluar. Y con todas estas cosas de pruebas de regresiones, de funcionalidad y todo lo que tiene que hacer un QA todos los días y lo hace sobre el módulo y sobre lo que quedaron en ese momento.

Y sí, inevitablemente hay veces que se nos puede romper algo que no estás viendo o que no está cubierto por otras pruebas, pero va pasando en estos _stages_ en desarrollo en QA y tenemos una pre producción, que ahí todavía se le da otra vuelta, y tal vez, ahí el _Product_ también entra y le da una vuelta y alguien más del equipo le da otra vuelta y ya luego se va a producción.

Inevitablemente, me ha pasado en esta y en otras startups. Llegas a producción y hay algo que se rompió, entonces también hay que reaccionar rápido y poder tener esta capacidad de post lanzamiento, poder lanzar _fixes_ rápidamente y entender qué es lo que falló.

## ¿Qué es la metodología Shape Up?

**Artemio:** 100%. Nosotros apenas nos encontramos hace unos meses con esta metodología de Shape Up, es un libro que no he terminado yo de leer, pero me parece bien interesante esta metodología y creo que eres el primer CTO con el que hablamos que nos dice específicamente de ese método. Para la gente que está escuchando, ¿podrías darnos un 101 de en qué consiste?

**Oscar:** Shape Up es un poquito diferente a SCRUM y demás, deja las decisiones más cerca de las personas que están metidas en el código, que están metidas ahí en el hacer y en el día a día. Al principio, tú, junto con un PM, un UX, un programador, se juntan y empiezan a hacer este paquetito de Shape Up y dicen “queremos apostar por esto” y esto puede ser el próximo lanzamiento, nuestro módulo de libros va a ser de venta inmediata. Entonces empiezan a desarrollar las funcionalidades muy grandes y sin tanto detalle.

**Artemio:** ¿Como garabatos?

**Oscar:** Sí, como de plumón ancho, para decir “esto, en 6 semanas, vamos a poder lanzarlo a producción” es algo pequeño, pero alcanzable, que realmente vaya a hacer un impacto positivo hacia el producto. Y obviamente ya te aventaste mucha investigación, sabes cómo usan tu producto. No lo recomendaría tanto para aquellos que apenas están buscando su p*roduct-market fit*, tal vez para aquellos que ya estén más avanzados, entonces haces tu apuesta, en 6 semanas vamos a lograr esto, el _back_ _end_, el _front_ _end_, todas estas personas que están en este _pod_ están de acuerdo en que en 6 semanas va a poder llegar a producción.

Entonces, en lugar de tener 80 mil tickets y alcances, cargas y demás, es algo mucho más sencillo donde todos los programadores saben sus capacidades, saben sus alcances, saben lo que hay en la plataforma también y eso les ayuda para poder estar arriba en 6 semanas, esta discusión entre UX, producto y desarrolladores que el latino escucha la palabra discusión y se lo toma a mal, pero es una discusión donde realmente estamos creando y, al final, los programadores, Product Managers, diseñadores, UX, todo mundo somos creadores entonces debemos tener esta capacidad de definir qué vamos a crear en 6 semanas. Es lo que me encanta a mí de Shape Up.

También hay una cosa súper dura de que, si llegas a la semana 3 o a la semana 4, y te das cuenta de que no lo vas a lograr o que mediste mal el alcance, vas para atrás. No te atores en un proyecto que no va a lanzarse, que no va a llegar a producción, porque somos startups que nos tenemos que estar moviendo rápidamente y demostrándole valor a nuestro usuario.

**Artemio:** Ahí yo quería preguntarte algo. Algo que me llama la atención de esta metodología es uno de sus encabezados, que decía “somos flexibles con el entregable, pero nada flexible con este lapso de tiempo de 6 semanas para entregar una funcionalidad” y yo pensé que sí es claro el norte y queda la cosa en 7 o 9 es el _scope_ un poco para que sí se llegue o no, pero lo que me parecía radical de la metodología era que, si no llegabas, en teoría se desecha el proyecto. ¿Ustedes siguen esto? ¿Sí desechan ese trabajo? ¿Y qué hacen después? Porque se meterán en problemas todas las personas que estimaron eso, ¿cómo abordan ustedes esto? Qué privilegio poderte preguntar estas cosas.

**Oscar:** Siéndote muy franco, de, tal vez, cinco o seis proyectos que se nos han ido a más de 6 semanas, sólo hemos aplicado el _short_ _circuit_ una vez. Es duro. Pero, de lo que me he dado cuenta en los otros cinco, aunque le dediques más semanas, te puedes ir a 8, 12, 15 semanas con ese proyecto y aún no así no estar seguro de lo que estás sacando y, como programador, me ha pasado miles de veces que, de repente, yo pongo el alcance y fuera de esta metodología digo “voy a mejorar este módulo” y lo que pensé que me iba a tomar 3 días, me tomó 3 semanas y no salgo del problema y te empiezas a meter en problemas más profundos y es donde te das cuenta de que no planteaste bien el problema a solucionar. Ya no es tu capacidad de desarrollar, sino que es que lo que planteaste inicialmente está mal. Y esa manera de radicalizarlo y de verlo un poco diferente hace que ahora todos en el equipo traten de plantear los problemas diferentes.

Y algo que habla mucho internamente el equipo de Worky es “no hablemos de soluciones, hablemos del problema”, empecemos a planear bien el problema y eso nos está ayudando mucho mejor a ser lo dinámico que necesita el mercado de las startups.

**Rodrigo:** Qué interesante, Oscar. Nos habíamos topado con ese método y nos quedamos pensando en dónde puede funcionar esto y en donde no. Nosotros somos un estudio de producto y, al final, hay un cliente al que hay que entregarle un producto y seguirlo desarrollando, entonces aquí esto está muy raro, pero, probablemente, en startups, donde son mucho más dueños de su tecnología, de su avance, puede ser más útil y sí resultó que aquí es donde se están aplicando estas tecnologías.

## ¿Cómo es el proceso de estimaciones en Worky?

**Rodrigo:** También tocaste otra parte importante que te queríamos preguntar al respecto del _scope_ y de las estimaciones. Les estamos preguntando a todos los CTOs que vienen al programa sobre su proceso de estimación porque todos nos hacen caras cuando hacemos la pregunta. Hay unos sistemas muy complejos que, aún así, nadie deja de llamarles estimaciones.

**Artemio:** En UnDosTres consideraban como 50 factores y, aún así, a lo que les daba, le ponían como 30% de margen de error.

**Rodrigo:** Entonces, Oscar, ¿cómo es el proceso de estimación de Worky? ¿Cómo intentan mitigar estos riesgos que existen alrededor de las malas estimaciones? Justo como en este ejemplo que nos contabas de que, intentando resolver algo de dos días, nos vamos a las dos semanas, de que no se plantea bien el problema, ¿qué tienen ustedes de mecanismos, además de esta metodología que nos cuentas, para intentar mitigar ese problema?

**Oscar:** Hacemos un poquito diferente el software y el producto digital. Nos enfocamos a los problemas como te decía, que empezamos a hablar de problemas, de todos nuestros usuarios. Tenemos un montón de módulos, tenemos 12 módulos realmente, entonces, el equipo está enfocado en ese módulo y sabe qué problemas hay. Ya con eso pueden decir “OK, mi siguiente ciclo de 6 semanas vamos a apostar por resolver este problema, entonces empiezan a hacerlo lo más pequeño posible porque, si tú hablas de que vas a hacer un módulo que sea agregar, borrar, cambiar datos de la tarjeta de crédito cuando la domiciliación cambia, suena sencillo, suena como este _breakdown_ de “vamos a hacer algo ágil de SCRUM y lo puedo hacer en tickets”, pero, si profundizas un poco más, el monto de tarjetas cambia porque hay gente de plan anual o plan mensual, entonces ya te estás yendo y ya no son 2 semanas. Ya tal vez son 16 tickets y esos 16 tickets se van volviendo tan complejos que lo que hicimos fue desechar todo eso y pensar en qué queremos, por ejemplo “quiero mejorar la manera de cobrar a los usuarios”, okay, tenemos tantos tipos de usuarios, tantos tipos de tarjeta, vamos a resolver uno de esos problemas. Tengo 6 semanas, ¿qué tanto del problema puedo resolver en 6 semanas? Y dejamos que el _back_ _end_, el _product_, el _front_ _end_ y UX se junten y realmente discutan eso, qué de eso pueden resolver en 6 semanas. Obviamente ya conoces sus capacidades de programación, ya investigaron el módulo, somos mucho de documentación, de comunicación asíncrona, entonces todo eso ya está ahí y cada desarrollador puede levantar un ambiente igualito al de producción con su _data_ _fake_, puede probar y ver, es que tengan todas las herramientas en el lugar para poder emular lo más posible a producción y entender cómo van a poder modificarlo.

En ese momento, el desarrollador y el _product_ están en un acuerdo y dicen “esto sí puedo resolverlo en 6 semanas”. Es cambiar un poco el _scope_ de cómo piensas las cosas porque, como desarrollador, y lo sabemos, hay muchos desarrolladores que son muy ordenados, perfectamente ordenados y te pueden dar un _breakdown_ de 45 tickets en Jira y su _board_ de Jira es hermoso, pero, aún así, llegan a un problema y puede que se atoren. Y también hay desarrolladores que son un caos y lo resuelve en dos días. Cada desarrollador sabe también cómo hace las cosas y, te digo, obviamente hay un montón de estándares, de libertad que, para tener la libertad, debes tener los estándares para que los puedan consultar, entonces dejamos que cada desarrollador lo haga. Y claro que hay algunos que se percibe que se mueven más rápido, pero estamos entregando valor a nuestros usuario, que es lo más importante ahorita, no cuántas estrellas tengas en GitHub, sino qué tanto tus usuarios están usando tu producto.

**Rodrigo:** Claro, entonces, si entiendo bien, echan el vestido sobre la mesa, después miden las 6 semanas y cortan ahí, de forma que no estamos intentando resolver todo el problema, sino resolver los suficiente que da ese tiempo y esa metodología.

**Artemio:** Y qué interesante porque sí cambia la dinámica. Cambia de preguntarle al desarrollador “¿cuánto te toma?” Y después medir ese tiempo y esa estimación que él hizo a “te va a tomar 6 semanas, ¿qué puedes resolver en ese periodo de tiempo?” Y me imagino que, cuando ya llevas unos tres o cuatro de estos, ya eres mucho más bueno estimando en intervalos de 6 semanas.

**Oscar:** Yo odiaba, siendo programador, que llegaran y me dijeran “tienes que lanzar eso en dos días”. Podría hacer mi mejor esfuerzo, no dormir, echarle todas las ganas y, aún así, lo que sale a producción es algo que todos sabemos que está en alfileres.

**Rodrigo:** Detenido con pinzas en el detrás de cámaras.

## ¿Cuál es el stack tecnológico que utilizan en Worky?

**Rodrigo:** Oscar, te queríamos preguntar, algo que también procuramos revisar con los CTOs que vienen a este programa es ¿cuál es el _stack_ tecnológico que utilizan en Worky y por qué eligieron ese? Casi siempre nos encontramos una mezcla entre Node para la parte de atrás y React para la parte de adelante, pero, cuando no nos encontramos esa, es muy interesante saber por qué y luego también hay muchos diferentes _flavors_ de lo que se puede hacer con estas tecnologías, entonces cuéntanos un poco, ¿qué es lo que hacen en Worky?

**Oscar:** Claro. Nuestro _back_ _end_ está en Python, usamos Django porque nos gustaba mucho usar Django en otros proyectos, hay muy buena documentación, una comunidad bien grande, escala y, obviamente, siempre habrá diferentes opiniones de que puede escalar más, pero no estamos construyendo Uber y hay que ser honestos con nosotros mismos también y esto nos está funcionando excelente en nuestro _back_ _end._

Nuestro _front_ _end_ es con Vue.js y lo mismo, hay una buena comunidad, tal vez ahí simplemente por probar un nuevo sabor y no hacerlo todo con React, hemos usado React en algunos otros proyectos, pero nos quedamos con Vue.js, nos gustó y nos sentimos cómodos con la comunidad sobre todo, que creo que es lo esencial, si tú puedes entrar a la comunidad de ese _stack_ y te sientes cómodo con la documentación, le estás entendiendo, esa es la comunidad que debes de tomar.

Ya les había contado que teníamos este proceso de desarrollo donde usamos Gib Lab, usamos pipeline y toda esta onda, todo está coordinado con Kubernetes por atrás, pensando escalar, en probar nueva tecnología.

También tenemos otro pensamiento que es _choose boring technology_, tecnología que está probada, que tiene una comunidad grande, que no te va a meter en aprietos cada dos semanas. Nos gusta la tecnología y nos gusta probar cosas y creo que en el lugar en el que nos pusimos más atrevidos es en la aplicación móvil, usamos Flutter y nos encanta.

**Rodrigo:** Esto que mencionas de que primero se elige la comodidad y luego la tecnología es importantísimo porque tener tecnología punta de lanza pero que no hay a quién preguntarle en el mundo cómo se resuelven ciertos problemas incluso problemas que no se pueden resolver de forma muy sencilla en otros frameworks o con otros estilos, luego con las tecnologías demasiado nuevas te toca ser a ti el que lo resuelve y va a Stack Overflow a contestarle a todos los demás que están trabados y eso es insostenible si quieres correr una startup y quieres poner de acuerdo a un montón de desarrolladores de que trabajen y que trabajen solos, sin estar, aunque tú ya la conozcas un poco más, evaluando todo el tiempo cómo funciona esa tecnología.

**Oscar:** Exacto, no quieres ser _beta_ _tester_, tal vez a veces, pero no con todo.

**Artemio:** Exacto, no con todo. Es bien importante eso.

## ¿Cómo lidia el CTO de Worky con los desarrolladores que siempre dan largas de su trabajo y que nunca llegan a tiempo?

**Artemio:** Oscar, a ver si no me proyecto un poquito con esta pregunta. Hemos hablado mucho de estimaciones y nos hemos encontrado con un par de perfiles de desarrolladores que son muy optimistas con sus estimaciones, pero no llegan a ellas. Igual es gente que tal vez es muy agradable y es muy optimista porque, cuando no llegan, te dicen “pero ya está el 95%, hoy en la tarde noche entra a producción”, pero no llegan. O luego son malos comunicando que van tarde y te das cuenta de que ya van tarde hasta el día de la entrega. ¿Cómo lidias tú con eso?

**Oscar:** Yo aprendí a lidiarla cuando, hace mucho tiempo, me dijeron la analogía del programador al mecánico mexicano, es como el mecánico que dice “ahí está tu coche, ya pedí la pieza”, entonces me di cuenta de eso y sí, los programadores tienden un poco a eso y hay dos cosas: La comunicación abierta todo el tiempo, el dime cómo vas, dime cómo te sientes, este _daily,_ que acá internamente lo aceptamos escrito, para que la gente no sienta que debe tener esta llamada a las 8am, todos con ojeras, más bien dímelo por escrito cuando quieras, y te ayuda a más o menos ver la temperatura de la situación.

Es comunicación abierta, el entender que el que tú me digas que vas bien, que vas mal, que te encontraste algún problema o algo que no está saliendo, es normal y es parte de programar. No requieres un castigo, no requieres un problema, entonces abrir la comunicación.

Y la otra cosa es que, cuando son muy optimistas y tal vez sí son muy buenos desarrolladores y te pueden ayudar, ayudarles a entender sus problemas y hacerlos mucho más claros, pequeños y sencillos para poderlos atacar, creo que luego se dice por ahí que, cuando reconoces al _senior_ _developer_ es porque este _developer_ ya te sabe decir exactamente cuándo no va a entregar.

Eso te lo va dando la experiencia, pero tratar de ayudarles a que eso sea lo más sencillo, que te puedan decir, que puedan hacer los problemas más pequeños. También, como desarrollador, de repente te encuentras con problemas que no son tan solucionadles como lo habías pensado.

**Rodrigo:** Entonces, digamos, estamos pasando un problema que normalmente ponemos en los hombros de desarrollo a un problema organizacional. O sea, en lugar de que la falla sea por parte del desarrollador optimista, más bien, el sistema no debe de permitir que los desarrolladores optimistas fallen de esa forma.

**Artemio:** Mejor por diseño que por el criterio de alguien.

**Rodrigo:** Cualquier proceso empresarial que pase entre más manos tiende a tener mejores resultados, es más robusto y se prueba entre más manos.

## ¿Cómo luce en Worky el proceso de _onboarding_ de desarrolladores?

**Rodrigo:** Otra cosa por la que queríamos pasar, Oscar, que también tiende a ser muy valioso y muy interesante en la cultura particular de cada startup cómo _onboardean_ a sus nuevos desarrolladores. Hemos vistos procesos de dos meses, procesos de dos semanas, procesos de inmersión inmediata después de leerse una documentación y, bueno, la verdad es que todos los CTO, también nos han contado procesos de _onboarding_ de otras áreas, nadie está inconforme con su proceso de _onboarding_. Siempre que una startup llega a este programa, normalmente ya tiene una trayectoria considerable, entonces son procesos que se han trabajado, pero nunca ha llegado nadie a decirnos “nuestro proceso no funciona, hay muchas cosas que mejorar”, este tipo de cosas sí se perfeccionan rápido, a diferencia, por ejemplo, de lo que decías, de que Recursos Humanos es un departamento que llega tarde a existir en las empresas, parece ser que, cuando se trata de los _onboardings_, es un problema que sí se detecta a tiempo, pero ¿cómo funcionan los _onboardings_ de desarrolladores en Worky? ¿Cuál es el proceso?

**Oscar:** Ya les había contado que somos una empresa totalmente remota y eso representa en sí un problema para cualquier _onboarding_, el no conocer a las personas, no ver el ambiente tan rápido, y lo primero que le decimos a todos es que Slack es nuestra oficina, utiliza Slack verdaderamente, con los iconos, el estado, las caritas, todo.

Lo segundo es leer un montón. Lo ideal en Worky es que todos lean todo lo que hay, pero sabemos que es un montón y, de repente, no te va a dar tiempo, no vas a saber exactamente dónde seguir, pero es leer un montón y la diferencia que creo que también nos ha ayudado mucho es que todos nuestros documentos de _onboarding_ son editables. Entonces, si tú llegaste a la empresa y te das cuenta de que necesitas hacer algo pero te falta información, lo primero que te pedimos es que edites el documento. Ese documento es tuyo, es nuestro, es abierto. Entonces todo mundo va editando conforme van entrando y eso nos ha ayudado a que, así como iteramos en nuestro producto, iteramos en nuestro _onboarding_. Entonces todo el mundo va mejorándolo y otra de las cosas que tenemos acá es que el objetivo es crear y compartir conocimiento, entonces todo el conocimiento que debemos tener está escrito y lo único que pedimos es que llegues con algo de tu código en los primeros 100 días a producción, lo que sea. Porque, de repente, hay empresas que lo hacen más chiquito, dos o tres semanas, y hay un _commit_ del cambio de color del botón, pero queremos que sea algo realmente importante, entonces leer un montón, tenemos un proceso también que es _Starting_ _Up_, las primeras dos semanas a las 10am hablas diario con tu _manager_, tienes esta apertura para preguntarle qué sigue, por dónde me enfoco, hago esto o aquello. Entonces es un montón de leer, un _manager_ que te lleva de la mano y, después de esas dos semanas, te entregamos a tu _pod_ y venga, a crear código y, como les decía, todas las herramientas para poder mandar a producción las tienes al alcance y ya nada más es seguir el proceso que está escrito.

**Artemio:** Fantástico, entonces son como estas dos semanas de acompañamiento y al ruedo. Fíjate que has dicho varias cosas que dejan ver un poco la cultura de Worky como una empresa remota y asíncrona y explotando esto más como una ventaja o como un paradigma más allá que como, tal vez, una limitación, por así decirlo, porque también mencionabas que tienen sólo 4 días laborales, eso está cañón y yo creo que, en gran medida, lo que permite este tipo de cosas es el factor asíncrono, el que todo esté documentado y que se pueda consultar siempre. Es bien interesante eso y todas esas reglas que dejas documentadas, es un gran debate cómo medir, cuál es más productivo o no, si gente que está en un paradigma presencial, uno híbrido o uno remoto, pero, sin duda, yo creo que, para el colaborador, tal vez para nuestra generación, siempre va a ser más cómodo lo remoto y lo asíncrono, el no tener que depender de alguien o tener que picarle a alguien para poder hacer algo, sino que sea un poquito más _permitionless_ la cosa, obviamente no enteramente que cada quien hace lo que quiere, pero sí tener esta libertad.

**Oscar:** Claro y todo se basa en que, si lo tienes en escrito, puedes ir a tu ritmo. Hay _developers_ que les encanta trabajar en lapsos de 12 horas y hay developers que dicen “sólo me puedo concentrar dos o tres horas”, entonces, el tenerlo tan asíncrono les permite muchísimo ir a su ritmo y que pueda aportar a nuestro proyecto a su ritmo, pero de la mejor manera para ellos.

## ¿Cuál ha sido el resultado de Worky teniendo una semana laboral de 4 días?

**Rodrigo**: Oye, Oscar, saliéndome un poco de guion, pero, aprovechando lo de la semana de 4 días, ¿cómo llegaron ahí? Hemos escuchado que la productividad aumenta, nosotros, por ejemplo, trabajamos menos horas al día, pero ¿cómo funciona cortar un día? ¿Cuál día es el que cortan? ¿Cómo han medido la diferencia o empezaron así desde que arrancaron? Me imagino que la metodología de las seis semanas ayuda a que puedas reducir el número de días, porque ahí están los objetivos muy claros, pero, la otra es, ¿esto es únicamente para desarrolladores o toda la empresa sigue el mismo sistema?

**Oscar:** A la mitad del 2021, nuestra _Head_ de Producto, Patricia Arroyo, llegó con el plan de hacer 4 días a la semana, propuso que experimentáramos 3 meses, que es más o menos un Shape Up y un cachito más, para ver si lo estamos haciendo bien, experimentemos, midamos, preguntemos al principio, midamos productividad, cómo se lanza, cómo impacta, tengamos esta visión clara de si sí nos está afectando positiva o negativamente. Iniciamos con el experimento en septiembre del 2021, lo cerramos en diciembre, que todos saben que, en México, la vida se detiene y, en enero, nos sentamos, analizamos todas las variables, cómo se sintió el equipo, cómo fueron los lanzamientos, cómo fue el uso de la plataforma y demás, y, básicamente, en su momento, vimos que todo estaba bien y decidimos que Desarrollo de Producto se quedaba con la semana de 4 días para siempre.

Las otras áreas, siguiendo nuestro ejemplo, empezaron a adoptar, a hacer sus experimentos y hay áreas que lo están implementando poco a poco y, obviamente, hay miedos, por ejemplo, qué pasa si un cliente te busca en viernes a las 5pm, y tenemos que poner esas guardias y esa manera de trabajar. Tal vez _Customer_ _Success_ no puede tener el viernes libre o unos tienen el viernes y otros tienen el lunes para no afectar tanto al equipo. Pero creo que, sobre todas las cosas, la productividad se mantuvo o subió un poco porque también el trabajo creativo de diseñar producto o interfaces, programar software, es cansado y a todos nos ha pasado que el viernes a las 10am u 11am ya estamos pensando en que se acabe, ya ni siquiera estoy haciendo nada o mandando nada. Entonces, ese día extra de descanso le permitió a todo el equipo cambiar cómo ven las cosas. Su viernes es su día de familia o, tal vez, es su día libre y su sábado es su día de familia, el domingo ya están bien descansados y el lunes vienen con todo, a diferencia de otras épocas en las que los lunes eran difíciles y arrancaban realmente hasta como las 2pm.

Seguimos midiendo, seguimos midiendo el clima interno, cómo vamos lanzando, que no nos estemos tardando de más, que la plataforma siga creciendo, pero creo que el hacer cuatro días a la semana realmente nos hace también enfocarnos. Quitamos un montón de malos hábitos, de que dejamos de tener juntas innecesarias, tener un día en el que sólo nos vamos a enfocar, ni siquiera vamos a tener juntas ese día y sólo puedes enfocarte en tu trabajo, es esto que se llama _deep work_, sea programar, escribir, sea diseñar, sea lo que tengas que hacer.

Lo mismo que les decía, hay un montón de reglas, pero estas reglas nos ayudan a tener un montón de libertad interna que hace que la productividad explote.

**Artemio:** Qué interesante porque, además de sólo ser 4 días, tienen un día de _no_ _meetings_, está cañón.

## ¿Qué viene en el futuro para la industria tecnológica?

**Artemio:** Oscar, preguntándote más tirando la mirada hacia el futuro, hay muchísimos _coders_ en el mercado laboral, también hay más gente preparándose para la labor que nunca y, además, sumándole a que ya hay muchos y aunque creo yo que faltan todavía y ahí viene una ola de gente que se está educando en materia, hay también muchísimas tecnologías que están emergiendo todos los días para hacer más sencilla la labor de programación. Yo creo que la última que ha hecho muchísimo ruido es todo el tema de inteligencia artificial y construir cosas mediante _prompts_, pero ¿hacia dónde crees que vamos? ¿Qué esperas tú en el futuro en esta industria tecnológica? si es que hay algo que veas y creas que para allá va la cosa. Y, así de vaga y amplia la pregunta, puedes tomarte la libertad de contestar lo que quieras.

**Oscar:** Hay una realidad: el mundo se mueve a una velocidad y, esto que dices de AI para _coding_, para búsqueda, para todo esto, y hay otra realidad, la realidad de México donde la digitalización no ha llegado a todos lados, casi nadie se ha bancarizado, casi nadie usa internet más allá de Facebook o de Instagram, entonces hay un montón de espacio en nuestro país para hacer un montón de cosas y tal vez son unas de nicho, un montón de soluciones que solucionen nada más ciertas ciudades o ciertos estados, somos un país gigantesco. Hay startups completas europeas que sólo funcionan en un país, por ejemplo, Inglaterra, y su población es pequeña comparada con la de México.

Hay un montón de espacio para diseñar en México, para cometer errores y tener ese espacio; hay un montón de _coders_ que el mercado sí les va a demandar estar mucho más entrenados, tal vez este entrenamiento básico ya no va a hacer diferencia con un code Copilot y te vas a tener que preparar más, vas a tener que tener también un entendimiento local de qué está pasando, en qué puedes ayudar, en qué puedes digitalizar. Hay un montón de espacio en México para un montón de cosas que no están en esto, por ejemplo, del lado de Recursos Humanos, hay muchísimas empresas que siguen utilizando el gabinete en la oficina para guardar los expedientes y, en el momento de la pandemia, no podía calcular sus nóminas porque no tenían nada, todo estaba en la oficina y no podían ir a la oficina, algo así de sencillo, entonces hay espacio, sólo les diría a todo mundo que nos gusta esto que hay que seguir preparándonos y lo que nos acercó a esto es que nos gusta, pero eso es la parte sencilla, seguir buscando qué aprender de nuevo, lo que nos esté demandando el mercado y que nos gusté.

**Artemio:** Y yo creo que esa parte de mantenerse siempre aprendiendo es fundamental, particularmente en la industria tecnológica, porque, de no ser así, sencillamente, te quedas atrás, llega alguien que sí se preparó y te quita el cachito de silla que tenías en tu asiento en la banca.

**Rodrigo:** E ir desarrollando también el _expertise_ porque eso es lo que te logra permanecer vigente a través del tiempo, más que el aprendizaje continuo, el aprendizaje preciso en un tema particular donde te vuelves un experto y puedes aconsejar no necesariamente sobre la tecnología, pero sí sobre ese problema.

**Oscar:** Y tocas un punto muy importante. Al final, _coders_ y demás estamos solucionando problemas y, si tenemos esa capacidad de ponerlos en el _framework_ adecuado, entender el problema y de _break_ _it_ _down_, yo creo que eso es mucho más importante que la sintaxis que puedas tener sobre lenguaje A o lenguaje B o lenguaje C.

**Rodrigo:** Claro porque, además, esa sintaxis es la que viene a corregir Copilot o el ChatGPT, que le preguntas “¿qué está mal en este código?” Y te da exactamente cuál es la coma que te faltó y si el símbolo iba para este lado o para el otro.

## ¿Cuáles son los retos más grandes a los que se enfrenta Worky y su CTO en los próximos años?

**Rodrigo:** Oscar, ya nos estamos acercando al final de este programa, pero nos queda la última pregunta, que es una que nos encanta hacerle a todos los invitados, no hay un episodio en el que no la hayamos hecho desde que comenzamos a hacerla. Ante los retos que enfrenta Worky y tú como su CTO en los próximos años, ¿qué te quita el sueño?

**Oscar:** Qué pregunta tan difícil. Un montón de cosas me quitan el sueño, desde el precio del Bitcoin. Creo que, del lado del CTO de Worky, es poder generar cultura de desarrollo que nos permitan desarrollar aquí porque, al estar en tantos _workrooms_ con tantos inversionistas, siempre sale el “contrata en América a programadores” o “contrata en la India programadores” o “outsourcea el problema”, pero creo que desarrollar esa creatividad y pasar México de un país de manufactura a un país de creación es lo que me quita el sueño en lo personal, creo que hay mucha capacidad, ya les decía, somos un montón de personas, debe de haber, así como debe de haber 11 jugadores que lo hagan bien, debe de haber 3 mil programadores que entren a cambiar mucho de la situación, pero hay que crear las estructuras adecuadas, hay que crear las condiciones adecuadas, las comunidades para que se sientan apoyados, para que puedan buscar, entender cómo solucionar los problemas. Yo creo que eso es lo que más me quita el sueño, el poder reflejar ese valor de hacer las cosas de software de este lado con los que somos y también poder construir esos lugares para que sí se puedan hacer acá.

**Artemio:** Excelente. Oscar, te agradecemos muchísimo por venir a este espacio a platicar con nosotros y a compartir tras bambalinas cómo es que trabajan ahí en Worky y a nerdear. Le recuerdo a toda la gente que nos está escuchando que en [cuandoelriosuena.com](http://cuandoelriosuena.com/) ustedes se pueden suscribir a la newsletter de este programa, ahí les mandaremos una notificación cada que tengamos un capítulo nuevo, noticias de la conferencia anual que tenemos, Latam Startup, este año se viene muy cañona, así que vale la pena que se suscriban a esa newsletter. Nuevamente, muchas gracias, Oscar, sabemos lo valioso que es tu tiempo y el de toda la gente que viene para acá, muchas gracias, Ro, y muchas gracias a todo el equipo de producción que hace posible este espacio. ¡Nos vemos a la próxima!
