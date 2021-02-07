import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import NavigationPublic from './src/navigations/NavigationPublic';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationPublic />
    </Provider>
  );
};

export default App;
