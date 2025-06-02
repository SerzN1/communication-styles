import { FaChartLine, FaGaugeHigh, FaHandshakeAngle, FaLightbulb } from 'react-icons/fa6';
import type { AssessmentCategory, StyleKey, StyleMeta } from '../types';

export const styleMeta: Record<StyleKey, StyleMeta> = {
  blue: {
    color: 'text-blue-600',
    label: 'Blue',
    accent: '#3b82f6',
    icon: FaChartLine,
    bg: 'bg-blue-100',
    title: 'Analytical',
    desc: 'Precise, logical, and data-driven. Analyticals value accuracy and tend to be systematic thinkers who prefer facts over emotions.',
  },
  red: {
    color: 'text-red-600',
    label: 'Red',
    accent: '#ef4444',
    icon: FaGaugeHigh,
    bg: 'bg-red-100',
    title: 'Driver',
    desc: 'Direct, results-oriented, and decisive. Drivers are focused on outcomes and efficiency, often taking charge of situations.',
  },
  green: {
    color: 'text-green-600',
    label: 'Green',
    accent: '#22c55e',
    icon: FaHandshakeAngle,
    bg: 'bg-green-100',
    title: 'Amiable',
    desc: "Supportive, patient, and relationship-focused. Amiables value harmony and cooperation, often putting others' needs first.",
  },
  yellow: {
    color: 'text-yellow-600',
    label: 'Yellow',
    accent: '#facc15',
    icon: FaLightbulb,
    bg: 'bg-yellow-100',
    title: 'Expressive',
    desc: 'Enthusiastic, creative, and outgoing. Expressives are big-picture thinkers who enjoy brainstorming and social interaction.',
  },
};

export const assessementData: AssessmentCategory[] = [
  {
    category: 'Verbal dimention',
    description:
      'Verbal is connected to what you say, the way you express yourself. It is how we talk, write, listen, and read.',
    options: [
      { color: 'yellow', option: 'Decisive' },
      { color: 'yellow', option: 'Direct speech' },
      { color: 'yellow', option: "Doesn't stop to greet" },
      { color: 'red', option: 'Expresses opinions' },
      { color: 'red', option: 'Persuasive' },
      { color: 'green', option: 'Listens' },
      { color: 'green', option: 'Close personal language' },
      { color: 'green', option: 'Supportive language' },
      { color: 'blue', option: 'Focuses on specifics' },
      { color: 'blue', option: 'Precise language' },
      { color: 'blue', option: 'Avoids emotions' },
    ],
  },
  {
    category: 'Paraverbal dimention',
    description: 'Paraverbal is how you say things, the way you talk. It is about tone, speed, and inflection.',
    options: [
      { color: 'yellow', option: 'Speaks quickly' },
      { color: 'yellow', option: 'Speaks loudly' },
      { color: 'yellow', option: 'Formal speech' },
      { color: 'red', option: 'Lots of voice inflection' },
      { color: 'red', option: 'Energetic' },
      { color: 'red', option: 'Speaks loudly' },
      { color: 'green', option: 'Speaks slowly' },
      { color: 'green', option: 'Soft tones' },
      { color: 'green', option: 'Patient speech' },
      { color: 'blue', option: 'Little vocal variety' },
      { color: 'blue', option: 'Brief speech' },
      { color: 'blue', option: 'Even delivery' },
    ],
  },
  {
    category: 'Body language dimention',
    description:
      'Body language is how you express yourself without words. Examples are eye contact, body contact, movements, and facial expressions.',
    options: [
      { color: 'yellow', option: 'Direct eye contact' },
      { color: 'yellow', option: 'Firm handshake' },
      { color: 'yellow', option: 'Bold visual appearance' },
      { color: 'red', option: 'Quick actions' },
      { color: 'red', option: 'Lots of body movement' },
      { color: 'red', option: 'Enthusiastic handshake' },
      { color: 'green', option: 'Gentle handshake' },
      { color: 'green', option: 'Likes hugging' },
      { color: 'green', option: 'Slow movement' },
      { color: 'blue', option: 'Poker face' },
      { color: 'blue', option: 'Controlled movement' },
      { color: 'blue', option: 'Avoids touching' },
    ],
  },
  {
    category: 'Personal space dimention',
    description:
      'Personal space is how you like the space around you – either sitting at your desk, working on the floor, or talking with others.',
    options: [
      { color: 'yellow', option: 'Keeps physical distance' },
      { color: 'yellow', option: 'Displays calendars in workspace' },
      { color: 'red', option: 'Cluttered workspace' },
      { color: 'red', option: 'Prefers small physical space' },
      { color: 'red', option: 'Personal slogans in office' },
      { color: 'green', option: 'Family pictures in workspace' },
      { color: 'green', option: 'Likes side-by-side seating' },
      { color: 'green', option: 'Carries sentimental items' },
      { color: 'blue', option: 'Strong sense of personal space' },
      { color: 'blue', option: 'Charts or graphs in workspace' },
      { color: 'blue', option: 'Tidy desktop' },
    ],
  },
];

export const styleInfo: Record<
  StyleKey,
  {
    description: string;
    strengths: string[];
    blindSpots: string[];
    tips: string[];
    selfView: string;
    othersView: string;
    adapting: string[];
    recommendation: string;
  }
