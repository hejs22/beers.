import { ComponentProps, ReactElement } from 'react';
import Beer from 'shared/interfaces/Beer.interface';
import BeerTile from 'components/beer/beer-tile/BeerTile';
import './BeersList.scss';
import ErrorMessage from 'components/error-message/ErrorMessage';
import { ErrorDataEmpty } from 'shared/constants/ErrorConstants';
import { DEFAULT_PAGE_SIZE } from 'shared/config/ApiConfig';
import Builder, { BuilderStatus } from 'shared/utils/Builder';

interface BeersContainerProps extends ComponentProps<'div'> {
  beers?: Beer[];
}

const BeersList = ({ beers }: BeersContainerProps) => {
  const buildSkeletons = (numberOfSkeletons: number) => {
    const skeletons: ReactElement[] = [];

    for (let count = 0; count < numberOfSkeletons; count++) {
      skeletons.push(<div key={`Skeleton id:${count}`} className="skeleton" />);
    }

    return skeletons;
  };

  const createBuilderStatus = (beersData: Beer[] | undefined): BuilderStatus => {
    if (!beersData) {
      return 'loading';
    } else if (beersData.length) {
      return 'success';
    } else {
      return 'error';
    }
  };

  const buildBeerTiles = (beersData: Beer[]) => {
    return beersData.map((beer) => <BeerTile key={beer.id} beer={beer} />);
  };

  const withContainer = (items: ReactElement[]) => {
    return <section className="beers-list-container">{items}</section>;
  };

  return Builder.createResult(createBuilderStatus(beers))
    .onLoading(withContainer(buildSkeletons(DEFAULT_PAGE_SIZE)))
    .onSuccess(<>{beers && withContainer(buildBeerTiles(beers))}</>)
    .onError(
      <ErrorMessage
        header={ErrorDataEmpty.header}
        caption={ErrorDataEmpty.caption}
        imageSrc={ErrorDataEmpty.imageSrc}
      />
    )
    .build();
};

export default BeersList;
