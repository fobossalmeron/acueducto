---
episode: 92
date: "2023-05-01"
title: Así funciona un equipo de desarrollo en 16 países distintos
guest: Carlos Cruz
business: Ontop
category: Founder
description: Bienvenido a un episodio con Carlos Cruz, CTO de OnTop, la plataforma de contratación remota que permite trabajar con colaboradores en +150 países.
insights:
  - <b>Es imposible escalar sin buenas prácticas en código y documentación. </b> Carlos nos cuenta que cuando eran un equipo reducido podían estar más relajados con la estructura del código, pero para escalar a un equipo de muchos desarrolladores se vuelve una práctica vital.
  - <b>La mejor forma de evitar problemas de comunicación en tu equipo es evaluar esas capacidades desde la contratación. </b> Carlos nos cuenta que su proceso de contratación involucra pruebas de comunicación orales y escritas, así reducen los riesgos de tener una compañía remota.
  - <b>Si buscas un producto bello, necesitas QA manual para evaluar la calidad. </b> Las pruebas automatizadas son muy útiles para asegurar la integridad de tu producto, pero Carlos nos recomienda que si nos interesa conservar una gran calidad gráfica, necesitamos que un diseñador haga QA manual.
spotify: https://open.spotify.com/episode/0UseD51NlQdBBl1wWvf0rk
google: https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz/episode/QnV6enNwcm91dC0xMjc0NTE2NQ?sa=X&ved=0CAUQkfYCahcKEwiIlPTvx9T-AhUAAAAAHQAAAAAQAQ
apple: https://podcasts.apple.com/us/podcast/e92-as%C3%AD-funciona-un-equipo-de-desarrollo-en-16/id1500473556?i=1000611269619
youtube: https://www.youtube.com/watch?v=2nka_XVtnQE
---

**Artemio:** Hola, ¿qué tal? Bienvenidos a todos a una edición más de Cuando el Río Suena, un podcast que está hecho para todas esas personas que están construyendo algo donde antes no había nada, y para todos aquellos que se encuentran en esta carrera tan emocionante que es construir un negocio saludable de Internet. 

El día de hoy me acompaña, como siempre, mi socio Rodrigo. ¿Cómo estás Ro?

**Rodrigo:** ¿Qué tal muy bien? 

**Artemio:** Esta es la última entrevista de esta jornada de grabación, misma que será con Carlos Cruz de Ontop ¿Cómo estás, Carlos?

**Carlos:** Hola, ¿qué tal? Equipo de Cuando el río suena y auditorio, muchísimas gracias por la invitación. Primero que nada, para mí es un gusto estar con ustedes y espero poder aportar a su audiencia con todo lo que ha sido mi camino durante mi carrera como CTO en Ontop.

## ¿Cuál es el Pitch de Elevador de Ontop?

**Artemio:** Precisamente lo que te trae a la mesa el día de hoy es tu puesto como CTO ahí en Ontop. Para poner a todos en la misma página ¿Por qué no empiezas contándonos cuál es su *pitch* de elevador? Para todos aquellos que no conocen de sus servicios.

**Carlos:** Sí, claro que sí, va a ser un gusto. Con la pandemia, el trabajo remoto y las necesidades de diferentes empresas para obtener talento en cualquier parte del mundo, contratar de manera tradicional no estaba funcionando definitivamente. Si en la actualidad vivimos en un mundo sin fronteras y el trabajo remoto es lo de hoy, lo que necesitamos y lo que el mundo necesita es esa plataforma para contratar trabajadores en cualquier parte del mundo y de forma legal. Además de poder pagar de forma rápida y en una moneda fuerte como el dólar. 

En O*ntop*, ofrecemos esta plataforma en nómina o *payroll,* conectado a sistemas financieros para trabajadores internacionales. Es decir, cualquier empresa que contrate a través de nosotros puede hacer el *onboarding* o el ingreso de sus trabajadores o contratistas desde nuestra plataforma. Esos trabajadores, al estar dentro de nuestra plataforma, automáticamente reciben una Ontop *wallet*, que es algo similar a una cuenta de nómina, pero de forma digital.

**Artemio:** Okay, está fantástico, atacan una necesidad muy nueva en el mercado y muy latente al mismo tiempo. Es muy fácil tú ser un emprendedor de esta nueva generación y ni siquiera solo de *startups* tecnológicas, sino alguien de esta generación con una empresa y algo que tú desbloqueas al momento de decidir operar una empresa de manera remota es que el talento que puede trabajar en ella ya no solo se limita a la ubicación geográfica de tu negocio, sino que puedes tomar de un *pool* de talento genuinamente mucho más grande, internacional, mucho más variado. 

Hemos platicado con empresas que tienen en sus equipos de diseño 30 nacionalidades distintas y esa idea suena muy padre, pero en el momento en el que tú ves la burocracia que necesitas como empresa mexicana para contratar a un extranjero, se te hace un nudo en el estómago y dices ¿Cómo le voy a hacer? Y de ahí nacen este tipo de soluciones que dan al clavo en un problema que vivimos el día de hoy. 

## ¿Cómo es un día de Carlos como CTO de Ontop? ¿Cómo convives con el área de producto?

**Rodrigo:**  Y Carlos, particularmente en tu labor de *CTO* en Ontop, en el trabajo que haces todos los días. ¿Cómo es? Sabemos que los roles en una *startup* van cambiando conforme la etapa de la de la empresa, ¿Qué estás haciendo ahorita todos los días? Y ¿Cómo convives con el área de producto?

