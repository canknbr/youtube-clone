import { View, FlatList } from 'react-native';
import React from 'react';
import videos from '../../assets/data/videos.json';
import VideoListItem from '../../components/VideoListItem';
import styles from './styles';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </View>
  );
};

export default HomeScreen;
