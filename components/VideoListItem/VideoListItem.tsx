import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { Video } from '../../types';
type VideoListItemProps = {
  video: Video;
};
const VideoListItem = ({ video }: VideoListItemProps) => {
  const { title, user, thumbnail, views, createdAt, duration } = video;
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;

  let viewsString = views.toString();
  if (views > 1000000) {
    viewsString = (views / 1000000).toFixed(1) + 'M';
  } else if (views > 1000) {
    viewsString = (views / 1000).toFixed() + 'K';
  }

  return (
    <View style={styles.videoCard}>
      <ImageBackground
        source={{
          uri: thumbnail,
        }}
        style={styles.thumbnail}
      >
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.titleRow}>
        <Image
          resizeMode="cover"
          style={styles.avatar}
          source={{
            uri: user.image,
          }}
        />
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {user.name} {viewsString} {createdAt}
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={16} color="white" />
      </View>
    </View>
  );
};

export default VideoListItem;