> = {
  yellow: {
    description:
      "You communicate with energy and creativity. You enjoy sharing ideas and inspiring others, and you thrive in lively conversations. Your direct approach helps move things forward, but sometimes you may overlook others' feelings. You like to get to the point and value quick results.",
    strengths: [
      'Takes action quickly',
      'Communicates clearly and directly',
      'Shares opinions with confidence',
      'Makes fast decisions',
      'Motivates and energizes others',
    ],
    blindSpots: [
      'May seem blunt or impatient',
      'Can miss emotional cues',
      'Sometimes rushes decisions',
      'May focus more on results than relationships',
    ],
    tips: [
      'Pause and listen to others',
      'Show appreciation for your team',
      'Balance speed with careful thinking',
      'Ask for feedback to ensure clarity',
    ],
    selfView:
      'Describes oneself as an energetic, creative communicator who enjoys lively dialogue and inspiring others. Values openness and connecting with people.',
    othersView:
      'Often seen as enthusiastic and inspiring. People appreciate your creativity, but may sometimes find you scattered or too talkative. Remember to make space for others’ input.',
    adapting: [
      'Practice patience and empathy when others need more time.',
      'Invite feedback to ensure your message is understood.',
      'Adjust your pace to match your audience.',
    ],
    recommendation:
      'Use your enthusiasm to inspire, but remember to listen. Summarize your main points and invite quieter voices. Your energy is a gift—use it to motivate and build understanding.',
  },
  red: {
    description:
      'You bring passion and energy to your communication. You inspire and motivate others, and you’re comfortable sharing your feelings. Your optimism is contagious, but you may sometimes overlook details or talk over others. You value connection and enjoy working with people.',
    strengths: [
      'Inspires and motivates others',
      'Expresses feelings openly',
      'Optimistic and enthusiastic',
      'Builds strong relationships',
      'Enjoys teamwork',
    ],
    blindSpots: [
      'May overlook details',
      'Can dominate conversations',
      'Sometimes interrupts others',
      'May be overly optimistic',
    ],
    tips: [
      'Pay attention to details',
      'Let others share their ideas',
      'Balance optimism with realism',
      'Practice active listening',
    ],
    selfView:
      'Sees oneself as a passionate communicator who values connection and teamwork. Enjoys sharing ideas and motivating others.',
    othersView:
      'Viewed as enthusiastic and supportive. Others appreciate your energy, but may wish for more focus on details and shared airtime.',
    adapting: [
      'Give space for quieter voices.',
      'Double-check details before acting.',
      'Encourage input from all team members.',
    ],
    recommendation:
      'Channel your passion to inspire, but remember to listen and check details. Your energy is valuable—use it to build strong, balanced teams.',
  },
  green: {
    description:
      'You are supportive, patient, and relationship-focused. You value harmony and cooperation, often putting others’ needs first. Your calm approach helps resolve conflicts, but you may avoid difficult conversations. You build trust and foster collaboration.',
    strengths: [
      'Listens attentively',
      'Builds trust',
      'Encourages collaboration',
      'Resolves conflicts calmly',
      'Supports others',
    ],
    blindSpots: [
      'May avoid confrontation',
      'Can be indecisive',
      'Sometimes neglects own needs',
      'May struggle with assertiveness',
    ],
    tips: [
      'Practice assertive communication',
      'Set clear boundaries',
      'Express your own needs',
      'Embrace constructive feedback',
    ],
    selfView:
      'Sees oneself as a calm, supportive communicator who values harmony and teamwork. Enjoys helping others succeed.',
    othersView:
      'Viewed as trustworthy and dependable. Others appreciate your support, but may wish for more directness and decisiveness.',
    adapting: [
      'Speak up about your own needs.',
      'Be willing to address conflicts directly.',
      'Balance support for others with self-care.',
    ],
    recommendation:
      'Use your supportive nature to build strong teams, but remember to assert your own needs. Your calm presence is a strength—use it to foster open, honest communication.',
  },
  blue: {
    description:
      'You are precise, logical, and data-driven. You value accuracy and tend to be a systematic thinker who prefers facts over emotions. Your analytical approach helps solve problems, but you may come across as distant or overly critical. You excel at planning and organization.',
    strengths: [
      'Thinks logically',
      'Pays attention to detail',
      'Organizes information well',
      'Solves problems systematically',
      'Values accuracy',
    ],
    blindSpots: [
      'May seem distant or critical',
      'Can overanalyze decisions',
      'Sometimes struggles with ambiguity',
      'May prioritize facts over feelings',
    ],
    tips: [
      'Acknowledge emotions in conversations',
      'Be open to new ideas',
      'Balance analysis with action',
      'Communicate the reasoning behind decisions',
    ],
    selfView:
      'Sees oneself as a logical, organized communicator who values accuracy and clarity. Enjoys solving problems and making plans.',
    othersView:
      'Viewed as reliable and thorough. Others appreciate your attention to detail, but may wish for more warmth and flexibility.',
    adapting: [
      'Show empathy in your interactions.',
      'Be open to less-structured approaches.',
      'Balance facts with consideration for people.',
    ],
    recommendation:
      'Use your analytical skills to solve problems, but remember to connect with others emotionally. Your precision is valuable—use it to build trust and clarity.',
  },
};

export const multiWinnersInfo: {
  intro: string[];
  recommendation: string;
} = {
  intro: [
    'You have a flexible communication profile and can shift between styles as needed.',
    'You adapt your approach based on the situation and audience.',
    'This versatility is a real strength in diverse teams and changing environments.',
    'People may see you as adaptable, diplomatic, and able to connect with many personalities.',
  ],
  recommendation:
    "Your ability to flex between styles is a unique asset. Sometimes, others may be unsure of your 'true' style or intentions. To build trust, share your thought process and motivations openly, especially when switching styles. This transparency helps others feel secure and lets your adaptability shine as a strength. Stay flexible, but show consistency in your values and intentions.",
};
