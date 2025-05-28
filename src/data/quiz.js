export const styleMeta = {
  blue: {
    color: 'text-blue-600',
    label: 'Blue',
    accent: '#3b82f6',
    icon: 'fas fa-chart-line text-blue-600',
    bg: 'bg-blue-100',
    title: 'Analytical',
    desc: 'Precise, logical, and data-driven. Analyticals value accuracy and tend to be systematic thinkers who prefer facts over emotions.',
  },
  red: {
    color: 'text-red-600',
    label: 'Red',
    accent: '#ef4444',
    icon: 'fas fa-tachometer-alt text-red-600',
    bg: 'bg-red-100',
    title: 'Driver',
    desc: 'Direct, results-oriented, and decisive. Drivers are focused on outcomes and efficiency, often taking charge of situations.',
  },
  green: {
    color: 'text-green-600',
    label: 'Green',
    accent: '#22c55e',
    icon: 'fas fa-hands-helping text-green-600',
    bg: 'bg-green-100',
    title: 'Amiable',
    desc: 'Supportive, patient, and relationship-focused. Amiables value harmony and cooperation, often putting others\' needs first.',
  },
  yellow: {
    color: 'text-yellow-600',
    label: 'Yellow',
    accent: '#facc15',
    icon: 'fas fa-lightbulb text-yellow-600',
    bg: 'bg-yellow-100',
    title: 'Expressive',
    desc: 'Enthusiastic, creative, and outgoing. Expressives are big-picture thinkers who enjoy brainstorming and social interaction.',
  }
};

export const assessementData = [
  {
    category: "Verbal dimention",
    description: "Verbal is connected to what you say, the way you express yourself. It is how we talk, write, listen, and read.",
    options: [
      { color: "yellow", option: "Decisive" },
      { color: "yellow", option: "Direct speech" },
      { color: "yellow", option: "Doesn't stop to greet" },
      { color: "red", option: "Expresses opinions" },
      { color: "red", option: "Persuasive" },
      { color: "green", option: "Listens" },
      { color: "green", option: "Close personal language" },
      { color: "green", option: "Supportive language" },
      { color: "blue", option: "Focuses on specifics" },
      { color: "blue", option: "Precise language" },
      { color: "blue", option: "Avoids emotions" }
    ]
  },
  {
    category: "Paraverbal dimention",
    description: "Paraverbal is how you say things, the way you talk. It is about tone, speed, and inflection.",
    options: [
      { color: "yellow", option: "Speaks quickly" },
      { color: "yellow", option: "Speaks loudly" },
      { color: "yellow", option: "Formal speech" },
      { color: "red", option: "Lots of voice inflection" },
      { color: "red", option: "Energetic" },
      { color: "red", option: "Speaks loudly" },
      { color: "green", option: "Speaks slowly" },
      { color: "green", option: "Soft tones" },
      { color: "green", option: "Patient speech" },
      { color: "blue", option: "Little vocal variety" },
      { color: "blue", option: "Brief speech" },
      { color: "blue", option: "Even delivery" }
    ]
  },
  {
    category: "Body language dimention",
    description: "Body language is how you express yourself without words. Examples are eye contact, body contact, movements, and facial expressions.",
    options: [
      { color: "yellow", option: "Direct eye contact" },
      { color: "yellow", option: "Firm handshake" },
      { color: "yellow", option: "Bold visual appearance" },
      { color: "red", option: "Quick actions" },
      { color: "red", option: "Lots of body movement" },
      { color: "red", option: "Enthusiastic handshake" },
      { color: "green", option: "Gentle handshake" },
      { color: "green", option: "Likes hugging" },
      { color: "green", option: "Slow movement" },
      { color: "blue", option: "Poker face" },
      { color: "blue", option: "Controlled movement" },
      { color: "blue", option: "Avoids touching" }
    ]
  },
  {
    category: "Personal space dimention",
    description: "Personal space is how you like the space around you – either sitting at your desk, working on the floor, or talking with others.",
    options: [
      { color: "yellow", option: "Keeps physical distance" },
      { color: "yellow", option: "Displays calendars in workspace" },
      { color: "red", option: "Cluttered workspace" },
      { color: "red", option: "Prefers small physical space" },
      { color: "red", option: "Personal slogans in office" },
      { color: "green", option: "Family pictures in workspace" },
      { color: "green", option: "Likes side-by-side seating" },
      { color: "green", option: "Carries sentimental items" },
      { color: "blue", option: "Strong sense of personal space" },
      { color: "blue", option: "Charts or graphs in workspace" },
      { color: "blue", option: "Tidy desktop" }
    ]
  }
];