**Carlos:**  Claro que sí. Como mencionas, yo creo que un CTO tiene diferentes actividades de acuerdo a la *stage* o la etapa de la compañía; yo te voy a platicar un poco y en mi caso cuando Ontop estaba muy en *early stage*, mis actividades eran mucho más *hands on* y enfocadas al día a día, en ese momento estaba con *full* atención en liderar la construcción de un producto de *Payroll* para *workers* Internacionales y operarlo. Además de armar el equipo necesario para el siguiente *stage*, que es en el que estamos ahora. 

Recuerdo cuando en Ontop éramos cerca de 15 *Ontopers* sólo en el equipo de tech y producto, ahora somos más de 100 *rockstars* en el equipo de tech y producto solamente; con estos *rockstars* estamos construyendo esta plataforma de pago para contratar a trabajadores de forma legal en cualquier parte del mundo. Adicional a eso, tenía el reto de poder crear y conectar productos financieros, que fueran un servicio adicional a nuestra herramienta de *payroll* de forma complementaria. 

Actualmente, como CTO, no suelo liderar el *tech team* o el equipo de ingeniería, sino también estoy a cargo del equipo de producto, es decir, ambos equipos son un solo equipo, y esto nos ayuda a tener un mejor ritmo de trabajo, además de una excelente sinergia y una buena organización.
Ahora, mi rol es mucho más estratégico, increíble *team* que tenemos de *managers* que me ayudan con la operación de día del día a día, así yo me enfoco en metas un poco más estratégicas; el ver el futuro de Ontop a nivel de producto y tecnología con todas las tendencias que vienen, hacia dónde vamos a ir, qué cosas vamos a ir integrando a nuestra plataforma que nos van a hacer aportar valor a nuestros clientes. 

## ¿En qué está concentrado el equipo de tecnología de Ontop?

**Artemio:** Por ahí va la siguiente pregunta que queremos hacerte ¿En qué está concentrado el equipo de tecnología de Ontop en este momento? Mencionabas como el wallet que tienen para empleados, todo un tema de automatización, de papeleo que te evitas al hacerlo con ustedes, en vez de irse por una vía tal vez más tradicional, el tema de los pagos ¿En qué están concentrados ahorita para aportar valor a sus usuarios?

**Carlos:** Sí, al final siempre queremos hacer un mejor producto, siempre queremos ofrecer algo de mayor calidad, una de nuestras metas es crear el mejor sistema de *payroll* del mundo conectado a servicios financieros. Creo que siempre va a ser como nuestra n*orth star*, esa estrella que nos va a guiar. Del lado de *payroll,* en este momento estamos construyendo un producto que nos ayude a atender no solo a *Pymes* o S*tartups*, sino que también nos ayude a ayudar a empresas con necesidades de EOR, *simply of record,* *full time employee* o incluso empresas enormes como *Enterprise*. Lo que queremos hacer es dar una experiencia transparente para nuestros usuarios, sin importar el tipo de negocio o el país en donde esté. 

En cuanto a servicios financieros, estamos trabajando en varias verticales, desde *International Perks and Benefits* para todos los *workers* de estos clientes, pasando por hacer más rápido los procesos de transferencias internacionales e incluso conectar productos para el *ending* o *payment advance, y* además **lo más importante, ahora estamos por lanzar nuestra Ontop *Fiscal Card* que *e*s una tarjeta física, la cual va a permitir al *worker* o a nuestro usuario Ontop hacer uso de sus honorarios o su compensación para pagar en cualquier comercio en el mundo al ser una tarjeta Visa.

**Artemio:** Okay, es como una tarjeta de nómina de un banco tradicional que te da Ontop por si tú estás ahí cobrando tu salario ¿Cierto?

**Carlos:** Exactamente, un usuario normalmente, un worker, un trabajador de cualquier cliente recibe esta wallet, que es donde le pagan sus honorarios y su compensación y él la puede transferir a cualquier cuenta bancaria de forma internacional; en más de 22 países es de manera inmediata y en los demás países tarda porque varía el sistema financiero de cada país, adicionalmente tenemos el producto de Ontop Card, que eso es una tarjeta digital y estamos por lanzar la tarjeta física, de esa manera pueden usar el dinero que ganan por trabajar de manera digital y lo van a poder hacer de manera física en cualquier comercio al estar respaldada por Visa.

**Rodrigo:** Está fenomenal. A ver igual y esto se escapa un poco del *scope* que estábamos platicando, pero fiscalmente ¿Cómo funciona eso para los empleados?

**Carlos:** Para empezar, la relación laboral siempre es directamente con la empresa, esa es una modalidad que tenemos, o también nosotros tenemos una modalidad que nosotros ayudamos a contratar a los trabajadores como si fueran contratistas, quiere decir que es un pago por alguna tarea en específico o por o alguna situación determinada por proyecto. 

De manera fiscal, al ser contratistas, es como si tuvieran contratados por honorarios, entonces nosotros hacemos el pago de estos honorarios o de esta compensación por el trabajo y cada *worker* está obligado por la legislación de cada país a pagar los impuestos correspondientes por su trabajo, esta es la manera que lo tenemos para nivel de contratistas. 

Para nivel de *EOR* o *full time employee* es algo que estamos terminando de explorar y es una manera diferente con el tema de los impuestos; ahorita estamos prácticamente enfocados a los *workers*, aunque ya estamos haciendo unas pruebas piloto con algunas empresas para el tema de f*ull time employee*.

**Rodrigo:** Buenísimo, suena super completa esta forma de atacar este problema. Nos dijiste que tienen 100 personas en el equipo de tecnología y producto ¿Verdad? 

¿Cómo están distribuidos? ¿Cuántos *squads* son? ¿Cómo se dividen? Porque son muchos y son un montón, pero también tienen un montón de productos o de subproductos, dentro de Ontop.

