import React from 'react';
import {styles} from '../styles/pages';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';

interface ChatProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const Chat = ({navigation}: ChatProps) => {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Hello I'm chat page</Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/chat.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Chat;
