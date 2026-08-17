window.PORTFOLIO = {
  meta: {
    name: "Gabriele Canova",
    role: "Electronic music · sound art · interactive systems",
    email: "canovagabriele@gmail.com",
    year: "2026",
    statement: "La mia ricerca attraversa composizione elettronica, spazio, gesto, immagine e sistemi interattivi. Il portfolio è pensato come archivio vivo: una selezione di lavori, processi e strumenti che può essere aggiornata nel tempo."
  },
  projects: [
    {
      slug: "permanente-inizio",
      title: "Permanente Inizio",
      year: "2026",
      category: "Composition · Live electronics",
      format: "Harp, prepared harp & live electronics",
      image: "assets/img/permanente_score.jpg",
      summary: "Una composizione in cui gesto acustico, preparazione dello strumento e risposta elettronica costruiscono una memoria sonora instabile.",
      tags: ["Max/MSP", "prepared harp", "granular synthesis", "performance"],
      links: [
        {label:"Partitura", href:"assets/docs/permanente-inizio-partitura.pdf"},
        {label:"Legenda", href:"assets/docs/permanente-inizio-legenda.pdf"},
        {label:"Documentazione", href:"assets/docs/permanente-inizio-documentazione.pdf"},
        {label:"Max patch", href:"assets/docs/permanente-inizio.maxpat", download:true}
      ]
    },
    {
      slug: "campo-aperto",
      title: "Campo Aperto",
      year: "2022–23",
      category: "Electroacoustic composition",
      format: "Stereo · 6'29\"",
      image: "assets/img/campo.jpg",
      summary: "Primo studio elettroacustico: processi, texture, droni e logogrammi come materiali per costruire la forma attraverso l'ascolto.",
      tags: ["montage", "analog synthesis", "logograms"],
      audio: [{label:"Ascolto", src:"assets/audio/campo-aperto.mp3"}]
    },
    {
      slug: "superfluous",
      title: "Superfluous",
      year: "2022–23",
      category: "Concrete sound study",
      format: "Stereo · 2'42\"",
      image: "assets/img/studies.jpg",
      summary: "Il suono superfluo dello studio — porte, ticchettii, frizioni e residui — diventa materiale centrale della composizione.",
      tags: ["field recording", "sound design", "concrete sound"],
      audio: [{label:"Ascolto", src:"assets/audio/superfluous.mp3"}]
    },
    {
      slug: "nubivagus",
      title: "Nubivagus",
      year: "2022–23",
      category: "Synthetic sound study",
      format: "Stereo · 6'14\"",
      image: "assets/img/studies.jpg",
      summary: "Un viaggio tra sogni sintetici costruito esclusivamente con sintetizzatori e sound design digitale, senza registrazioni concrete.",
      tags: ["synthesis", "sound design", "digital composition"],
      audio: [{label:"Ascolto", src:"assets/audio/nubivagus.mp3"}]
    },
    {
      slug: "vox-mea-sum",
      title: "Vox Mea Sum",
      year: "2022–23",
      category: "Vocal study",
      format: "Stereo · 4'38\"",
      image: "assets/img/studies.jpg",
      summary: "Vocali e vocalizzi sono l'unica sorgente del brano: la voce diventa ambiente, corpo timbrico e materiale elettroacustico.",
      tags: ["voice", "post-production", "electroacoustic"],
      audio: [{label:"Ascolto", src:"assets/audio/vox-mea-sum.mp3"}]
    },
    {
      slug: "wasalo",
      title: "Wasalo — l'anima vibrante",
      year: "2022–23",
      category: "Soundscape · Spatial composition",
      format: "Quadraphonic · 5'15\"",
      image: "assets/img/studies.jpg",
      summary: "Field recording dalla ricerca di Steven Feld in Papua Nuova Guinea, riorganizzati come paesaggio quadrifonico tra fronte e retro.",
      tags: ["quadraphony", "field recording", "soundscape"],
      audio: [
        {label:"Stereo reference", src:"assets/audio/wasalo-stereo-reference.mp3"},
        {label:"Front L/R", src:"assets/audio/wasalo-front.mp3"},
        {label:"Back L/R", src:"assets/audio/wasalo-back.mp3"}
      ]
    },
    {
      slug: "acid-reign",
      title: "Acid Reign",
      year: "2025–26",
      category: "Immersive composition",
      format: "Electronic composition · spatial performance",
      image: "assets/img/acid.jpg",
      summary: "Materia elettronica instabile, movimento spaziale e controllo gestuale convergono in una composizione performativa.",
      tags: ["immersive audio", "gesture", "Ableton Live"]
    },
    {
      slug: "air-controller",
      title: "Air Controller",
      year: "2025–26",
      category: "Interactive system",
      format: "Hand tracking · OSC · Max/MSP",
      image: "assets/img/air.jpg",
      summary: "Interfaccia gestuale che traduce distanze, posizione e velocità delle mani in dati musicali normalizzati e mappabili in tempo reale.",
      tags: ["MediaPipe", "Python", "OSC", "Max for Live"]
    },
    {
      slug: "sonic-shuffle",
      title: "Sonic Shuffle",
      year: "2023–24",
      category: "Live spatialization",
      format: "Multichannel performance",
      image: "assets/img/sonic.jpg",
      summary: "Una regia sonora performativa: logogrammi, routing multicanale e spazializzazione live interpretano in tempo reale i materiali dell'ensemble.",
      tags: ["SPAT", "LBAP", "Max/MSP", "Dante"],
      links: [{label:"Relazione", href:"assets/docs/sonic-shuffle-relazione.pdf"}]
    },
    {
      slug: "arwe",
      title: "ARWE",
      year: "2025–26",
      category: "Performance · Fashion design",
      format: "Live electronic set",
      image: "assets/img/arwe.jpg",
      summary: "Musica elettronica dal vivo per una sfilata: corpo, abito, spazio scenico e controllo gestuale diventano parte dello stesso sistema performativo.",
      tags: ["fashion", "live electronics", "Air Controller"]
    },
    {
      slug: "pinacoteca",
      title: "Pinacoteca Albertina",
      year: "2025–26",
      category: "Sound · Exhibition",
      format: "Site-specific sound",
      image: "assets/img/pinacoteca.jpg",
      summary: "Un progetto sonoro pensato per l'esposizione: il suono agisce sul tempo di permanenza, sull'ambiente e sulla percezione degli abiti.",
      tags: ["exhibition", "design", "space"]
    },
    {
      slug: "margherita-data",
      title: "Margherita Data",
      year: "2025–26",
      category: "Fashion film · Sound design",
      format: "Fixed media",
      image: "assets/img/margherita.jpg",
      summary: "Sound design e composizione fixed media per fashion design: tessuto, corpo, movimento e montaggio diventano parametri musicali.",
      tags: ["fashion film", "fixed media", "sound design"]
    },
    {
      slug: "la-caduta-di-troia",
      title: "La caduta di Troia",
      year: "2024",
      category: "Music for image",
      format: "Silent film · stereo 2.1 / multichannel 8.1",
      image: "assets/img/troia.jpg",
      summary: "Risonorizzazione contemporanea di un film muto: montaggio, foley, palette timbrica e spazializzazione come strumenti narrativi.",
      tags: ["silent film", "foley", "spatialization"]
    },
    {
      slug: "pinvision",
      title: "PinVision",
      year: "2025–26",
      category: "Audiovisual sound design",
      format: "Brief-based work",
      image: "assets/img/pinvision.jpg",
      summary: "Un lavoro di sound design concentrato su ritmo visivo, dettaglio, transizione e identità sonora in un formato breve.",
      tags: ["sound identity", "audiovisual", "brief"]
    },
    {
      slug: "la-nave",
      title: "La Nave sul mare perpetuo",
      year: "in development",
      category: "Audiovisual project",
      format: "Work in progress",
      image: "assets/img/lanave.jpg",
      summary: "Progetto audiovisivo in sviluppo: suono, spazio e montaggio costruiscono una dimensione narrativa ancora aperta.",
      tags: ["film", "sound design", "in progress"]
    },
    {
      slug: "tide",
      title: "Tide",
      year: "2025–26",
      category: "Music production",
      format: "Production for Nari",
      image: "assets/img/tide.jpg",
      summary: "Produzione musicale centrata sul rapporto tra voce, atmosfera, forma e identità sonora.",
      tags: ["production", "voice", "arrangement"]
    },
    {
      slug: "poesia",
      title: "Musica per poesia",
      year: "2025–26",
      category: "Voice · Text · Electronics",
      format: "Applied composition",
      image: "assets/img/poesia.jpg",
      summary: "Il ritmo interno della parola, la voce e l'ambiente elettronico diventano materiali di una composizione applicata al testo poetico.",
      tags: ["poetry", "voice", "electronics"]
    },
    {
      slug: "dancing-motion",
      title: "Dancing Motion",
      year: "2022–23",
      category: "Preparatory research",
      format: "Video tracking · OSC · Max/MSP",
      image: "assets/img/dancing.jpg",
      summary: "Ricerca preparatoria sul rapporto tra movimento, video tracking e generazione sonora in tempo reale.",
      tags: ["TouchDesigner", "OSC", "Max/MSP"],
      links: [
        {label:"Documentazione", href:"assets/docs/dancing-motion.pdf"},
        {label:"Max patch", href:"assets/docs/dancing-motion.maxpat", download:true}
      ]
    },
    {
      slug: "archi",
      title: "Studio per strumenti ad arco",
      year: "2023–24",
      category: "Preparatory research",
      format: "Open notation",
      image: "assets/img/archi.jpg",
      summary: "Scrittura aperta, logogrammi e processi grafici come dispositivi per orientare gesto e comportamento sonoro.",
      tags: ["open score", "strings", "graphic notation"]
    }
  ]
};
