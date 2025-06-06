import { styleMeta } from '../../data/assessment';
import { StyleKey } from '../../types';
import { Card, H2 } from '../toolkit';

import type { FunctionComponent } from 'preact';

const FourStylesSection: FunctionComponent = () => (
  <section className="mb-20">
    <H2 className="text-4xl mb-10">
      The Four Main <span className="text-blue-600">Communication Styles</span>
    </H2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {(Object.keys(styleMeta) as StyleKey[]).map((key: StyleKey) => {
        const { icon: Icon, name, bg, color, desc } = styleMeta[key];
        return (
          <Card key={name}>
            <div className="text-center mb-4">
              <div className={`${bg} inline-flex p-4 rounded-full`}>
                <Icon className={color + ' text-2xl'} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{name}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </Card>
        );
      })}
    </div>
  </section>
);

export default FourStylesSection;
