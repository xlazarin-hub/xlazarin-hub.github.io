export const projects = [
  {
    slug: 'catch-me', title: 'Catch Me', category: 'Multiplayer action', color: '#a7f087', team: "ByteRockers’ Games", scope: 'Released game',
    intro: 'The systems behind a multiplayer chase, from signing in to finding a match.',
    summary: 'Catch Me is a multiplayer action game released on Steam. My work connected the player-facing experience to the services that bring a session online.',
    contributions: [
      'Led implementation of the core multiplayer architecture using PlayFab and Steam APIs.',
      'Implemented authentication, matchmaking, and session management.',
      'Developed deployment tools, character customization systems, and asset recording pipelines for live operations.'
    ], skills: ['PlayFab', 'Steam APIs', 'Multiplayer']
  },
  {
    slug: 'insurmountable', title: 'Insurmountable', category: 'Strategy survival', color: '#8ed4ff', team: "ByteRockers’ Games", scope: 'Released game',
    intro: 'Gameplay systems and shared frameworks for a mountain survival game.',
    summary: 'Insurmountable is a strategy survival game built around mountaineering. My engineering work spanned gameplay and the shared code that supported the project as it evolved.',
    contributions: ['Developed gameplay systems and worked on shared frameworks.', 'Contributed to long-term codebase maintenance and performance optimization.'],
    skills: ['Unity', 'Gameplay systems', 'Optimization']
  },
  {
    slug: 'beat-slayer', title: 'Beat Slayer', category: 'Rhythm action', color: '#f8a2c6', team: "ByteRockers’ Games", scope: 'Vertical slice',
    intro: 'VFX, shaders, and lighting that made the rhythm of the vertical slice readable.',
    summary: 'On the Beat Slayer vertical slice, I worked where technical art meets gameplay feedback. The visual systems needed to communicate the beat while staying within real-time performance constraints.',
    contributions: ['Developed and integrated visual effects, lighting, and shader systems.', 'Used those systems to reinforce rhythm and player feedback in the vertical slice.'],
    skills: ['Technical art', 'Shaders', 'VFX']
  },
  {
    slug: 'mercedes-benz-hmi', title: 'Mercedes-Benz HMI', category: 'Automotive visualization', color: '#fbbe7f', team: 'Siili Auto · Mercedes-Benz', scope: 'Embedded automotive systems',
    intro: 'Real-time vehicle and sensor visualization on embedded automotive hardware.',
    summary: 'At Siili Auto, I developed Unity visualization systems for Mercedes-Benz human-machine interfaces and advanced driver assistance systems. The work connected live data, interface design, and the constraints of in-vehicle hardware.',
    contributions: ['Designed, implemented, and maintained real-time HMI and ADAS visualizations.', 'Owned core architecture for processing live vehicle and sensor data.', 'Optimized CPU, GPU, memory usage, and startup time, working closely with UX, product, and platform teams.'],
    skills: ['Embedded Unity', 'Live data', 'Profiling']
  }
];
