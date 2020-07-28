import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles';

import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div className="App">
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Galera, essa nova temporada esta incrível! Só tem anime bom lançando .... Se bem que ... tem uns que da até medo de tão ruim, mas deixa pra la!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo={false}
        category={dadosIniciais.categorias[1]}
      />

      <Footer />
      
      <GlobalStyles />
    </div>
  );
}

export default App;
