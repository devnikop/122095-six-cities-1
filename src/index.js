import React from "react";
import ReactDOM from "react-dom";
import leaflet from 'leaflet';

import {App} from './components/app/app.jsx';
import {offers} from './mocks/offers';

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
        leaflet={leaflet}
      />,
      document.querySelector(`#root`)
  );
};

init();
