if(__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }

/**
 * @format
 */

import {AppRegistry, I18nManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

    I18nManager.forceRTL(true);

AppRegistry.registerComponent(appName, () => App);
