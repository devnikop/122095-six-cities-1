import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Map from './map';
import {offersArrayMock, leafletMock} from '../../mocks/mocksForTests';

it(`Map correctly renders`, () => {
  const leaflet = leafletMock;
  const offers = offersArrayMock;

  const tree = renderer
    .create(<Map
      activeOfferId={32}
      leaflet={leaflet}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

