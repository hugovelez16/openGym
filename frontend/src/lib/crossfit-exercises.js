export const CROSSFIT_EX = [
  // ==================== CROSSFIT MOVEMENTS ====================
  {
    id: 'cf_kb_tater',
    n: 'kettlebell tater (swing + squat)',
    bp: 'upper legs',
    eq: 'kettlebell',
    tg: 'quads',
    mg: 'glutes',
    sm: ['glutes', 'hamstrings', 'shoulders', 'core'],
    st: [
      'Inicia con un kettlebell swing con dos manos impulsando con la cadera hasta la altura del pecho.',
      'En el punto más alto del swing, gira o sujeta la pesa rusa por el cuerpo o los cuernos en posición goblet frente al pecho.',
      'Desciende de inmediato a una sentadilla profunda manteniendo el torso erguido y los codos por dentro de las rodillas.',
      'Ponte de pie con fuerza y aprovecha la bajada para soltar la pesa hacia el siguiente swing de forma continua y fluida.'
    ],
    desc: 'Combinación de Kettlebell Swing y Goblet Squat en cada repetición.'
  },
  {
    id: 'cf_kb_push_press',
    n: 'kettlebell push press',
    bp: 'shoulders',
    eq: 'kettlebell',
    tg: 'delts',
    mg: 'triceps',
    sm: ['quads', 'core', 'upper back'],
    st: [
      'Lleva las kettlebells (o una kettlebell) a la posición de rack sobre los hombros.',
      'Realiza una flexión corta de rodillas y caderas (dip) manteniendo el torso completamente vertical.',
      'Extiende explosivamente caderas y piernas (drive) para transferir la fuerza hacia arriba.',
      'Empuja la kettlebell por encima de la cabeza hasta el bloqueo completo del brazo.'
    ],
    desc: 'Empuje de hombro con impulso de piernas utilizando kettlebell.'
  },
  {
    id: 'cf_thruster',
    n: 'thruster (barbell)',
    bp: 'upper legs',
    eq: 'barbell',
    tg: 'quads',
    mg: 'delts',
    sm: ['glutes', 'triceps', 'core'],
    st: [
      'Sostén la barra en posición de front rack sobre los hombros.',
      'Baja en una sentadilla frontal completa rompiendo el paralelo.',
      'Sube con potencia extendiendo piernas y cadera.',
      'Aprovecha la inercia para empujar la barra por encima de la cabeza en un solo movimiento fluido.'
    ],
    desc: 'Front squat profundo combinado con push press overhead continuo.'
  },
  {
    id: 'cf_db_thruster',
    n: 'dumbbell thruster',
    bp: 'upper legs',
    eq: 'dumbbell',
    tg: 'quads',
    mg: 'delts',
    sm: ['glutes', 'triceps', 'core'],
    st: [
      'Sostén las mancuernas apoyadas sobre los hombros.',
      'Desciende a una sentadilla completa con los talones apoyados.',
      'Sube explosivamente y empuja las mancuernas por encima de la cabeza hasta bloquear los codos.'
    ],
    desc: 'Thrusters con mancuernas.'
  },
  {
    id: 'cf_devil_press',
    n: 'devil press',
    bp: 'full body',
    eq: 'dumbbell',
    tg: 'delts',
    mg: 'hamstrings',
    sm: ['chest', 'glutes', 'back', 'core'],
    st: [
      'Coloca dos mancuernas en el suelo y realiza un burpee apoyando el pecho entre o sobre ellas.',
      'Salta hacia adelante abriendo las piernas a los lados de las mancuernas.',
      'Balancea las mancuernas entre las piernas y, con un golpe de cadera, elévalas directamente sobre la cabeza en un movimiento tipo snatch/swing.'
    ],
    desc: 'Burpee sobre mancuernas enlazado con swing/snatch overhead con dos mancuernas.'
  },
  {
    id: 'cf_db_snatch',
    n: 'dumbbell snatch (alternating)',
    bp: 'back',
    eq: 'dumbbell',
    tg: 'delts',
    mg: 'glutes',
    sm: ['hamstrings', 'traps', 'core'],
    st: [
      'Coloca la mancuerna en el suelo entre los pies.',
      'Con la espalda recta y el pecho arriba, tira explosivamente extendiendo cadera y rodillas.',
      'Mantén la mancuerna pegada al cuerpo y bloquéala sobre la cabeza en un solo tiempo.',
      'Cambia de mano por debajo de la cara o en el suelo y repite con el otro brazo.'
    ],
    desc: 'Arrancada con mancuerna desde el suelo hasta arriba de la cabeza alternando brazos.'
  },
  {
    id: 'cf_toes_to_bar',
    n: 'toes-to-bar (t2b)',
    bp: 'waist',
    eq: 'body weight',
    tg: 'abs',
    mg: 'hip flexors',
    sm: ['lats', 'forearms'],
    st: [
      'Cuélgate de la barra de dominadas con agarre prono.',
      'Genera un balanceo kip (kipping) alternando posición hollow y arch.',
      'Con un golpe potente de cadera y activación de dorsales, lleva los pies a tocar la barra entre las manos.'
    ],
    desc: 'Pies a la barra con balanceo gimnástico o estricto.'
  },
  {
    id: 'cf_box_jump',
    n: 'box jump / box jump over',
    bp: 'upper legs',
    eq: 'body weight',
    tg: 'quads',
    mg: 'glutes',
    sm: ['calves', 'hamstrings'],
    st: [
      'Colócate frente al cajón pliométrico.',
      'Flexiona rodillas y caderas y salta explosivamente con los dos pies.',
      'Aterriza suavemente sobre el cajón y extiende completamente la cadera arriba (o pasa al otro lado si es jump over).'
    ],
    desc: 'Salto al cajón pliométrico con extensión completa.'
  },
  {
    id: 'cf_kb_american_swing',
    n: 'kettlebell american swing',
    bp: 'upper legs',
    eq: 'kettlebell',
    tg: 'glutes',
    mg: 'hamstrings',
    sm: ['delts', 'traps', 'core'],
    st: [
      'Inicia con la kettlebell entre las piernas flexionando ligeramente caderas.',
      'Extiende con fuerza la cadera y glúteos para proyectar la pesa hacia arriba.',
      'Guía la trayectoria hasta que la kettlebell quede completamente vertical sobre la cabeza con los brazos extendidos.'
    ],
    desc: 'Kettlebell swing completo finalizando por encima de la cabeza.'
  },
  {
    id: 'cf_bar_muscle_up',
    n: 'bar muscle-up',
    bp: 'back',
    eq: 'body weight',
    tg: 'lats',
    mg: 'triceps',
    sm: ['chest', 'shoulders', 'core'],
    st: [
      'Cuélgate de la barra y genera un kipping amplio.',
      'Tira con fuerza hacia la cadera manteniendo los brazos casi rectos.',
      'En el punto más alto, pasa el pecho sobre la barra (transición) y empuja para bloquear los brazos arriba en soporte.'
    ],
    desc: 'Dominada combinada con fondo sobre la barra en un solo movimiento.'
  },
  {
    id: 'cf_double_unders',
    n: 'double unders (du / saltos dobles)',
    bp: 'lower legs',
    eq: 'rope',
    tg: 'calves',
    mg: 'forearms',
    sm: ['quads', 'shoulders', 'core'],
    st: [
      'Mantén los codos pegados al torso y el giro saliendo de las muñecas.',
      'Salta verticalmente manteniendo las piernas rectas y juntas.',
      'Pasa la comba dos veces por debajo de los pies en cada salto individual.'
    ],
    desc: 'Saltos dobles de comba continuos.'
  },
  {
    id: 'cf_hspu',
    n: 'handstand push-up (hspu)',
    bp: 'shoulders',
    eq: 'body weight',
    tg: 'delts',
    mg: 'triceps',
    sm: ['upper back', 'core'],
    st: [
      'Haz el pino contra la pared apoyando las manos a la anchura de los hombros.',
      'Baja la cabeza formando un trípode con las manos hasta tocar el abmat o suelo.',
      'Empuja con fuerza (estricto o con kipping de cadera/piernas) hasta extender completamente los brazos.'
    ],
    desc: 'Flexiones de pino en pared (estrictas o con kipping).'
  },

  // ==================== HYROX OFFICIAL STATIONS & WORKOUTS ====================
  {
    id: 'hyrox_skierg',
    n: 'skierg (hyrox station 1)',
    bp: 'cardio',
    eq: 'cardio machine',
    tg: 'cardiovascular system',
    mg: 'lats',
    sm: ['core', 'triceps', 'quads', 'glutes'],
    st: [
      'Colócate frente al SkiErg con los pies a la anchura de caderas.',
      'Agarra las manijas con los brazos extendidos arriba.',
      'Tracciona con fuerza hacia abajo flexionando caderas y rodillas y usando el peso corporal.',
      'Extiende los brazos hacia atrás al final del tirón y regresa fluido a la posición inicial.'
    ],
    desc: '1000m SkiErg — Estación 1 oficial de Hyrox. Ritmo continuo y tracción con core/dorsales.'
  },
  {
    id: 'hyrox_sled_push',
    n: 'sled push (hyrox station 2)',
    bp: 'upper legs',
    eq: 'sled',
    tg: 'quads',
    mg: 'glutes',
    sm: ['calves', 'hamstrings', 'shoulders', 'core'],
    st: [
      'Agarra los postes verticales del trineo con los brazos rectos o doblados apoyados en hombros.',
      'Inclina el torso en un ángulo de ~45 grados manteniendo la espalda recta.',
      'Empuja con pasos firmes clavando la puntera de los pies y extendiendo rodillas y glúteos de forma constante.'
    ],
    desc: '50m Sled Push — Estación 2 oficial de Hyrox (Open: 102kg mujeres / 152kg hombres; Pro: 152kg mujeres / 202kg hombres).'
  },
  {
    id: 'hyrox_sled_pull',
    n: 'sled pull (hyrox station 3)',
    bp: 'back',
    eq: 'sled',
    tg: 'lats',
    mg: 'biceps',
    sm: ['upper back', 'glutes', 'hamstrings', 'forearms', 'core'],
    st: [
      'Párate detrás de la línea de la caja de tracción.',
      'Agarra la cuerda con ambas manos manteniendo una postura estable con rodillas flexionadas y pecho arriba.',
      'Tira de la cuerda mano sobre mano (hand-over-hand) o dando pasos hacia atrás dentro del cajón permitido hasta que el trineo cruce la línea.'
    ],
    desc: '50m Sled Pull con cuerda — Estación 3 oficial de Hyrox (Open: 78kg mujeres / 103kg hombres; Pro: 103kg mujeres / 153kg hombres).'
  },
  {
    id: 'hyrox_burpee_broad_jump',
    n: 'burpee broad jump (hyrox station 4)',
    bp: 'full body',
    eq: 'body weight',
    tg: 'quads',
    mg: 'cardiovascular system',
    sm: ['chest', 'glutes', 'calves', 'core'],
    st: [
      'Desde de pie, desciende al suelo apoyando el pecho y los muslos completamente.',
      'Levántate saltando con los pies hacia las manos.',
      'Desde la posición de sentadilla, balancea los brazos y salta hacia adelante lo más lejos posible de forma controlada.',
      'Aterriza con los dos pies y desciende de inmediato al siguiente burpee.'
    ],
    desc: '80m Burpee Broad Jump — Estación 4 oficial de Hyrox. Ritmo constante sin paradas largas.'
  },
  {
    id: 'hyrox_rower',
    n: 'rowing / rower (hyrox station 5)',
    bp: 'cardio',
    eq: 'cardio machine',
    tg: 'cardiovascular system',
    mg: 'lats',
    sm: ['quads', 'hamstrings', 'glutes', 'biceps', 'upper back'],
    st: [
      'Ajusta el calapié a tu talla y toma la empuñadura con agarre prono.',
      'Inicia el pase empujando con las piernas con fuerza (60%).',
      'Inclina el torso ligeramente hacia atrás desde las caderas (20%).',
      'Termina flexionando los brazos y llevando la empuñadura al esternón (20%).',
      'Recupera de forma inversa: extiende brazos, flexiona torso y desliza las piernas hacia adelante.'
    ],
    desc: '1000m Remo en ergómetro (Concept2) — Estación 5 oficial de Hyrox.'
  },
  {
    id: 'hyrox_farmers_carry',
    n: 'farmers carry (hyrox station 6)',
    bp: 'full body',
    eq: 'kettlebell',
    tg: 'forearms',
    mg: 'traps',
    sm: ['core', 'upper back', 'quads', 'glutes'],
    st: [
      'Levanta dos kettlebells desde el suelo con técnica de peso muerto y espalda recta.',
      'Mantén los hombros atrás y abajo, el pecho erguido y el core activado.',
      'Camina con pasos cortos, rápidos y estables sin balancear el torso.'
    ],
    desc: '200m Farmers Carry con 2 Kettlebells — Estación 6 oficial de Hyrox (Open: 2x16kg mujeres / 2x24kg hombres; Pro: 2x24kg mujeres / 2x32kg hombres).'
  },
  {
    id: 'hyrox_sandbag_lunges',
    n: 'sandbag walking lunges (hyrox station 7)',
    bp: 'upper legs',
    eq: 'sandbag',
    tg: 'quads',
    mg: 'glutes',
    sm: ['hamstrings', 'core', 'calves'],
    st: [
      'Coloca el saco de arena sobre los hombros detrás del cuello.',
      'Da un paso largo hacia adelante y baja la rodilla trasera hasta tocar suavemente el suelo.',
      'Extiende la pierna delantera para ponerte completamente de pie y dar el siguiente paso de forma continua.'
    ],
    desc: '100m Sandbag Lunges — Estación 7 oficial de Hyrox (Open: 10kg mujeres / 20kg hombres; Pro: 20kg mujeres / 30kg hombres).'
  },
  {
    id: 'hyrox_wall_balls',
    n: 'wall ball shot (hyrox station 8)',
    bp: 'upper legs',
    eq: 'medicine ball',
    tg: 'quads',
    mg: 'delts',
    sm: ['glutes', 'shoulders', 'triceps', 'core'],
    st: [
      'Colócate frente a la diana a un brazo de distancia con el balón frente al pecho.',
      'Realiza una sentadilla completa rompiendo el paralelo (cadera por debajo de rodillas).',
      'Sube con potencia y lanza el balón al centro de la diana (Open: 4kg @ 2.7m mujeres / 6kg @ 3.0m hombres; Pro: 6kg @ 2.7m mujeres / 9kg @ 3.0m hombres).',
      'Recibe el balón y enlaza directamente la siguiente sentadilla.'
    ],
    desc: '75 o 100 Wall Balls — Estación 8 final de Hyrox.'
  },
  {
    id: 'hyrox_running_interval',
    n: 'running (1km hyrox split)',
    bp: 'cardio',
    eq: 'body weight',
    tg: 'cardiovascular system',
    mg: 'quads',
    sm: ['hamstrings', 'calves', 'glutes'],
    st: [
      'Corre a ritmo controlado y constante.',
      'Mantén una cadencia eficiente regulando el pulso entre cada estación.'
    ],
    desc: 'Intervalos de 1 km de carrera entre cada estación oficial de Hyrox (8 km en total).'
  },
  {
    id: 'hyrox_echo_bike',
    n: 'echo bike / air bike (rogue / assault)',
    bp: 'cardio',
    eq: 'cardio machine',
    tg: 'cardiovascular system',
    mg: 'quads',
    sm: ['glutes', 'calves', 'shoulders', 'arms'],
    st: [
      'Ajusta la altura del sillín.',
      'Pedalea y empuja/tira de las manijas de forma coordinada a cadencia alta.'
    ],
    desc: 'Bicicleta de aire con resistencia por ventilador para sprints o volumen aeróbico.'
  }
]