**Carlos:** A nivel de estructura de trabajo, nosotros utilizamos el *framework* de Spotify, que seguramente lo han escuchado, que es este *framework* de tribus y *squads*, el cuál internamente, nosotros lo adaptamos un poquito, lo dividimos en productos o verticales de negocio, que son las que tenemos aquí, que son: 

*Financial Services*, que son todos estos productos como *wallet,* card y todos los nuevos productos que están por venir.

Todo lo que es la parte de plataforma o *payroll* se está trata forma para que ayude a las empresas a contratar de forma legal cualquier *worker* en cualquier parte del mundo. 

Y tenemos una *squad* enfocado en nuestro *back office* y herramientas internas.

Adicional a esto, nosotros utilizamos la metodología *SCRUM*. Tampoco quiero sonar como muy cliché, pero hay veces que no hay que inventar la rueda para organizar esa red de productos tecnológicos. 

Entonces realmente nos ha funcionado, tener la combinación de estos dos frameworks de *Scrum* y el *Framework* de Spotify, lo cual nos ayuda a crear esas células de trabajo que son independientes y autónomas, que si bien están ligeramente acoplados, estamos estrechamente alineados mediante *OKRs*, mismos que están definidos a nivel compañía, después los definimos a nivel de equipo o área y se pernean a todos los niveles y roles dentro del equipo de *tech* y producto.

**Artemio:** Qué emocionante, esto que mencionas de que no hay que reinventar la rueda, particularmente cuando se trata de desarrollo de *software* o de *frameworks* para organizar a los equipos, eso es algo con lo que yo empatizo muchísimo, porque de hecho nosotros aquí en Acueducto que hacemos productos digitales para empresas o corporativos que necesariamente no están en la carrera de una *startup,* pero sí necesitan de herramientas digitales y que se mantengan, además de competir con, precisamente, con el morrito que levantó un par de millones de dólares, ahí viene por su mercado. 

Algo que decimos Rodrigo y yo desde muy temprano, desde que empezamos esta empresa, es que lo mejor que podemos ofrecerle al mercado en este momento es una empresa que hace software, como en el Silicon Valley *by the book.* 

Olvida innovar en esta cancha, innovar en este espacio, asegurémonos de que estamos haciendo esto *by the book* como lo hacen los mejores y a partir de eso ya empezamos a ver qué hacemos distinto o dónde metemos nuestra cuchara, muchas veces es mejor sencillamente seguir el libro y concentrarte dónde sí la innovación puede jugar un rol fundamental en lo que estás haciendo.

**Carlos:** Hay muchas personas que se quedan en ese *analysis paralysis* de cómo debe ser la forma de trabajo en lugar de realmente ponerse a construir ese producto que va a generar valor a sus clientes, sin tomar en cuenta que ya hay muchas otras personas, muchos libros que te dicen cómo lo puedes hacer, puedes comenzar siendo ustedes, pero además debes adaptarlo a la cultura, a su forma de trabajo y a sus necesidades.

**Rodrigo:** Claro, además de esta política de producto, de lanzar los nuevos *features* o las pruebas lo más pronto posible y luego recabar feedback de los usuarios y entonces ser mucho más ágiles en iterar; eso también aplica a los modelos organizacionales dentro de la compañía, porque entre más rápido agarres el de Spotify y los pongas a correr, entonces vas aprendiendo de cómo trabaja tu equipo en lugar de hacer la otra vía, en hacer muchos análisis…

**Artemio:** Antes de tardarte de un Q en tomar una decisión.

**Carlos:** Exacto, sí. 

## ¿Cómo te aseguras que tu equipo técnico esté alineado y entienda la lógica de negocio de lo que está construyendo?

**Rodrigo:** Oye, Carlos, te queremos preguntar también ¿Cómo te aseguras de que tu equipo técnico estén alineados entre ellos? Ya nos comentaste un poco del *OKRs,* pero ¿Cómo te aseguras que entiendan la lógica del negocio de lo que están construyendo? Porque luego de eso podemos prevenir muchísimos errores o que se construyan cosas extrañas que en realidad no terminan de aplicarle bien al negocio ¿Cómo haces para asegurarte de que todos entiendan perfecto del principio a fin cómo funciona Ontop?

**Carlos:** Construir o crear un producto de *payroll* y todos los servicios financieros que estamos construyendo alrededor de este producto de pago es un tema complicado, hay muchas personas que definitivamente que son *rockstars* como *developers*, son los mejores ingenieros, pero que no tengan experiencia anterior en ese tipo o giro de negocio es complicado. Lo que sí creo es que somos un equipo que aprende rápido y creo que hemos hecho un excelente trabajo en el tema de comunicación y capacitación al momento del *onboarding* en los primeros días de Ontop; en las primeras semanas prácticamente no solo tienen capacitaciones técnicas para entender el tema de arquitectura y tecnología, además también del área de negocio les damos ciertas capacitaciones para que entiendan a profundidad, no sólo el alcance a nivel funcional, sino incluso el alcance a nivel legal de nuestro producto y de esta forma, al momento de que ellos empiecen ya a codear el producto, empiecen a lanzar el producto, sepan qué cosas sí se pueden y qué cosas no se pueden, nos ha ayudado mucho a que todos entiendan las reglas del negocio y de esa manera crecer.

Hace un año hubo, más o menos un año y tres meses, contratamos a muchísima gente y el equipo creció muchísimo y fue cuando tuvimos, yo podría decir, ese reto por poder enseñarle a todos cómo es que funcionaba Ontop; ahora ya tenemos un proceso muchísimo más consolidado y muchísimo más preparado, pero definitivamente, digo, en ninguna *startup*, en los procesos al inicio son correctos, somos una empresa que aprende muy rápido de los errores que hemos tenido, pero al final creo que lo hemos logrado bien y nos ha llevado hasta donde estamos.

