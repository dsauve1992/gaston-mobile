import {AppRegistry} from 'react-native';
import App from './src/global/ui/components/App/App';
import {name as appName} from './app.json';
import initialiseFirebase from './etc/firebase/firebase.config';

initialiseFirebase();

AppRegistry.registerComponent(appName, () => App);
