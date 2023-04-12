import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/pages';

interface SurfProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const Surf = ({navigation}: SurfProps) => {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Hello I'm surf page</Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/surf.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Surf;
