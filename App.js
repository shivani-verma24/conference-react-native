/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import type { Node } from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/container/Home';
import Conference from './src/container/Conference';
import Session from './src/container/Session';
import Speaker from './src/container/Speaker';
import Story from './src/container/Story';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Camera from './src/components/Camera';

// const StackNavigator = createNativeStackNavigator();
// similar to router for react-native

// const TabNavigator = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle= {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    
      <Camera/>
  
    // <NavigationContainer>
    //   <TabNavigator.Navigator 
    //   screenOptions={({route}) => ({
        
    //     tabBarIcon: ({focused, color, size}) => {
    //       let iconName;
    //       if (route.name == 'Home'){
    //         iconName= focused ? 'ios-information-circle' : 'ios-information-circle-outline';
    //       }
    //       else if(route.name == 'Session'){
    //         iconName = focused ? 'ios-list-box' : 'ios-list';
    //       }
    //       return <Ionicons name= {iconName} size={size} color={color}/>
    //     },
    //     tabBarActiveTintColor: 'tomato',
    //     tabBarInactiveTintColor: 'gray'
    //   })}
    //   >

    //     <TabNavigator.Screen name='Home' component={Home} />
    //     <TabNavigator.Screen name='Conference' component={Conference} options={{ title: 'Conference' }} />
    //     <TabNavigator.Screen name='Session' component={Session} options={{ title: 'Session' }} />
    //     <TabNavigator.Screen name='Speaker' component={Speaker} options={{ title: 'Speaker' }} />
    //     <TabNavigator.Screen name='Story' component={Story} options={{ title: 'Story' }} />
    //   </TabNavigator.Navigator>
    // </NavigationContainer>
    // // <NavigationContainer>
    // //   <StackNavigator.Navigator initialRouteName='Home'>
    // //   <StackNavigator.Screen name='Home' component={Home} options={{title: 'Home'}}/>
    // //   <StackNavigator.Screen name='Conference' component={Conference} options={{title: 'Conference'}}/>
    // //   <StackNavigator.Screen name='Session' component={Session} options={{title: 'Session'}}/>
    // //   <StackNavigator.Screen name='Speaker' component={Speaker} options={{title: 'Speaker'}}/>
    // //   <StackNavigator.Screen name='Story' component={Story} options={{title: 'Story'}}/>
    // //   </StackNavigator.Navigator>
    // // </NavigationContainer>
  )
};

export default App;