**Artemio:** Este tema de que los *devs* también entiendan el problema de negocio que tienen enfrente de ellos lo platicábamos en otro capítulo de que es muy fácil que suceda eso, que tengas un porcentaje del equipo de desarrolladores que realmente no esté entendiendo del todo el reto de negocio que está resolviendo, pero entiende muy bien el reto técnico que tienen frente a ellos, sin embargo, la cosa avanza y puede avanzar por años sin que tengas gente que realmente entiende completamente cuáles son los problemas que están resolviendo a nivel macro, cuando les empiezas a hacer un *quiz* de la lógica de negocio, de qué pasa si tal y tal, pero no se puede tal por tal, muchos pueden perderse y puede pasar desapercibido, nunca es esta como enteramente la prioridad y tampoco nunca es enteramente la raíz de un problema fundamental, pero sí puede ser la raíz de muchos otros problemas.

**Rodrigo:** Sobre todo da miedo, cuando te encuentras con un *dev* o con cualquier persona del equipo, bien podría ser alguien de producto o el diseñador o el de experiencia que te das cuenta de que no conocen o que tienen una concepción errónea de cómo funciona la lógica de negocio. Causa una sensación como de mucha preocupación, así como si no puedes, “Si ahorita no sabes qué habrás resuelto con esta concepción que tenías ¿Qué hiciste entonces?”

**Carlos:** Es un reto en cualquier empresa poder lograr que no solo los devs, sino cualquier trabajador, esté consciente y sepa de todo su negocio.

## ¿Cómo se ve el *RoadMap* de OnTop?

**Artemio:** Oye Carlos, le dimos un par de vueltas a esta pregunta, pero vale la pena hacerla puntualmente ¿Cómo se ve su *roadmap*? Y también ¿Qué tan tirado al futuro tienen este *roadmap*?

**Carlos:** Nosotros también creamos un *roadmap* por Q, aunque definitivamente tenemos metas anuales y esas están definidas siempre en nuestros OKRs; nosotros el roadmap lo creamos por Q porque una de nuestras virtudes es *be like water, t*enemos que ser como el agua y esto nos dice al menos una virtud que tenemos aquí en Ontop es siempre acoplarnos a cualquier situación que tiene, entonces haciendo honor a esa virtud siempre nuestro *roadmaps* los vamos adaptando a las necesidades que vaya teniendo nuestro negocio y definitivamente de nuestros clientes. 

Ya enfocándome un poco más puntual y para poder contestar tu pregunta de cómo se ve el *roadmap* de Ontop, definitivamente es robustecer y consolidar este producto de *payroll* que tenemos para poder ofrecer diferentes soluciones a los clientes que vamos a tener; además de aumentar los servicios financieros que están conectados a nuestra plataforma.

Ahora lo que queremos hacer es que la experiencia que tienen dentro de nuestra plataforma de nómina sea mucho más sencilla y además lo puedan conectar a sus diferentes plataformas como contabilidad o H.R. incluso para poder saber vacaciones, bonos y todo este tema, es mucho de lo que nos estamos enfocando ahora.

**Artemio**: La delgada línea entre aportar un *feature* más o ya meterte a otra cancha que no tiene nada que ver con lo que estás haciendo, es como un balance en el que seguro están jugando, en no meterse de *full* a un tema de H.R. pero mantenerlo en el *payroll*, pero igual hacer ahí una integración.

**Carlos:** Tenemos clientes que ya tienen su herramienta de H.R. y lo único que quieren es pagar la nómina a través de Ontop, entonces crear esas conexiones Ontop y su herramienta de H.R. es justamente lo que estamos trabajando para poder complementar a las necesidades de nuestros clientes. En nuestro negocio no nos convierte en una herramienta de H.R., porque ya es un mundo totalmente diferente y no es una necesidad que tengamos para atacar, hay otras soluciones que tienen eso y probablemente cumplen las necesidades otros clientes.

**Artemio**: 100%.

Estamos llegando a la mitad de este capítulo.

