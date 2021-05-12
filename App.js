import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PageNavigation } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <PageNavigation />
    </NavigationContainer>
  );
}