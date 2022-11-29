import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json';
import VideoListItem from '../../components/VideoListItem';
import styles from './styles';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const comments = {
  id: '1',
  createdAt: '5 months ago',
  comment: 'Cool video!',
  user: {
    name: 'Graham Stephan',
    image:
      'https://images.unsplash.com/photo-1529797228130-fe918ce6d915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  likes: 123,
  dislikes: 2,
  replies: 6,
};
const VideoScreen = () => {
  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + 'M';
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed() + 'K';
  }
  return (
    <SafeAreaView style={styles.videoContainer}>
      <Image source={{ uri: video.thumbnail }} style={styles.videoPlayer} />
      <View style={styles.videoInfoContainer}>
        <Text style={styles.tags}>{video.tags}</Text>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subtitle}>
          {video.user.name} {viewsString} {video.createdAt}
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.actionListContainer}
      >
        <View style={styles.actionListItem}>
          <AntDesign name="like1" size={30} color="lightgrey" />
          <Text style={styles.actionText}>{video.likes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <AntDesign name="dislike2" size={30} color="lightgrey" />
          <Text style={styles.actionText}>{video.dislikes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <AntDesign name="export" size={30} color="white" />
          <Text style={styles.actionText}>{video.dislikes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <AntDesign name="download" size={30} color="lightgrey" />
          <Text style={styles.actionText}>{video.dislikes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <MaterialCommunityIcons name="share" size={30} color="lightgrey" />
          <Text style={styles.actionText}>{video.dislikes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <MaterialCommunityIcons name="share" size={30} color="lightgrey" />
          <Text style={styles.actionText}>{video.dislikes}</Text>
        </View>
        <View style={styles.actionListItem}>
          <MaterialCommunityIcons name="share" size={30} color="lightgrey" />
          <Text style={styles.actionText}>{video.dislikes}</Text>
        </View>
      </ScrollView>
      <View style={styles.userInfoContainer}>
        <Image style={styles.avatar} source={{ uri: video.user.image }} />
        <View>
          <Text style={styles.description}>{video.user.name}</Text>
          <Text style={styles.description}>
            {video.user.subscribers} subscribers
          </Text>
        </View>
        <Text style={styles.subscribe}>SUBSCRIBE</Text>
      </View>
      <View style={styles.commentContainer}>
        <Image style={styles.avatar} source={{ uri: comments.user.image }} />
        <View style={styles.comment}>
          <Text style={styles.commentTitle}>{comments.user.name}</Text>
          <Text numberOfLines={2} style={styles.commentText}>
            {comments.comment}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const VideoScreenWithRecommendations = () => {
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={VideoScreen}
      />
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendations;
