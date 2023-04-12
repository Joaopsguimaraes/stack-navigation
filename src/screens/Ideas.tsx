import React from 'react';
import {styles} from '../styles/pages';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';

interface IdeasProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const Ideas = ({navigation}: IdeasProps) => {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Hello I'm idea page</Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/ideas.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Ideas;
