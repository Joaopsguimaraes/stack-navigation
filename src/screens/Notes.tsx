import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/pages';

interface NotesProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const Notes = ({navigation}: NotesProps) => {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Hello I'm notes page</Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/notes.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Notes;
