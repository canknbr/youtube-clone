import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  videoCard: {
    backgroundColor: '#141414',
    flex: 1,
    padding: 5,
    marginVertical: 5,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    backgroundColor: '#00000099',
    height: 25,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
  },

  titleRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#141414',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  middleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
  },
});
