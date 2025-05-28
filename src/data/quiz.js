export const styleMeta = {
  yellow: {
    color: 'text-yellow-600',
    label: 'Yellow',
    accent: '#facc15',
    iconClass: 'fas fa-bolt text-yellow-400',
  },
  red: {
    color: 'text-red-600',
    label: 'Red',
    accent: '#ef4444',
    iconClass: 'fas fa-fire text-red-500',
  },
  green: {
    color: 'text-green-600',
    label: 'Green',
    accent: '#22c55e',
    iconClass: 'fas fa-leaf text-green-500',
  },
  blue: {
    color: 'text-blue-600',
    label: 'Blue',
    accent: '#3b82f6',
    iconClass: 'fas fa-water text-blue-500',
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
      "You are decisive, direct, and bold in your communication. You value clarity and action. You thrive in fast-paced environments and are not afraid to take the lead. Your straightforward approach helps cut through confusion, but you may sometimes overlook the emotional needs of others. You are motivated by results and efficiency, and you prefer to get to the point quickly.",
    strengths: [
      "Decisive and action-oriented",
      "Clear and direct communicator",
      "Confident in expressing opinions",
      "Quick to make decisions",
      "Motivates others to act"
    ],
    blindSpots: [
      "May come across as blunt or impatient",
      "Can overlook others' feelings",
      "Might rush decisions without full input",
      "Sometimes too focused on results over relationships"
    ],
    tips: [
      "Pause to listen to others' perspectives",
      "Show appreciation for team contributions",
      "Balance speed with thoroughness",
      "Ask for feedback to ensure clarity"
    ],
    selfView: "You see yourself as a bold, results-driven communicator who values clarity and efficiency.",
    othersView: "Others may see you as confident and direct, but sometimes too forceful or impatient.",
    adapting: [
      "Practice patience and empathy when others need more time.",
      "Invite feedback to ensure your message is understood.",
      "Adjust your pace to match your audience."
    ]
  },
  red: {
    description:
      "You are expressive, energetic, and persuasive. You bring enthusiasm and emotion to your interactions. You excel at inspiring and motivating others, and you are comfortable sharing your feelings. Your optimism and passion are contagious, but you may sometimes overlook details or dominate conversations. You value connection and thrive in collaborative environments.",
    strengths: [
      "Energetic and enthusiastic",
      "Persuasive and expressive",
      "Inspires and motivates others",
      "Comfortable sharing emotions",
      "Creates a positive atmosphere"
    ],
    blindSpots: [
      "May dominate conversations",
      "Can be perceived as overly emotional",
      "Might overlook details",
      "Sometimes struggles with structure"
    ],
    tips: [
      "Give space for quieter voices",
      "Focus on facts as well as feelings",
      "Be mindful of time and structure",
      "Summarize key points to ensure clarity"
    ],
    selfView: "You see yourself as a passionate communicator who brings energy and excitement to interactions.",
    othersView: "Others may see you as inspiring and engaging, but sometimes overwhelming or unfocused.",
    adapting: [
      "Listen actively and avoid interrupting.",
      "Use facts to support your enthusiasm.",
      "Adapt your energy to the context and audience."
    ]
  },
  green: {
    description:
      "You are supportive, patient, and attentive. You value connection and understanding, and you are an excellent listener. You build strong relationships and are sensitive to others' needs. Your calm and steady approach helps create harmony, but you may avoid necessary conflict or struggle to assert your own ideas. You are motivated by cooperation and trust.",
    strengths: [
      "Supportive and patient",
      "Excellent listener",
      "Builds strong relationships",
      "Sensitive to others' needs",
      "Promotes harmony in groups"
    ],
    blindSpots: [
      "May avoid necessary conflict",
      "Can be indecisive",
      "Might put others' needs before your own",
      "Sometimes resists change"
    ],
    tips: [
      "Assert your own ideas when needed",
      "Embrace constructive feedback",
      "Balance harmony with honest communication",
      "Be open to new approaches"
    ],
    selfView: "You see yourself as a caring communicator who values connection and understanding.",
    othersView: "Others may see you as empathetic and trustworthy, but sometimes too passive or hesitant.",
    adapting: [
      "Speak up about your own needs and ideas.",
      "Set boundaries when necessary.",
      "Embrace change as an opportunity for growth."
    ]
  },
  blue: {
    description:
      "You are precise, controlled, and analytical. You focus on details and consistency, and you value accuracy and logic. You are thorough in your communication and strive for high standards. Your careful planning ensures quality, but you may seem distant or overly critical. You are motivated by knowledge and prefer clear expectations.",
    strengths: [
      "Analytical and precise",
      "Consistent and reliable",
      "Thorough in communication",
      "Values accuracy and logic",
      "Plans carefully and anticipates problems"
    ],
    blindSpots: [
      "May seem distant or overly critical",
      "Can get lost in details",
      "Might struggle with ambiguity",
      "Sometimes slow to make decisions"
    ],
    tips: [
      "Share the bigger picture, not just details",
      "Express appreciation and encouragement",
      "Be open to new approaches",
      "Communicate deadlines and expectations clearly"
    ],
    selfView: "You see yourself as a thoughtful communicator who values accuracy and careful planning.",
    othersView: "Others may see you as dependable and logical, but sometimes too reserved or critical.",
    adapting: [
      "Share your reasoning in simple terms.",
      "Show warmth and encouragement.",
      "Be flexible when things are ambiguous."
    ]
  }
};