export const styleInfo = {
  yellow: {
    description:
      "You communicate with energy and creativity. You enjoy sharing ideas and inspiring others, and you thrive in lively conversations. Your direct approach helps move things forward, but sometimes you may overlook others' feelings. You like to get to the point and value quick results.",
    strengths: [
      "Takes action quickly",
      "Communicates clearly and directly",
      "Shares opinions with confidence",
      "Makes fast decisions",
      "Motivates and energizes others"
    ],
    blindSpots: [
      "May seem blunt or impatient",
      "Can miss emotional cues",
      "Sometimes rushes decisions",
      "May focus more on results than relationships"
    ],
    tips: [
      "Pause and listen to others",
      "Show appreciation for your team",
      "Balance speed with careful thinking",
      "Ask for feedback to ensure clarity"
    ],
    selfView:
      "Describes oneself as an energetic, creative communicator who enjoys lively dialogue and inspiring others. Values openness and connecting with people.",
    othersView:
      "Often seen as enthusiastic and inspiring. People appreciate your creativity, but may sometimes find you scattered or too talkative. Remember to make space for others’ input.",
    adapting: [
      "Practice patience and empathy when others need more time.",
      "Invite feedback to ensure your message is understood.",
      "Adjust your pace to match your audience."
    ],
    recommendation:
      "Use your enthusiasm to inspire, but remember to listen. Summarize your main points and invite quieter voices. Your energy is a gift—use it to motivate and build understanding.",
  },
  red: {
    description:
      "You bring passion and energy to your communication. You inspire and motivate others, and you’re comfortable sharing your feelings. Your optimism is contagious, but you may sometimes overlook details or talk over others. You value connection and enjoy working with people.",
    strengths: [
      "Brings energy and enthusiasm",
      "Persuades and inspires others",
      "Shares emotions openly",
      "Creates a positive atmosphere",
      "Encourages collaboration"
    ],
    blindSpots: [
      "May dominate conversations",
      "Can be seen as overly emotional",
      "Sometimes misses details",
      "May struggle with structure"
    ],
    tips: [
      "Give space for quieter voices",
      "Balance feelings with facts",
      "Be mindful of time and structure",
      "Summarize key points for clarity"
    ],
    selfView:
      "Describes oneself as a decisive, results-focused communicator who motivates others and values efficiency.",
    othersView:
      "Seen as confident and assertive. Some admire your decisiveness, while others may find you too direct. Balancing drive with empathy helps others feel valued.",
    adapting: [
      "Listen actively and avoid interrupting.",
      "Use facts to support your enthusiasm.",
      "Adapt your energy to the context and audience."
    ],
    recommendation:
      "Your decisiveness is a strength. Take time to consider others' perspectives and emotions. Balancing your results-driven approach with empathy will help you build trust and achieve more together.",
  },
  green: {
    description:
      "You are a supportive and patient communicator. You listen carefully and value understanding others. You build strong relationships and help create harmony, but may avoid conflict or hesitate to share your own ideas. You work best in cooperative, trusting environments.",
    strengths: [
      "Supportive and patient",
      "Listens deeply",
      "Builds strong relationships",
      "Sensitive to others' needs",
      "Promotes harmony"
    ],
    blindSpots: [
      "May avoid necessary conflict",
      "Can be indecisive",
      "Might put others' needs first",
      "Sometimes resists change"
    ],
    tips: [
      "Speak up about your own ideas",
      "Welcome constructive feedback",
      "Balance harmony with honesty",
      "Be open to new approaches"
    ],
    selfView:
      "Describes oneself as a caring, patient communicator who values harmony and listens deeply to others.",
    othersView:
      "Seen as supportive and trustworthy. Others feel comfortable around you, but may wish you’d assert your own needs more. Your calm presence is valued—remember to share your perspective too.",
    adapting: [
      "Speak up about your own needs and ideas.",
      "Set boundaries when necessary.",
      "Embrace change as an opportunity for growth."
    ],
    recommendation:
      "Your support and patience are strengths. Don’t be afraid to assert your own needs and ideas. Embrace feedback and change as opportunities for growth, and remember your calm presence is a powerful asset.",
  },
  blue: {
    description:
      "You are thoughtful and analytical in your communication. You focus on details and value accuracy and logic. You plan carefully and set high standards, but may sometimes seem distant or overly critical. You prefer clear expectations and well-structured information.",
    strengths: [
      "Analytical and precise",
      "Consistent and reliable",
      "Thorough communicator",
      "Values accuracy and logic",
      "Plans ahead and anticipates problems"
    ],
    blindSpots: [
      "May seem distant or critical",
      "Can get lost in details",
      "Might struggle with ambiguity",
      "Sometimes slow to decide"
    ],
    tips: [
      "Share the big picture, not just details",
      "Express appreciation and encouragement",
      "Be open to new ideas",
      "Communicate deadlines and expectations clearly"
    ],
    selfView:
      "Describes oneself as a thoughtful, analytical communicator who values accuracy and careful planning.",
    othersView:
      "Seen as precise and reliable. People trust your attention to detail, but may sometimes find you distant or too critical. Sharing warmth and context helps others connect with your thoughtful approach.",
    adapting: [
      "Share your reasoning in simple terms.",
      "Show warmth and encouragement.",
      "Be flexible when things are ambiguous."
    ],
    recommendation:
      "Your attention to detail and logic are valued. To connect even better, share your reasoning simply and show appreciation for others. Flexibility and warmth will help you build stronger relationships.",
  }
};

export const multiWinnersInfo = {
  intro: [
    "You have a flexible communication profile and can shift between styles as needed.",
    "You adapt your approach based on the situation and audience.",
    "This versatility is a real strength in diverse teams and changing environments.",
    "People may see you as adaptable, diplomatic, and able to connect with many personalities."
  ],
  recommendation:
    "Your ability to flex between styles is a unique asset. Sometimes, others may be unsure of your 'true' style or intentions. To build trust, share your thought process and motivations openly, especially when switching styles. This transparency helps others feel secure and lets your adaptability shine as a strength. Stay flexible, but show consistency in your values and intentions."
};
