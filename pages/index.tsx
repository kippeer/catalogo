import React from 'react';
import Head from 'next/head';
import ListaProduto from '../components/ListaProduto';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Minha Loja Virtual</title>
        <link rel="stylesheet" href="/style/style.css" />
      </Head>

      <header>
        <h1>Catálogo Virtual dōTERRA &copy;</h1>
      </header>

      <main>
        <ListaProduto />
      </main>

      <footer>
        <p>Todos os direitos reservados, Bruno Taveira &copy;2023</p>
        <p> Desenvolvido por <a href="https://fabiotessaro.vercel.app/" target="_blank">Fabio Tessaro</a> </p>
      </footer>

    </div>
  );
};

export default IndexPage;
