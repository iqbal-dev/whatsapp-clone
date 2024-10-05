import React from 'react';
import {ScrollView, StatusBar, useColorScheme, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from './Navbar';

export default function Updates() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#10161d' : '#fff',
  };
  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <ScrollView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View>
          <Navbar titleIcon="Updates" routeName="Update" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
