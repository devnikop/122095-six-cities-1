// import React from 'react';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import {WelcomeScreen} from './welcome-screen.jsx';

// Enzyme.configure({adapter: new Adapter()});

// it(`Welcome-screen's button work correctly`, () => {
//   const clickHandler = jest.fn();
//   const welcomeScreen = shallow(<WelcomeScreen
//     placeCardNames={[``, ``]}
//     onCardNameClick={clickHandler}
//   />);

//   const cardNameElements = welcomeScreen.find(`.place-card__name`).at(0);
//   cardNameElements.simulate(`click`);

//   expect(clickHandler).toHaveBeenCalledTimes(1);
// });
