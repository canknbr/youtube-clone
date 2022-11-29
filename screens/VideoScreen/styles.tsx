import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  videoContainer: {
    backgroundColor: '#141414',
  },

  videoPlayer: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  videoInfoContainer: {
    margin: 10,
  },
  tags: {
    color: '#0094e3',
    fontSize: 14,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
  },
  actionListContainer: {
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  actionListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 60,
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  userInfoContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  },
  subscribe: {
    color: 'red',
    fontSize: 16,
    marginLeft: 'auto',
  },
  commentContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  comment: {
    backgroundColor: '#141414',
    marginLeft: 10,
    borderRadius: 10,
    padding: 5,
    flex: 1,
  },
  commentTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  commentText: {
    color: 'grey',
    fontSize: 14,
    marginVertical: 5,
  },
  commentIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  commentIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  commentIconText: {
    color: 'grey',
    fontSize: 14,
  },
  icon: {
    marginHorizontal: 5,
  },
  repliesText: {
    color: '#0094e3',
    fontSize: 14,
    marginVertical: 5,
  },
});

export default styles;
