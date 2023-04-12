import React from 'react';
import {styles} from '../styles/home';
import {NavigationProp} from '@react-navigation/native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

interface HomeProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const optionsNavigation = [
  {
    id: 1,
    title: 'Home',
    imageUrl: require('../../assets/images/home.png'),
    route: 'HOME',
  },
  {
    id: 2,
    title: 'Ideas',
    imageUrl: require('../../assets/images/ideas.png'),
    route: 'IDEAS',
  },
  {
    id: 3,
    title: 'Notes',
    imageUrl: require('../../assets/images/notes.png'),
    route: 'NOTES',
  },
  {
    id: 4,
    title: 'Chat',
    imageUrl: require('../../assets/images/chat.png'),
    route: 'CHAT',
  },
  {
    id: 5,
    title: 'Surf',
    imageUrl: require('../../assets/images/surf.png'),
    route: 'SURF',
  },
];

const Home = ({navigation}: HomeProps) => {
  function handleNavigate(route: string) {
    navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={optionsNavigation}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleNavigate(item.route)}>
            <Image
              source={item.imageUrl}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Home page, to navigate to other pages, just click on the cards
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/home.png')}
          resizeMode="contain"
          style={styles.imagePage}
        />
      </View>
    </View>
  );
};

export default Home;
