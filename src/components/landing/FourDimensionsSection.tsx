import {
  FaBolt, FaBook, FaBriefcase, FaCommentDots, FaEarListen, FaEye, FaHand, FaHands, FaHandshake, FaHouseUser, FaImage, FaLandmark, FaLaptop,
  FaMasksTheater,
  FaMicrophone, FaMusic, FaPenNib, FaPersonWalking, FaRulerHorizontal,
  FaVolumeHigh
} from 'react-icons/fa6';
import { Card, H2 } from '../toolkit';

const styleCards = [
  {
    icon: <FaCommentDots className ="text-yellow-500" />,
    title: 'Verbal Communication',
    subtitle: 'What you say and how you express ideas',
    details: [
      { icon: <FaMicrophone />, text: 'Speaking patterns and word choice' },
      { icon: <FaPenNib />, text: 'Writing style and precision' },
      { icon: <FaEarListen />, text: 'Listening and comprehension approach' },
      { icon: <FaBook />, text: 'Information processing preferences' },
    ],
    bg: 'bg-yellow-100',
  },
  {
    icon: <FaMusic className="text-blue-500" />,
    title: 'Paraverbal Communication',
    subtitle: 'How you deliver your message',
    details: [
      { icon: <FaVolumeHigh />, text: 'Volume and tone variations' },
      { icon: <FaBolt />, text: 'Speaking pace and rhythm' },
      { icon: <FaMasksTheater />, text: 'Vocal inflection and emotion' },
      { icon: <FaLandmark />, text: 'Formality level in speech' },
    ],
    bg: 'bg-blue-100',
  },
  {
    icon: <FaHandshake className="text-green-500" />,
    title: 'Body Language',
    subtitle: 'Non-verbal expression and presence',
    details: [
      { icon: <FaEye />, text: 'Eye contact and facial expressions' },
      { icon: <FaHands />, text: 'Gestures and hand movements' },
      { icon: <FaPersonWalking />, text: 'Posture and body positioning' },
      { icon: <FaHand />, text: 'Physical touch preferences' },
    ],
    bg: 'bg-green-100',
  },
  {
    icon: <FaHouseUser className="text-red-500" />,
    title: 'Personal Space',
    subtitle: 'Environment and spatial preferences',
    details: [
      { icon: <FaBriefcase />, text: 'Workspace organization style' },
      { icon: <FaRulerHorizontal />, text: 'Physical distance preferences' },
      { icon: <FaImage />, text: 'Personal item display choices' },
      { icon: <FaLaptop />, text: 'Virtual environment setup' },
    ],
    bg: 'bg-red-100',
  },
];

const FourDimensionsSection = () => (
  <section className="w-full mb-10">
    <div className="mb-10">
      <H2 className="text-4xl">
        Four Dimensions of <span className="text-blue-600">Communication</span>
      </H2>
      <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500 text-center">
        Your communication style is shaped by how you express yourself across these key areas:
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {styleCards.map((card) => (
        <Card key={card.title}>
          <div className="mb-6 flex">
            <div className={`${card.bg} inline-flex p-4 rounded-full text-3xl`}>
              {card.icon}
            </div>
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">{card.title}</h3>
          <p className="text-gray-500 text-md italic">{card.subtitle}</p>
          <ul className="mt-8 space-y-2">
            {card.details.map((detail) => (
              <li key={detail.text} className="flex items-center">
                <span className="text-xl mr-2 align-middle inline-flex">{detail.icon}</span>
                <span className="text-gray-700">{detail.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </section>
);

export default FourDimensionsSection;
