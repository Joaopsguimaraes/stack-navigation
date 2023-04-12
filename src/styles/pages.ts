import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#7bb7ef',
    flex: 1,
  },
  titlePage: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 50,
  },
  backButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 200,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  image: {
    width: 300,
    height: 250,
  },
});
