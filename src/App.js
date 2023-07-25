import { useFonts } from 'expo-font';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider} from 'react-redux';
import { store } from './redux/store';
// import { persistor } from './redux/store';
import React from "react";
import Main from "./components/Main";
import 'react-native-gesture-handler';

function App() {

  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('../assets/fonts/Roboto-Medium.ttf'),
    'RobotoRegular': require('../assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
<Provider store={store}>
  {/* <PersistGate persistor={persistor}> */}
    <Main />
{/* </PersistGate> */}
</Provider>      
  );
};

export default App;