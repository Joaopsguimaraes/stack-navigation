import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#7bb7ef',
  },
  list: {
    marginVertical: 50,
    paddingLeft: 20,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  card: {
    width: 180,
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#444',
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  titleView: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
  },
  title: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  imagePage: {
    width: 200,
    height: 200,
  },
});
