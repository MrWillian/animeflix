import React from 'react';

import { Container } from './styles';

const Button: React.FC = () => {
  return (
    <Container as="a" className="ButtonLink" href="/">
      Novo vídeo
    </Container>
  );
}

export default Button;
