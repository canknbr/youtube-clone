import { View, Text, Image } from 'react-native';
import React from 'react';
type VideoCommentProps = {
  comment: {
    id: string;
    createdAt: string;
    comment: string;
    likes: number;
    dislikes: number;
    replies: number;
    user: {
      name: string;
      image: string;
    };
  };
};
const VideoComment = ({ comment }: VideoCommentProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <Image
        source={{ uri: comment.user.image }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
      />
      <Text
        style={{
          color: 'white',
          marginLeft: 10,
        }}
      >
        {comment.comment}
      </Text>
    </View>
  );
};

export default VideoComment;
