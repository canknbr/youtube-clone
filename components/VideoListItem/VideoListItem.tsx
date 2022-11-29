import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Video } from '../../types';
type VideoListItemProps = {
  video: Video;
};
const VideoListItem = ({ video }: VideoListItemProps) => {
  const navigation = useNavigation();
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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('VideoScreen', { id: video.id })}
    >
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
    </TouchableOpacity>
  );
};

export default VideoListItem;
