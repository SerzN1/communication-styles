import { Card, H2 } from './toolkit';

const fourStyles = [
	{
		icon: "fas fa-chart-line text-blue-600",
		bg: "bg-blue-100",
		title: "Analytical",
		desc: "Precise, logical, and data-driven. Analyticals value accuracy and tend to be systematic thinkers who prefer facts over emotions.",
	},
	{
		icon: "fas fa-tachometer-alt text-red-600",
		bg: "bg-red-100",
		title: "Driver",
		desc: "Direct, results-oriented, and decisive. Drivers are focused on outcomes and efficiency, often taking charge of situations.",
	},
	{
		icon: "fas fa-hands-helping text-green-600",
		bg: "bg-green-100",
		title: "Amiable",
		desc: "Supportive, patient, and relationship-focused. Amiables value harmony and cooperation, often putting others' needs first.",
	},
	{
		icon: "fas fa-lightbulb text-yellow-600",
		bg: "bg-yellow-100",
		title: "Expressive",
		desc: "Enthusiastic, creative, and outgoing. Expressives are big-picture thinkers who enjoy brainstorming and social interaction.",
	},
];

const FourStylesSection = () => (
  <section className="w-full max-w-5xl px-4 mb-20">
    <H2 className='text-4xl mb-10'>
      The Four Main <span className="text-blue-600">Communication Styles</span>
    </H2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {fourStyles.map((card) => (
        <Card key={card.title}>
          <div className="text-center mb-4">
            <div className={`${card.bg} inline-flex p-4 rounded-full`}>
              <i className={`${card.icon} text-2xl`}></i>
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

export default FourStylesSection;
