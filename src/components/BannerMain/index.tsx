import React from 'react';
import VideoIframeResponsive from '../VideoiFrameResponsive';
import { 
  BannerMainContainer, 
  ContentAreaContainer, 
  WatchButton,
  Item, 
  Title,
  Description
} from './styles';

interface Props {
  videoTitle?: string,
  videoDescription?: string,
  url?: string,
}

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

const BannerMain: React.FC<Props> = ({
  videoTitle,
  videoDescription,
  url,
}) => {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <Item>
          <Title>
            {videoTitle}
          </Title>

          <Description>
            {videoDescription}
          </Description>
        </Item>

        <Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

export default BannerMain;
