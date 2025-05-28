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
    selfView:
      "Describes oneself as an energetic, creative, and expressive communicator who thrives on sharing ideas, inspiring others, and bringing enthusiasm to every conversation. Values openness and enjoys connecting with people through lively dialogue and brainstorming.",
    othersView:
      "You are often perceived as enthusiastic, expressive, and inspiring. People may appreciate your energy and creativity, but sometimes see you as scattered or overly talkative. Channel your positivity while also making space for others’ input.",
    adapting: [
      "Practice patience and empathy when others need more time.",
      "Invite feedback to ensure your message is understood.",
      "Adjust your pace to match your audience."
    ],
    recommendation:
      "As an expressive communicator, channel your enthusiasm to inspire others, but remember to pause and listen. Practice summarizing your main points and invite quieter voices into the conversation. Your energy is a gift—use it to motivate, but also to build understanding.",
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
    selfView:
      "Describes oneself as a decisive, results-oriented communicator who values clarity and efficiency. Confident in expressing opinions and taking the lead, striving to motivate others to achieve goals quickly and effectively.",
    othersView:
      "You may be seen as confident, assertive, and results-driven. Some may admire your decisiveness, while others could perceive you as direct or even a bit forceful. Remember, your drive can inspire, but balancing it with empathy will help others feel valued.",
    adapting: [
      "Listen actively and avoid interrupting.",
      "Use facts to support your enthusiasm.",
      "Adapt your energy to the context and audience."
    ],
    recommendation:
      "As a driver, your decisiveness and focus are invaluable. To maximize your impact, take time to consider others' perspectives and emotions. Balance your results-driven approach with empathy, and you'll foster both productivity and trust.",
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
    selfView:
      "Describes oneself as a supportive, patient, and empathetic communicator who prioritizes harmony and understanding, and is attentive to the needs and feelings of others. Building strong, trusting relationships is important, and listening deeply before responding is a key trait.",
    othersView:
      "You are likely seen as supportive, patient, and a good listener. Others may feel comfortable and safe around you, but might also see you as reserved or hesitant to assert your own needs. Your calm presence is valued—just remember to share your own perspective too.",
    adapting: [
      "Speak up about your own needs and ideas.",
      "Set boundaries when necessary.",
      "Embrace change as an opportunity for growth."
    ],
    recommendation:
      "As an amiable communicator, your support and patience are strengths. Don't be afraid to assert your own needs and ideas. Embrace feedback and change as opportunities for growth, and remember that your calm presence is a powerful asset.",
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
    selfView:
      "Describes oneself as a thoughtful, analytical, and precise communicator who values accuracy, logic, and careful planning in interactions. Strives to provide clear, well-structured information and prefers to base communication on facts and details.",
    othersView:
      "You may be perceived as analytical, precise, and reliable. People trust your attention to detail and logic, but may sometimes find you distant or overly critical. Sharing warmth and context can help others connect with your thoughtful approach.",
    adapting: [
      "Share your reasoning in simple terms.",
      "Show warmth and encouragement.",
      "Be flexible when things are ambiguous."
    ],
    recommendation:
      "As an analytical communicator, your attention to detail and logic are highly valued. To connect even more effectively, share your reasoning in accessible ways and show appreciation for others' contributions. Flexibility and warmth will help you build even stronger relationships.",
  }
};

export const multiWinnersInfo = {
  intro: [
    "You have a flexible communication profile and can shift between styles as needed.",
    "This means you can adapt your approach based on the situation and audience.",
    "This versatility is a strength in diverse teams and dynamic environments.",
    "People may perceive you as adaptable, diplomatic, and able to connect with a wide range of personalities."
  ],
  recommendation:
    "As someone with a balanced communication style, you have a unique ability to adapt and connect with many types of people. However, others may sometimes be unsure of your \"true\" style or intentions. This is not a flaw, but a natural result of your versatility. To foster trust and clarity, consider sharing your thought process and motivations openly, especially when switching between styles. This transparency helps others feel secure and lets your adaptability shine as a strength, not a source of confusion. Embrace your flexibility, but also show consistency in your values and intentions."
};
