import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
type propsType = {
  titleIcon: string;
  routeName: string;
};
export default function Navbar({titleIcon, routeName}: propsType) {
  const isDarkMode = useColorScheme() === 'dark';

  // Apply colors based on the theme
  const textColor = isDarkMode
    ? '#fff'
    : routeName === 'Home'
    ? '#25D366'
    : '#000';
  const iconTintColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={styles.container}>
      <View>
        {/* Apply text color directly */}
        <Text style={[styles.text, {color: textColor}]}>{titleIcon}</Text>
      </View>
      <View style={styles.iconContainer}>
        <View>
          {/* Apply tintColor directly to the Image component */}
          <Image
            source={require('../Assets/icons/camera.png')}
            style={[styles.icon, {tintColor: iconTintColor}]}
          />
        </View>
        {routeName !== 'Communities' && (
          <View>
            <Image
              source={require('../Assets/icons/search.png')}
              style={[styles.icon, {tintColor: iconTintColor}]}
            />
          </View>
        )}
        <View>
          <Image
            source={require('../Assets/icons/dots.png')}
            style={[styles.icon, {tintColor: iconTintColor, marginRight: 0}]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 25,
    borderBottomColor: '#454545',
    borderBottomWidth: 0.5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
