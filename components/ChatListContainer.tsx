import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatListItem from './ChatListItem';
import FloatingButton from './FloatingButton';
import Navbar from './Navbar';

const data = {
  chat_id: 'unique_chat_id',
  participants: [
    {
      user_id: 'user1_id',
      name: 'Wife',
      last_message: {
        message_id: 'unique_message_id_2',
        sender_id: 'user2_id',
        content: 'I Love you!',
        timestamp: '2024-10-04T10:32:00Z',
        status: 'read',
      },
    },
    {
      user_id: 'user2_id',
      name: 'Wif1',
      last_message: {
        message_id: 'unique_message_id_2',
        sender_id: 'user2_id',
        content: 'Love you jaan!',
        timestamp: '2024-10-05T10:32:00Z',
        status: 'read',
      },
    },
    {
      user_id: 'user3_id',
      name: 'Wif2',
      last_message: {
        message_id: 'unique_message_id_2',
        sender_id: 'user2_id',
        content: 'ami tumake valobasi!',
        timestamp: '2024-10-05T10:32:00Z',
        status: 'read',
      },
    },
    {
      user_id: 'user4_id',
      name: 'Wif4',
      last_message: {
        message_id: 'unique_message_id_2',
        sender_id: 'user2_id',
        content: 'Love you baby!',
        timestamp: '2024-10-04T10:32:00Z',
        status: 'read',
      },
    },
  ],
};

export default function ChatListContainer() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#10161d' : '#fff',
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/* Navbar with Fixed Position */}
      <View style={[styles.navbar, backgroundStyle]}>
        <Navbar titleIcon="WhatsApp" routeName="Home" />
      </View>

      {/* Scrollable Chat List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.participants.map(item => (
          <ChatListItem
            userName={item.name}
            lastMessage={item.last_message.content}
            timeStamp={item.last_message.timestamp}
            key={item.user_id}
          />
        ))}
        {data.participants.map(item => (
          <ChatListItem
            userName={item.name}
            lastMessage={item.last_message.content}
            timeStamp={item.last_message.timestamp}
            key={item.user_id}
          />
        ))}
        {data.participants.map(item => (
          <ChatListItem
            userName={item.name}
            lastMessage={item.last_message.content}
            timeStamp={item.last_message.timestamp}
            key={item.user_id}
          />
        ))}
        {data.participants.map(item => (
          <ChatListItem
            userName={item.name}
            lastMessage={item.last_message.content}
            timeStamp={item.last_message.timestamp}
            key={item.user_id}
          />
        ))}
        {data.participants.map(item => (
          <ChatListItem
            userName={item.name}
            lastMessage={item.last_message.content}
            timeStamp={item.last_message.timestamp}
            key={item.user_id}
          />
        ))}
      </ScrollView>

      {/* Floating Button with Fixed Position */}
      <View style={styles.floatingButton}>
        <FloatingButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // Ensure it's on top of other elements
    backgroundColor: '#fff', // Adjust based on your design
  },
  scrollContainer: {
    paddingTop: 70, // Ensure content is below the navbar
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});
