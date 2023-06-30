import './BeerIngredientsList.scss';
import { ComponentProps, ReactElement } from 'react';
import BeerIngredients from 'shared/interfaces/BeerIngredients.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAlt, faBacteria, faBeer, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Malt from '../../../shared/interfaces/Malt.interface';
import Hop from '../../../shared/interfaces/Hop.interface';

interface BeerIngredientsListProps extends ComponentProps<'div'> {
  ingredients: BeerIngredients;
}

const BeerIngredientsList = ({ ingredients }: BeerIngredientsListProps) => {
  const buildHopsList = (hops: Hop[]) => {
    return hops.map((hop) => (
      <div className="ingredient" key={`${hop.name}:${hop.amount.value}`}>
        {`${hop.name}, ${hop.amount.value} ${hop.amount.unit}, ${hop.attribute}`}
      </div>
    ));
  };

  const buildMaltsList = (malt: Malt[]) => {
    return malt.map((malt) => (
      <div className="ingredient" key={`${malt.name}:${malt.amount.value}`}>
        {`${malt.name}, ${malt.amount.value} ${malt.amount.unit}`}
      </div>
    ));
  };

  const buildIngredientsRow = (
    icon: IconDefinition,
    label: string,
    content: ReactElement | ReactElement[]
  ) => {
    return (
      <section className="ingredients-row">
        <FontAwesomeIcon icon={icon} />
        <b>{label}:</b>
        {content}
      </section>
    );
  };

  return (
    <section className="beer-ingredients-list-container">
      {!!ingredients.hops.length &&
        buildIngredientsRow(faBeer, 'Hops', buildHopsList(ingredients.hops))}
      {!!ingredients.malt.length &&
        buildIngredientsRow(faWheatAlt, 'Malt', buildMaltsList(ingredients.malt))}
      {!!ingredients.yeast &&
        buildIngredientsRow(
          faBacteria,
          'Yeast',
          <div className="ingredient">{ingredients.yeast}</div>
        )}
    </section>
  );
};

export default BeerIngredientsList;
