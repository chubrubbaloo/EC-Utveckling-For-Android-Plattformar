import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native-web';
import Home from './screens/Home';
import SelectedMovie from './screens/SelectedMovie';

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator screenOptions={{headerShown: false}}>
        <NativeStack.Screen
          name='Home'
          component={Home}
        />
        <NativeStack.Screen
          name='SelectedMovie'
          component={SelectedMovie}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

