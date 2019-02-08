/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import Articles from './src/views/Articles';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Articles', () => Articles);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Articles'
      }
    }
  })
});
