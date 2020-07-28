import React from 'react';

import { Container } from './styles';

interface Props {
  videoTitle?: string,
  videoURL?: string,
  categoryColor ?: string
}

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

const VideoCard: React.FC<Props> = ({ 
  videoTitle, videoURL, categoryColor 
}) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  
  return (
    <Container 
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default VideoCard;
