import { styleMeta } from '../../data/assessment';
import { Card, H2 } from '../toolkit';

// Map styleMeta keys to FourStylesSection order
const styleOrder = ['blue', 'red', 'green', 'yellow'];

const FourStylesSection = () => (
  <section className="mb-20">
    <H2 className='text-4xl mb-10'>
      The Four Main <span className="text-blue-600">Communication Styles</span>
    </H2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {styleOrder.map((key) => {
        const card = styleMeta[key];
        return (
          <Card key={card.label}>
            <div className="text-center mb-4">
              <div className={`${card.bg} inline-flex p-4 rounded-full`}>
                <i className={card.icon + " text-2xl"}></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </Card>
        );
      })}
    </div>
  </section>
);

export default FourStylesSection;
