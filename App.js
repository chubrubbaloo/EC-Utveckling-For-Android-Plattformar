import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { getTableInfo, initDB } from './.expo-shared/database/DbUtils';
import Home from './screens/Home';
import SelectedMovie from './screens/SelectedMovie';
import { StatusBar } from 'react-native';

const NativeStack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    initDB()
      .then(res => {
        console.log("Result from init ", res)
        return getTableInfo()
      })
      .then(res => console.log("pragma table_info ", res))
      .catch(err => console.log(err))
  }, [])

  return (
    <NavigationContainer>
          <StatusBar
    barStyle="light-content"
/>
      <NativeStack.Navigator screenOptions={{ headerShown: false }}>
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

