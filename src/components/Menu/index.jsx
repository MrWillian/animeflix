import React from 'react';

import Button from '../Button';

import { Container, LogoImage } from './styles';
import Logo from '../../assets/images/Logo.png';

function Menu() {
  return (
    <Container>
      <a href="/">
        <LogoImage src={Logo} alt="animeflix-logo" />
      </a>

      <Button />

    </Container>
  );
}

export default Menu;
