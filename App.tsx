import React from 'react';

// Import Main Component
import Main from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
