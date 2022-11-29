import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import { Video } from 'expo-av';
type VideoPlayerProps = {
  videoURI: string;
  thumbnailURI: string;
};
const VideoPlayer = ({ videoURI, thumbnailURI }: VideoPlayerProps) => {
  const video = useRef(null);
  // const onRefAssigned = (ref: any) => {
  //   // video.current = ref;
  //   const source = {
  //     uri: videoURI,
  //   };
  //   const initialStatus = {}
  //   const playbackObject = ref;
  //   playbackObject.loadAsync();
  // };
  return (
    <View>
      <Video
        ref={video}
        source={{ uri: videoURI }}
        style={{ width: '100%', aspectRatio: 16 / 9 }}
        // posterSource={{ uri: thumbnailURI }}
        // posterStyle={{ resizeMode: 'cover' }}
        // usePoster={false}
        useNativeControls={true}
        // onPlaybackStatusUpdate={status => console.log(status)}
      />
    </View>
  );
};

export default VideoPlayer;
