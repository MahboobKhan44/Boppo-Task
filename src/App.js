import React from 'react';
import { Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//MainStacks
import MainStack from './MainStack';


const App = () => {

  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  )
}

export default App;