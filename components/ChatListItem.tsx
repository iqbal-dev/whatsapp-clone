import {formatDate, isSameDay} from 'date-fns';
import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
type propsType = {
  userName: string;
  lastMessage: string;
  timeStamp: string;
};
export default function ChatListItem({
  userName,
  lastMessage,
  timeStamp,
}: propsType) {
  const isDarkMode = useColorScheme() === 'dark';
  const colorStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/d/1KNzDnaAXygupwRJpaxM4s7nfelg9NXxj',
            }}
            style={styles.imageStyle}
          />
          <View style={styles.nameTextTimeContainer}>
            <View style={styles.nameAndTimeContainer}>
              <Text style={[colorStyle, styles.nameText]}>{userName}</Text>
              <Text style={[colorStyle, styles.timeText]}>
                {timeStamp
                  ? isSameDay(timeStamp, new Date())
                    ? formatDate(timeStamp, 'p')
                    : 'YesterDay'
                  : ''}
              </Text>
            </View>
            <Text style={[colorStyle, styles.chatText]}>{lastMessage}</Text>
          </View>
        </View>

        <View />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    marginRight: 15,
  },
  nameTextTimeContainer: {
    flex: 1,
  },
  nameAndTimeContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
  },
  chatText: {
    fontSize: 14,
    flexWrap: 'wrap',
  },
  timeText: {
    fontSize: 12,
    alignItems: 'baseline',
  },
});
