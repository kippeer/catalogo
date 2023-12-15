import React from 'react';
import Head from 'next/head';
import ListaProduto from '../components/ListaProduto';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Catalogo Óleos Essenciais dōTERRA</title>
        <link rel="stylesheet" href="/style/style.css" />
      </Head>

      <header>
        <h1>Catálogo Virtual dōTERRA &copy;</h1>
      </header>

      <main>
        <ListaProduto />
      </main>

      <footer>
        
        <p> Desenvolvido por Fabio Tessaro  <a href="https://fabiotessaro.vercel.app/" target="_blank">clique aqui para visitar o portfolio </a> </p>
      </footer>

    </div>
  );
};

export default IndexPage;
