import Card from './Card';

const styleCards = [
	{
		icon: 'fas fa-comment-dots text-yellow-500',
		title: 'Verbal Communication',
		subtitle: 'What you say and how you express ideas',
		details: [
			{ icon: 'fas fa-microphone-alt', text: 'Speaking patterns and word choice' },
			{ icon: 'fas fa-pen-nib', text: 'Writing style and precision' },
			{ icon: 'fas fa-ear-listen', text: 'Listening and comprehension approach' },
			{ icon: 'fas fa-book', text: 'Information processing preferences' },
		],
		bg: 'bg-yellow-100',
	},
	{
		icon: 'fas fa-music text-blue-500',
		title: 'Paraverbal Communication',
		subtitle: 'How you deliver your message',
		details: [
			{ icon: 'fas fa-volume-up', text: 'Volume and tone variations' },
			{ icon: 'fas fa-bolt', text: 'Speaking pace and rhythm' },
			{ icon: 'fas fa-theater-masks', text: 'Vocal inflection and emotion' },
			{ icon: 'fas fa-landmark', text: 'Formality level in speech' },
		],
		bg: 'bg-blue-100',
	},
	{
		icon: 'fas fa-handshake text-green-500',
		title: 'Body Language',
		subtitle: 'Non-verbal expression and presence',
		details: [
			{ icon: 'fas fa-eye', text: 'Eye contact and facial expressions' },
			{ icon: 'fas fa-hands', text: 'Gestures and hand movements' },
			{ icon: 'fas fa-person-walking', text: 'Posture and body positioning' },
			{ icon: 'fas fa-hand-paper', text: 'Physical touch preferences' },
		],
		bg: 'bg-green-100',
	},
	{
		icon: 'fas fa-house-user text-red-500',
		title: 'Personal Space',
		subtitle: 'Environment and spatial preferences',
		details: [
			{ icon: 'fas fa-briefcase', text: 'Workspace organization style' },
			{ icon: 'fas fa-ruler-horizontal', text: 'Physical distance preferences' },
			{ icon: 'fas fa-image', text: 'Personal item display choices' },
			{ icon: 'fas fa-laptop', text: 'Virtual environment setup' },
		],
		bg: 'bg-red-100',
	},
];

const FourDimensionsSection = () => (
	<section className="w-full max-w-5xl px-4 mb-10">
		<div className="mb-10">
			<h3 className="text-4xl font-bold text-gray-900 text-center">
				Four Dimensions of{' '}
				<span className="text-blue-600">Communication</span>
			</h3>
			<p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 text-center">
				Your communication style is shaped by how you express yourself across
				these key areas:
			</p>
		</div>
		<div className="grid md:grid-cols-2 gap-6">
			{styleCards.map((card) => (
				<Card
					key={card.title}
					className="style-card bg-white p-6 rounded-xl shadow-md"
				>
					<div className={`mb-6 flex`}>
						<div className={`${card.bg} inline-flex p-4 rounded-full mb-4`}>
							<i className={`${card.icon} text-3xl`}></i>
						</div>
					</div>
					<h3 className="text-3xl font-semibold text-gray-800 mb-2">
						{card.title}
					</h3>
					<p className="text-gray-500 text-md italic">{card.subtitle}</p>
					<ul className="mt-8 space-y-2">
						{card.details.map((detail) => (
							<li key={detail.text} className="flex items-center">
								<span className="text-xl mr-2">
									<i className={detail.icon}></i>
								</span>
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
