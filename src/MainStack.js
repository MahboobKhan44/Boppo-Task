import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_PAGE, NEWS_DETAIL_SCREEN } from './global/ScreenNames/ScreenNames';
import HomePage from './screen/HomePage/HomePage';
import NewsDetailScreen from './screen/NewsDetail/NewsDetailScreen';

const Stack = createStackNavigator();



const MainStack = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME_PAGE}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={HOME_PAGE}
          component={HomePage}
        />
        <Stack.Screen
          name={NEWS_DETAIL_SCREEN}
          component={NewsDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default MainStack;