Le recordamos a toda la gente que está escuchando que en [cuandoelriosuena.com](https://acueducto.studio/podcast), ustedes pueden suscribirse a la Newsletter de este programa y recibir una notificación cada que tengamos un capítulo nuevo. 

De igual forma seguimos hypeando nuestra conferencia anual Latam Startup, se vienen cosas grandes, medianas, pequeñas, de todos los tamaños, de todos los colores, para todo tipo de gente. Genuinamente estamos muy emocionados por lo que estamos preparando este año. 

La única noticia que les adelantamos es que se mantiene gratuito el espacio para que todos podamos beneficiarnos de todo el *knowledge* de los que serán los ponentes de este año que también tenemos a gente muy chida en la mira; temas muy relevantes para todas las personas que están construyendo algo. Así que vayan a suscribirse a la Newsletter, estén al pendiente.

**Rodrigo:** Para los que no conocen la conferencia y se quieren echar las pláticas del año pasado están también gratis arriba en [latamstartup.club](https://www.latamstartup.club/) para que les vayan a echar un ojo.

**Artemio**: Ahí lo tienen, regresamos. 

**Rodrigo:** Bienvenidos de vuelta a Cuando el Río Suena con nuestro invitado de esta edición, Carlos Cruz, *CTO* de Ontop.

## De cero a uno ¿Cómo integran un nuevo feature en Ontop?, ¿Qué consideras que hacen distinto ó cuál es su mejor práctica?

********************Rodrigo:******************** Para retomar lo que estábamos platicando, nos llamaba la atención cómo integran un nuevo *feature* en Ontop de cero a uno qué es lo que sucede, cuáles son los pasos, cuanta gente esta involucrada y sobre todo qué consideras que hacen distinto ó cuál es su mejor práctica para lograr le nivel que mantienen la calidad, cuéntanos un poco.

**Carlos:** Es una pregunta bastante importante y que nos pasaba al inicio probablemente, todo *feedback* lo tomábamos en cuenta y lo queríamos integrar al producto y al producto, cuando veíamos teníamos una lista, un *backlog* impresionante, no podíamos meter todo ese *feedback*, probablemente había *feedback* de un cliente muy puntual que no iba a ayudar al 99% de nosotros clientes. Cuidamos mucho el proceso de desarrollo de producto, siempre integramos nuevos *features* basados en datos y definitivamente sí en el *feedback* con nuestros clientes internos y externos.

Cuando tenemos un nuevo requerimiento, lo que siempre hacemos, es prácticamente como regla, es evaluamos si está alineado con las metas de Ontop, hay muchas veces que puede llegar a un cliente y decirnos “Oye, me encanta este *feature”* pero al final si somos un negocio tenemos que seguir las metas que tenemos para poder aportar valor a todos nuestros demás clientes, tenemos que ver que realmente estemos alineados con estas metas. 

¿Qué impacto positivo o negativo tendrá para el producto? porque no siempre todos los *features* son buenos, hay *features*  que llegan a ser malos y si lo integras, afectan probablemente a todo el producto, afectan probablemente de forma legal, afectan probablemente a un país, tenemos que ser muy cuidadosos, tenemos que ver qué impacto va a tener, tanto positivo como negativo, y definitivamente en tiempo y recursos qué nos va a llevar a hacer este *feature*. Basado en esto, priorizamos el *feature*, lo asignamos a un *roadmap,* que como les comentaba, lo hacemos de cada Q y lo empezamos a desarrollar en estos *sprints*, que al final, como dice SCRUM, son estos ciclos de trabajo, en nuestro caso lo hacemos de 2 semanas, todo esto lo hacemos en un proceso de refinamiento, *pre-planning, planning* y al final de estas sesiones de desarrollo o del proceso de desarrollo de producto, tenemos una demo para los *stakeholders* y para la compañía en general. 

**Rodrigo:** ¿Cuál es la parte que más te gusta de ese proceso que hacen de forma diferente?

**Carlos:** No es que haya sido como todo un éxito mío, yo creo que al final es un éxito de todo el equipo porque al final cada quien aporta su punto de vista y hemos logrado encontrar ese balance, pero no podemos hacerle caso a todos los *features* y a todas las voces que nos hablan de decir “Tienes que lanzar este *feature* nuevo”, tenemos que tomar decisiones basadas en datos, nosotros tenemos varios sistemas de métricas internas donde nos dicen si un *feature* lo está usando mucho un usuario, si un usuario se está atorando en cierta etapa del proceso, qué impacto está teniendo que se atore; probablemente es un *funnel* o si es algún flujo en específico y también si vale la pena o no mejorarlo. Siempre tomar en cuenta lo que te dicen los datos, la data no miente si la mides bien, es importante siempre fijarse en lo que te está diciendo la *app*.

**Artemio:** Oye Carlos, y pasando un poquito más a un tema operativo y de comunicación entre equipos. Algo que también hemos notado en particularmente el área de desarrollo es que puedes llegar a tener este perfil de desarrollador, que no es muy comunicativo, prefiere que le den su *task* y ponerse la capucha, y de que mejor mis *dailys* te los mando en una línea en Slack, me conecto a la videollamada pero no prendo la cámara y puede existir este perfil que es como mucho más retraído; y en aras de una comunicación efectiva o ejecutiva en o en materia de reporteo, siempre está en la misma sintonía y todo el mundo sabe muy bien qué es lo que está sucediendo, este tipo de perfiles pueden llegar a, no quiero decir estorbar, porque luego es gente que trabaja muy bien y son capaces a nivel técnico, pero sencillamente no se comunican tanto como tal vez a uno como manager le gustaría.

## ¿Cómo incentivan la comunicación entre su equipo de desarrollo? ¿Cómo se aseguran de que nadie se atore?

******************Artemio:****************** Entonces te queríamos preguntar, ¿cómo ustedes incentivan esta comunicación entre un equipo de desarrollo? ya particularmente siendo más específicos todavía ¿Cómo incentivan la comunicación entre su equipo de desarrollo? ¿Cómo se aseguran de que nadie se atore?
**Carlos:** Para nosotros el tema de comunicación ha sido crucial y más porque somos un equipo global; simplemente en el equipo de *tech* estamos distribuidos en más de 16 países, si mal no recuerdo y además en diferentes zonas horarias. Tenemos gente en la India, en Pakistán, que son Ontopers trabajando en el equipo de *tech*. Tenemos gente trabajando en Italia, trabajando en España y en la mayor parte de Latinoamérica, definitivamente la comunicación es un tema crucial e importante para el equipo, pero ahorita que estamos hablando específicamente del equipo de *tech* y producto, que sí definitivamente, mucho del ADN de los *developers*, ingenieros de *software*, muchas veces son retraídos, tímidos y para nosotros es una parte importante en el proceso de reclutamiento y entrevistas, no solo nos fijamos en que técnicamente sean buenos sino también en que sean pensadores críticos, que siempre levanten la mano y opinen, eso lo aplaudimos muchísimo, también que sean personas que no solo les digamos “Tenemos que llegar del punto A al punto B”, sino que también cuestionen “Oye, porque tenemos que llegar del punto A al punto B”, eso también lo aplaudimos mucho.

Retomando el tema de nuestras virtudes, somos personas muy disciplinadas, honramos el tiempo de los demás en las reuniones y hacemos siempre muy visible los problemas y los logros. Hay veces que llegamos a tener algún problema y como bien decías, si es el *rockstar* o la persona que era el mejor *developer,* pero no levanta la mano y no dice nada, eso es algo que no compartimos en Ontop. Una de nuestras virtudes siempre ha sido “Oye, si tenemos un problema, levantamos la mano.” Internamente, tenemos esa cultura de siempre decir las cosas, a nivel de liderazgo nos gusta ser *radical candors,* el *feedback* es importante y aplaudimos cuando alguien levanta la mano para pedir apoyo. 

Del lado técnico y de organización tenemos las figuras de *Product Managers* que nos ayudan al equipo a la definición y desarrollo de *user stories* para nuevos *features, e*sto del lado de producto. Al lado de los *squads* e interno del lado de tech, los *scrums* *masters* que nos ayudan a organizar las sesiones de *scrum* y ayudan a definir el performance del equipo *sprint* por *sprint*. Los *Technical Leads* que nos ayudan a apoyar a nivel técnico un *squad* en específico y tenemos esta figura que se llama C*hapter Lead*, que son líderes de capítulo que ayudan transversalmente a los equipos en alguna tecnología específica, ya sea *swift,* *codeling*, *Java*, Angular, que si se llega a atorar a alguien, sepan a quién recurrir e incluso esos C*hapter Leads* nos ayudan internamente a dar capacitaciones. 

Por ejemplo, ahorita estamos en un proyecto de *micro front-ends* y estos C*hapter Leads* ayudan a capacitar a la gente, a dar todo este entrenamiento a nuestros *developers* eso lo hace de manera transversal, no importa que pertenezca al *Squad* de *Financial Services* o **al *squad* de *Payroll*, transversalmente se ayudan porque comparten la misma tecnología. Mucho de esto, como les platicaba, viene del f*ramework* de Spotify, tener estas estos líderes de capítulo que ayudan a cierta tecnología.

En cuanto a la comunicación al momento de las entrevistas, para poder tener el mismo ADN todos y ser personas críticas, es algo que de hecho lo aprendí y lo hace *BaseCamp*, que por ejemplo, son de las primeras empresas que estaban 100% remotos. 

Una de las partes de entrevista es la de comunicación verbal y escrita, porque hay veces que tenemos comunicación asíncrona mediante Slack; ya sea para *dailys* y el no poder comunicar una idea de uno de una manera correcta puede afectar el desarrollo de un *feature* e incluso haber algún malentendido. Si a esto le sumamos el factor que el idioma principal dentro de Ontop es inglés, hay veces que puede también la barrera del idioma, puede llegar a complicar el tema, por ello si nos fijamos no solo en el tema técnico, sino que se puedan comunicar bien en inglés tanto verbal como escrito.

**Artemio:** Que fundamental es poder comunicarte de manera escrita cuando tu empresa es remota, es algo que puedes pasar por alto en un inicio, hasta que tienes a alguien que te contesta “Sí, por eso lo que dije” Piensas: “a la madre okay, necesitamos una política de comunicación en la empresa.”

**Carlos:** Incluso algo que nos llegaba a pasar, cuando el famoso “Hola ¿Cómo estás?” y le quieres apretar el botón de *Skip Intro* porque ahí, hasta que tú no les contestas, no te dice. Por ejemplo, como estamos en diferentes husos horarios, hay veces que si una persona de QA está trabajando en la madrugada probando un *feature* y nada más le pone “Hola, ¿Cómo estás?” Y hasta el día siguiente le dice el problema, es importante para nosotros crear esa cultura de sí ser cordiales y saludar a la persona pero al mismo tiempo ir al punto.

## ¿Cómo hacen QA en OnTop?, ¿qué automatizan y qué hacen de forma manual?

**Rodrigo:** Oye Carlos y justo ahorita que mencionaste QA. ¿Cómo hacen en QA en Ontop?, porque hemos escuchando un un montos de diferentes *flavors* alrededor del QA, hay gente que se va full a las automatizaciones y ya no quiere tener gente de QA haciendo pruebas manuales, hay productos que requieren pruebas manuales, las nuevas funcionalidades por ejemplo cierta manualidad siempre van a requerir, es muy difícil hacer pruebas automatizadas para flujos que no existían antes ¿Cómo hacen QA en OnTop?, ¿qué automatizan y qué hacen de forma manual?

**Carlos:** En el tema de automatizaciones y QA siempre hay muchos dilemas, si quieres implementar una metodología como *test driven development,* el famoso *TDD*, pruebas automatizadas, pruebas manuales. Entonces es, ¿Qué tipo de pruebas van a implementar en qué *stage* del desarrollo de producto? Aquí es más que nada cómo se acomoda el equipo y la cultura que tenga cada uno. Yo te voy a platicar un poco la historia, yo creo que al inicio por el ritmo que teníamos la automatización definitivamente era complicado; nosotros iniciamos asignando a cada *squad* uno o dos *QA engineers* que nos ayudaban a hacer la certificación de calidad de cada *feature* de forma unitaria. Al integrar el código hacíamos pruebas de regresión, esto para asegurar que ningún *feature* se veía afectado de manera negativa en el funcionamiento esperado de la plataforma, pero ahora que ya somos un equipo un poco más consolidado, un equipo más robusto, un equipo más maduro que también es importante la madurez del equipo y cuánto tiempo tienen trabajando juntos, seguimos un proceso similar y tenemos una gran cobertura del producto mediante pruebas automatizadas en los diferentes *stages* del proceso de desarrollo. Hay pruebas que tenemos automatizadas para en un ambiente de pruebas y hay otras que tenemos automatizadas, que son un poquito más robustas para el momento de la integración, al momento de salir de producción.

**Rodrigo:** Ha ido evolucionando con el tiempo y cada vez se van tirando más hacia lo automatizado ¿verdad? Es esto de tenerlo por diferentes ambientes, también, ataca a otro problema muy importante, que es que no hay forma de tener en desarrollo las mismas variables que en producción, no hay forma de tener una copia de la base de datos, no hay forma de tener el mismo tipo de comportamiento, entonces, de alguna forma esto hay que atacarlo con pruebas particulares para cada ambiente.

**Carlos:** Las condiciones no siempre son las mismas y hay veces que se llegan a complicar las pruebas. Incluso voy a platicar algo en el tema visual, en donde nosotros que queremos hacer un producto, que sea bastante bonito y sea amigable para nuestros clientes, hay veces que hacerlo de forma automatizada, que definitivamente se puede, pero es una curva de aprendizaje mucho más grande, mucho más larga y siempre si las personas de QA incluso nos ayudan también en que la parte visual que se vea bien y similar a lo que el equipo de UX, UI había definido, entonces es donde en la parte de toma de automatización, es donde todavía nos ayuda una persona.

**Artemio:** Mi comentario es veloz, notamos que tenían una *landing page* particularmente linda en comparación de las muchas *startups* que analizamos antes de venir aquí al programa. 

**Rodrigo:** Se nota que hay un equipo cuidando este tipo de detalles, que está muy bien entrenado y que tiene muy claro que el objetivo es cómo se tienen que ver las cosas. 

## Cuéntanos 3 mejores prácticas para mantener software

**Artemio:** Regresando a las *foundations,* a lo básico, cuéntanos 3 mejores prácticas para mantener software.

**Carlos:** Es una pregunta difícil porque, buenas prácticas siempre hay muchas, y pueden ayudar diferentes buenas prácticas, igual en diferentes etapas de la empresa. Te puedo contar un poco de las que más nos han ayudado a robustecer y a madurar el equipo, incluso para poder escalar el equipo hacia dónde lo queremos llevar; porque como cuando les contaba si éramos 15-20 *developers* al inicio y ahora que somos cerca de 100 entre tech y producto. La parte fundamental era el tema de documentación, tener esa buena documentación, la verdad todos la odiamos porque al inicio es tediosa, nadie lo quiere hacer, pero al menos creo que si tenemos esa disciplina de realizarla desde el inicio, de mantenerla, que también es importante, pero además utilizarla es bastante importante. Todo es cuestión de dar el primer paso y ser disciplinados en la parte de documentación, esto ayuda a que en el momento en que hay un *onboarding* técnico nuevo, una persona pueda irse a la documentación y pueda revisar de manera asíncrona y no dependa de una persona para poder despejar alguna duda ya sea técnica o de negocio, entonces definitivamente el tema de documentación ayuda a escalar a los equipos sin que alguien esté ahí pendiente.

Por otro lado, el tema de retrospectivas y *post mortem*, es saber en que salió algo bien, en qué salió algo mal y qué podemos mejorar, porque cuando pasa alguna situación mala, con algún *deploy* o algún *bug* en la plataforma, siempre es importante realizar el proceso de investigación para saber qué sucedió, cómo evitarlo y aparte que nos quede ese registro y esa bitácora para futuras ocasiones.

Finalmente, el tener un proceso de integración de código y *branching*, es decir de cómo trabajan con las ramas o las *branches* dentro de git, ya sea que son *Gitlab, Github,* de cualquiera, no importa, es agnóstico, pero tener un modelo de *branching* como G*itflow* que te ayude al momento de integrar las ramas de cada *developer,* porque hay veces que si tú no sigues este *branching* *model* hay veces que los developers se planchan los cambios, se sobrescriben los cambios porque no siguen esas mejores prácticas; seguro les ha pasado en alguno de esos proyectos que alguien no sigue, está mejor práctica y después dice “Oye, ¿dónde están mis cambios? Ya los había hecho” pero yo creo que seguir este *branching model* como G*itflow* que es uno de los más famosos, ayuda mucho a sobrescribir cambios, a sacar fi*xes,* ha sacar incluso *branch* por versiones, *branch for features*, que son las *feature branches*. Esto ayuda mucho y es importante para cuando el equipo es muy distribuido, yo podría decir que esas son como de las tres diferentes mejores prácticas para mantener *software*.

**Rodrigo:** Claro, buenísimo, son 3 muy buenos consejos. Ahora sí, que también pasa de “Ah se fueron mis cambios a producción, pero todavía no estaban listos”, sí bueno, pues alguien más se los comió.

Hemos tenido unos encuentros con D*omain-Driven Design (DDD)*, donde el código se vuelve mucho más legible, es decir, desde la arquitectura, se vuelve mucho más legible el código para los desarrolladores. ¿Ustedes hacen algo ahí en dimensión de la estructura interna código o del los naming de las cosas para conservar un orden? Porque son desarrolladores de todo el mundo. Además, han de traer costumbres de todos lados.

**Carlos:** Eso lo hacemos tanto en el *Backend* como en el *Frontend* para poder mantener esas mejores prácticas; definitivamente al inicio y cuando empezó a crecer el equipo, pues no teníamos estos estándares normales de cualquier *startup; pero* obviamente hay un momento que el equipo si no lo hace en algún momento, el producto no estaría donde está ahora, llega un momento en el que tienes que parar el balón y decir “Vamos a reunirnos, vamos a establecer qué estándares son los adecuados para nombrar variables, para nombrar constantes”

Nosotros utilizamos, por ejemplo, para la parte del *frontend*, utilizamos *typescript*, que al final es como *javascript*, pero bien hecho porque te ayuda a *typear* las variables y a ser ordenado en el momento de que creas tu código, e incluso lo mismo cómo vamos a nombrar nuestras *branches* en el repositorio, entonces todas esas son como de las mejores prácticas que solo puedes empezar a hacer si ya vas madurando tu equipo, para esto nos ha ayudado mucho en el equipo de arquitectos que tenemos con estas mejores prácticas y nos ayudan a educar y a predicar estas mejores prácticas. Aparte, una de las tareas de cada uno de los de los T*echnical Leads,* es hacer esos *code reviews* al momento de que se va a integrar algo, significando esto que es la revisión del código para ver que se sigan las mejores prácticas. 

Al inicio lo hacíamos de una manera muy visual, ahora ya tenemos varios *pipelines* que nos ayudan para saber, incluso hasta la indentación, ver si está bien hecho o no, que eso también es importante; esto nos ayuda mucho a hacerlo de manera automática.

Sabemos que todavía no tenemos un camino por recorrer porque al final siempre hay cosas que mejorar, en el momento en que digamos “Ya estamos bien”, creo que no estamos tan bien, siempre va a haber cosas nuevas que aportar y nuevas tecnologías que nos van a ayudar a hacer más eficientes.

**Rodrigo:** Está buenísimo, Carlos, pues muchas gracias por esta radiografía, un poco de lo que siguen haciendo en Ontop para no acabar con un desastre y sobre todo, para poder tener equipos grandes, porque no es lo mismo entrevistar a *startups* que tienen equipos más pequeños donde justo como mencionas, pueden ser mucho más laxos, en estándares, en ciertos procesos, en donde algunas cosas no son necesarias todavía, a cuando ya tienes un equipo de ese tamaño que sin buenas prácticas, todo mundo va a estar en el horno. 

## Ante los retos que se enfrenta Ontop y tú como CTO en los próximos años, ¿Qué te quita el sueño?

**Rodrigo:** Nos acercamos a al final de esta entrevista. La última pregunta es una que hacemos a todos nuestros invitados, desde el principio del podcast y siempre nos da una muy buena radiografía, una vez más de por qué está pasando esta *Startup* particular, nos habla de la industria, de la época. Esta es: ante los retos que se enfrenta Ontop y tú como CTO en los próximos años, ¿qué te quita el sueño?

**Carlos:** Seguir generando valor a nuestros clientes a través de tecnología. Nosotros nos queremos convertir en una *tech company,* muchas veces en una *startup* al iniciar dicen que es una *tech compan*y, cuando realmente lo único que hacen es integrar herramientas de terceros y simplemente son como un *form* muy bonito integrado con diferentes cosas. Nosotros tenemos que empezar, y es lo que estamos haciendo, a crear nuestras propias herramientas y ser una *tech company, q*ue, como lo han hecho diferentes empresas que son grandes.

¿Entonces, qué me quita el sueño?  Definitivamente lograr convertirnos en esta *tech company*.

Hablando un poco más de negocio, el mundo está pasando por una crisis económica global, que no solo afecta a las *startups* o pequeñas empresas, hemos visto grandes como Amazon, Facebook, que han hecho esos *layoffs* masivos, lo veo y te puedo decir que Ontop y con alas e iniciativas de los *founders* y del top management, creo que pudimos prever ese *economic downturn* que está por venir y nosotros tomamos medidas desde el año pasado que eran las acciones y las metas que teníamos que lograr para evitar una crisis, evitar hacer esos *massive layoffs.* 

Afortunadamente creo que estamos cerca de nuestro *break even* y seguimos creciendo mes sobre mes, eso habla mucho del equipo que tenemos. Hay retos como en cualquier empresa, pero creo que vamos por buen camino, tenemos buen equipo.

En el aspecto de CTO, la meta siempre va a ser seguir preparándome para aportar al equipo, mentorías, prepararlos para los retos que vienen, no solo técnicamente, ahora me ha tocado preparar a personas ya de un lado más de *management*, porque hay personas que han crecido que eran *developers* a inicio del equipo, han pasado por un *career path* hacia *Technical Lead* o hacia *Chapter Lead,* ahora algunos incluso han tomado algún rol de manager, en donde ya lideran incluso varios *Technical Leads*. Por ello esas mentorías siempre voy a intentar podérselas  proporcionar a todas las personas de mi equipo y creo que siempre contagiar al equipo con entusiasmo y la pasión que al menos yo tengo por Ontop. 

**Artemio**: Ahí lo tienen, Carlos Cruz CTO de Ontop. 

Muchas gracias por venir a este espacio, a compartirnos un poquito de tu experiencia y de las mejores prácticas que están siguiendo ahí en su compañía. 

De igual forma, quiero recordarle a toda la gente que nos está escuchando que en [cuandoelriosuena.com](http://cuandoelriosuena.com/), ustedes pueden suscribirse a la Newsletter de este programa; y también Rodrigo y yo queremos pedirles con el corazón en mano que si conocen a una persona que está en la etapa de ideación de una empresa de tecnología, si tal vez ya está dando sus primeros pasos, si ya pasó por un programa de aceleración, si está en su serie A, serie B, lo que sea. Este programa está hecho para todas esas personas que están construyendo algo donde antes no había nada y pretendemos ayudarles desde la etapa de pre-semilla hasta una eventual adquisición o salida a la bolsa, así que ayúdenos a llegar a la gente que estamos buscando y a quién queremos que escuche este espacio; si hacen nos ayudarían muchísimo, muchísimo, muchísimo. 

Nos vemos a la próxima, muchas gracias Ro, muchas gracias Carlos, Belmont, todo el equipo de producción nos vemos a la próxima.