import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA_2KHumoYjolV92GB8QtL4XRztYoob5N4',
  authDomain: 'gaston-eff01.firebaseapp.com',
  databaseURL: 'https://gaston-eff01.firebaseio.com',
  projectId: 'gaston-eff01',
  storageBucket: 'gaston-eff01.appspot.com',
  messagingSenderId: '15707288780',
  appId: '1:15707288780:web:a1d70cc97278965187fe69',
  measurementId: 'G-V5RTM0TYM8',
};
// Initialize Firebase
export default function initialiseFirebase() {
  app.initializeApp(firebaseConfig);
}
