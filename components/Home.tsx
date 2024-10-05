/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, useColorScheme, View} from 'react-native';
import Call from './Call';
import ChatListContainer from './ChatListContainer';
import Community from './Community';
import Updates from './Updates';

export default function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const bg = isDarkMode ? '#10161d' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconSource;
            switch (route.name) {
              case 'Home':
                iconSource = require('../Assets/icons/comment.png');
                break;
              case 'Update':
                iconSource = require('../Assets/icons/system-update.png');
                break;
              case 'Communities':
                iconSource = require('../Assets/icons/people.png');
                break;
              case 'Call':
                iconSource = require('../Assets/icons/telephone.png');
                break;

              default:
                iconSource = require('../Assets/icons/comment.png');
                break;
            }
            // Return the Image component with the chosen icon and styles
            return (
              <View
                style={{
                  backgroundColor: focused ? '#c6f8dcaa' : 'transparent',
                  paddingHorizontal: 20,
                  paddingVertical: 3,
                  borderRadius: 100,
                }}>
                <Image
                  source={iconSource}
                  style={{
                    height: size,
                    width: size,
                    tintColor: color, // Apply tintColor to support dark/light themes
                  }}
                />
              </View>
            );
          },
          tabBarActiveTintColor: textColor,
          tabBarInactiveTintColor: textColor,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 10,
            height: 70,
            backgroundColor: bg,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={ChatListContainer}
          options={{
            headerShown: false,
            tabBarBadge: 10,
            tabBarBadgeStyle: {
              backgroundColor: '#25d366',
              color: '#fff',
              height: 20,
              minWidth: 20,
              fontSize: 10,
              borderRadius: 10,
              position: 'absolute',
              top: -5,
              right: -5,
            },
          }}
        />
        <Tab.Screen
          name="Update"
          component={Updates}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Communities"
          component={Community}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Call"
          component={Call}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
}
