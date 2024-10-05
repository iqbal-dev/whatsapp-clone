import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const FloatingButton = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const iconColor = {
    tintColor: isDarkMode ? '#000' : '#fff',
  };
  return (
    <View style={styles.container}>
      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Image
          source={require('../Assets/icons/add-folder.png')}
          style={[{height: 25, width: 25}, iconColor]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#25d366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    elevation: 5,
  },
});

export default FloatingButton;
