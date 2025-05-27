import React from 'react';
import { Link } from 'react-router-dom';

const styleCards = [
  {
    icon: '💬',
    title: 'Verbal Communication',
    subtitle: 'What you say and how you express ideas',
    details: [
      { icon: '🗣️', text: 'Speaking patterns and word choice' },
      { icon: '✍️', text: 'Writing style and precision' },
      { icon: '👂', text: 'Listening and comprehension approach' },
      { icon: '📚', text: 'Information processing preferences' },
    ],
    border: 'border-yellow-400',
  },
  {
    icon: '🎵',
    title: 'Paraverbal Communication',
    subtitle: 'How you deliver your message',
    details: [
      { icon: '🔊', text: 'Volume and tone variations' },
      { icon: '⚡', text: 'Speaking pace and rhythm' },
      { icon: '🎭', text: 'Vocal inflection and emotion' },
      { icon: '🏛️', text: 'Formality level in speech' },
    ],
    border: 'border-blue-400',
  },
  {
    icon: '🤝',
    title: 'Body Language',
    subtitle: 'Non-verbal expression and presence',
    details: [
      { icon: '👀', text: 'Eye contact and facial expressions' },
      { icon: '🤲', text: 'Gestures and hand movements' },
      { icon: '🚶', text: 'Posture and body positioning' },
      { icon: '✋', text: 'Physical touch preferences' },
    ],
    border: 'border-green-400',
  },
  {
    icon: '🏠',
    title: 'Personal Space',
    subtitle: 'Environment and spatial preferences',
    details: [
      { icon: '💼', text: 'Workspace organization style' },
      { icon: '📏', text: 'Physical distance preferences' },
      { icon: '🖼️', text: 'Personal item display choices' },
      { icon: '💻', text: 'Virtual environment setup' },
    ],
    border: 'border-red-400',
  },
];

const benefits = [
  { icon: '🎯', title: 'Improved Clarity', desc: 'Communicate your ideas more effectively by understanding your natural communication patterns.' },
  { icon: '🤝', title: 'Better Relationships', desc: 'Build stronger connections by adapting your style to work better with others.' },
  { icon: '📈', title: 'Professional Growth', desc: 'Enhance your leadership and collaboration skills in workplace settings.' },
  { icon: '💡', title: 'Self-Awareness', desc: 'Gain insights into your communication strengths and areas for development.' },
];

const LandingPage = ({ onNavigate }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center">
    {/* Hero Section */}
    <section className="w-full max-w-4xl text-center py-16">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">Discover Your Unique Communication Style</h1>
      <p className="text-2xl text-gray-700 mb-8 font-medium">Transform the way you connect, collaborate, and communicate.</p>
      <div className="flex justify-center gap-8 mb-10">
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-500">4</div>
          <div className="text-base text-gray-600 uppercase tracking-wider">Dimensions</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-500">95%</div>
          <div className="text-base text-gray-600 uppercase tracking-wider">Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-500">5min</div>
          <div className="text-base text-gray-600 uppercase tracking-wider">Quick Assessment</div>
        </div>
      </div>
      <Link to="/quiz">
        <button className="bg-yellow-500 text-white px-16 py-7 rounded-2xl shadow-lg hover:bg-yellow-600 transition text-3xl font-extrabold inline-flex items-center gap-2">
          <span>Start Your Journey</span>
          <span className="text-3xl">→</span>
        </button>
      </Link>
    </section>

    {/* Communication Styles Grid */}
    <section className="w-full max-w-5xl px-4">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold text-gray-900 mb-2">Four Dimensions of Communication</h3>
        <p className="text-2xl text-gray-600">Your communication style is shaped by how you express yourself across these key areas:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {styleCards.map((card) => (
          <div
            key={card.title}
            className={`relative bg-white rounded-2xl shadow p-8 border-2 ${card.border} hover:shadow-lg transition group overflow-hidden`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{card.title}</h3>
            <p className="text-gray-500 italic mb-4 text-lg">{card.subtitle}</p>
            <ul className="text-gray-700 space-y-3">
              {card.details.map((d) => (
                <li key={d.text} className="flex items-center gap-3 text-lg"><span className="text-2xl">{d.icon}</span> {d.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Benefits Section */}
    <section className="w-full max-w-5xl px-4 mb-20">
      <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center">Why Understanding Your Style Matters</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition border-2 border-gray-200">
            <div className="text-5xl mb-4">{b.icon}</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{b.title}</h4>
            <p className="text-gray-600 text-lg">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Final CTA */}
    <section className="w-full max-w-3xl mx-auto text-center mb-20">
      <div className="bg-white rounded-2xl p-10 shadow border-2 border-yellow-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Discover Your Communication Style?</h3>
        <p className="text-2xl text-gray-600 mb-6">Take our comprehensive assessment and unlock insights about how you naturally communicate.</p>
        <a
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300 nav-link"
          onClick={() => onNavigate('quiz')}
          style={{ cursor: 'pointer' }}
        >
          Take the Quiz Now
          <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </section>
  </div>
);

export default LandingPage;