import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Calculator from '../pages/calculator.component'
import History from '../pages/history.component'
import COLORS from '../assets/colors/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "calculator";

            if (route.name === 'calculator') {
              iconName = "calculator"
            } else if (route.name === 'history') {
              iconName = "history"
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.yellow,
          inactiveTintColor: COLORS.offWhite,
          showLabel: false,
          style: {
            backgroundColor: COLORS.mainBlack
          }
        }}
        
      >
        <Tab.Screen name="calculator" component={Calculator} />
        <Tab.Screen name="history" component={History} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}