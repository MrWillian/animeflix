import React from 'react';
import VideoCard from '../VideoCard';

import { 
  Container, 
  VideoCardList, 
  Title, 
  ExtraLink 
} from './styles';

interface Props {
  ignoreFirstVideo?: boolean,
  category?: any
}

const Carousel: React.FC<Props> = ({
  ignoreFirstVideo,
  category
}) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  return (
    <Container>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </Container>
  );
}

export default Carousel;
