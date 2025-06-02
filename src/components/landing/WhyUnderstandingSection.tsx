import type { FunctionComponent } from 'preact';
import { FaBullseye, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa6';
import { Card, H2 } from '../toolkit';

const whyCards = [
	{
		icon: <FaBullseye className="text-blue-600" />,
		bg: 'bg-blue-100',
		title: 'Improved Clarity',
		desc: 'Communicate your ideas more effectively by understanding your natural communication patterns.',
	},
	{
		icon: <FaHandshake className="text-red-600" />,
		bg: 'bg-red-100',
		title: 'Better Relationships',
		desc: 'Build stronger connections by adapting your style to work better with others.',
	},
	{
		icon: <FaChartLine className="text-green-600" />,
		bg: 'bg-green-100',
		title: 'Professional Growth',
		desc: 'Enhance your leadership and collaboration skills in workplace settings.',
	},
	{
		icon: <FaLightbulb className="text-yellow-600" />,
		bg: 'bg-yellow-100',
		title: 'Self-Awareness',
		desc: 'Gain insights into your communication strengths and areas for development.',
	},
];

const WhyUnderstandingSection: FunctionComponent = () => (
	<section className="mb-20">
		<H2 className="text-4xl mb-10">
			Why Understanding <span className="text-blue-600">Your Style</span> Matters
		</H2>
		<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
			{whyCards.map((card) => (
				<Card key={card.title}>
					<div className="text-center mb-4">
						<div className={`${card.bg} inline-flex p-4 rounded-full text-3xl`}>
							{card.icon}
						</div>
					</div>
					<h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
						{card.title}
					</h3>
					<p className="text-gray-600 text-sm">{card.desc}</p>
				</Card>
			))}
		</div>
	</section>
);

export default WhyUnderstandingSection;
