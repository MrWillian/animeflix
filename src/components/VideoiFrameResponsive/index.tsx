import React from 'react';

import { Container, ResponsiveIframe } from './styles';

interface Props {
  youtubeID?: string;
}

const VideoiFrameResponsive: React.FC<Props> = ({ 
  youtubeID 
}) => {
  return (
    <Container>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
}

export default VideoiFrameResponsive;
