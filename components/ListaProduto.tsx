import React from 'react';
import Produto from './Produto';

const ListaProduto: React.FC = () => {
    const produtos = [
        {
            id: 1,
            imgSrc: "../img/op1.jpeg",
            alt: "Opção 1",
            title: "Difusor Pebble, One!",
            description: "Controle sua ansiedade e durma melhor.",
            price: "R$614",
            price2:"R$686"
        },
        {
            id: 2,
            imgSrc: "../img/op2.jpeg",
            alt: "Opção 2",
            title: "Difusor Pebble, Two!",
            description: "Foco e concentração, o melhor para o trabalho!",
            price: "R$630",
            price2:"R$707"
        },
        {
            id: 3,
            imgSrc: "../img/op3.jpeg",
            alt: "Opção 3",
            title: "Difusor Pebble, Three!",
            description: "Auxílio na queima de gordura.",
            price: "R$626",
            price2:"R$702"
        },
        {
            id: 4,
            imgSrc: "../img/op4.jpeg",
            alt: "Opção 4",
            title: "Difusor Pebble, Four!",
            description: "Fortalecimento do sistema imunológico!",
            price: "R$607",
            price2:"R$676"
        },
        {
            id: 5,
            imgSrc: "../img/op5.jpeg",
            alt: "Opção 5",
            title: "Difusor Pebble, Five!",
            description: "Consultor do Bem-Estar.",
            price: "R$1.054,00",
            price2:"R$1.406,00"
        },
        {
            id: 6,
            imgSrc: "../img/aromat.jpeg",
            alt: "Aroma touch",
            title: "Aromatouch!",
            description: "Um toque refinado de aroma em sua casa.",
            price: "R$980,00",
            price2:"R$1.418,00"
        },
        {
            id: 7,
            imgSrc: "../img/balance.jpeg",
            alt: "Balance",
            title: "Balance",
            description: "Redução de estresse e ansiedade, o melhor para a sua meditação.",
            price: "R$156"
        },
        {
            id: 8,
            imgSrc: "../img/bergamota.jpeg",
            alt: "Bergamota",
            title: "Bergamota",
            description: "Aroma cítrico e levemente floral, sensação de estar no campo.",
            price: "R$239"
        },
        {
            id: 9,
            imgSrc: "../img/breath.jpeg",
            alt: "Breathe",
            title: "Breathe",
            description: "O melhor suporte ao seu sistema respiratório, desbloqueie a leveza do ar.",
            price: "R$183"
        },
        {
            id: 10,
            imgSrc: "../img/capimLimao.jpeg",
            alt: "Capim-limão",
            title: "Capim-limão",
            description: "Aroma cítrico, direto da Índia, embarque nessa viagem cultural.",
            price: "R$85"
        },
        {
            id: 11,
            imgSrc: "../img/cedro.jpeg",
            alt: "Cedro",
            title: "Cedro",
            description: "Direto dos Estados Unidos, aroma balsâmico e amadeirado.",
            price: "R$109"
        },
        {
            id: 12,
            imgSrc: "../img/copaiba.jpeg",
            alt: "Copaiba",
            title: "Copaiba",
            description: "Poderoso antioxidante, promove proteção à sua pele, sistema imunológico e sistema nervoso.",
            price: "R$287"
        },
        {
            id: 13,
            imgSrc: "../img/deepblue.jpeg",
            alt: "Deepblue",
            title: "Deep Blue",
            description: "Mix essencial para o desconforto muscular, nas costas e articulações.",
            price: "R$252"
        },
        {
            id: 14,
            imgSrc: "../img/difusorLimao.jpeg",
            alt: "Difusor PebbleL",
            title: "Difusor Pebble",
            description: "Adquira o Difusor e ganhe Óleos Limão-siciliano e Hortelã.",
            price: "R$399"
        },
        {
            id: 15,
            imgSrc: "../img/essenLar.jpeg",
            alt: "kit Essência Lar",
            title: "Kit Essêncial para o Lar",
            description: "Essências selecionadas para a melhora do seu ambiente.",
            price: "R$1.640,00",
            price2:"R$3.261,00"
        },
        {
            id: 16,
            imgSrc: "../img/hortela.jpeg",
            alt: "Hortelã-pimenta",
            title: "Hortelã-Pimenta",
            description: "Aroma refrescante e revigorante, para um hálito mais saudável",
            price: "R$177"
        },
        {
            id: 17,
            imgSrc: "../img/lavanda.jpeg",
            alt: "Lavanda",
            title: "Lavanda",
            description: "Aroma calmante e relaxante para uma noite tranquila.",
            price: "R$197"
        },
        {
            id: 18,
            imgSrc: "../img/limao.jpeg",
            alt: "Limão-siciliano",
            title: "Limão-siciliano",
            description: "Aroma cítrico que estimula a vitalidade, auxilia na melhora de alergias sazonais e retenção de líquido.",
            price: "R$92"
        },
        {
            id: 19,
            imgSrc: "../img/livingBr.jpeg",
            alt: "Living Brasil",
            title: "Living Brasil",
            description: "Aroma inspirado na natureza brasileira.",
            price: "R$755,00",
            price2:"R$1.221,00"
        },
        {
            id: 20,
            imgSrc: "../img/melaleuca.jpeg",
            alt: "Melaleuca",
            title: "Melaleuca",
            description: "Purificação e limpeza natural.",
            price: "R$163"
        },
        {
            id: 21,
            imgSrc: "../img/olibano.jpeg",
            alt: "Olíbano",
            title: "Olíbano",
            description: "Um dos presentes de Jesus o rei dos óleos, ansiedade, rugas e estrias.",
            price: "R$519"
        },
        {
            id: 22,
            imgSrc: "../img/onGuard.jpeg",
            alt: "On Guard",
            title: "On Guard",
            description: "Aroma de proteção e fortalecimento do sistema imunológico.",
            price: "R$259"
        },
        {
            id: 23,
            imgSrc: "../img/soluNat.jpeg",
            alt: "Solução Natural",
            title: "Solução Natural",
            description: "Aroma natural para o equilíbrio emocional.",
            price: "R$2.999,00",
            price2:"R$3.987,00"
        },
        {
            id: 24,
            imgSrc: "../img/tange.jpeg",
            alt: "Tangerina",
            title: "Tangerina",
            description: "Aroma cítrico e energizante.",
            price: "R$124"
        },
        {
            id: 25,
            imgSrc: "../img/toranja.jpeg",
            alt: "Toranja",
            title: "Toranja",
            description: "Aroma cítrico que estimula a criatividade.",
            price: "R$155"
        },
        {
            id: 26,
            imgSrc: "../img/vetiver.jpeg",
            alt: "Vetiver",
            title: "Vetiver",
            description: "Aroma terroso e tranquilizante.",
            price: "R$409"
        },
        {
            id: 27,
            imgSrc: "../img/zengest.jpeg",
            alt: "Zengest",
            title: "Zengest",
            description: "Aroma de alívio digestivo e bem-estar.",
            price: "R$257"
            
        },
    ];

    return (
        <section className="produtos">
            {produtos.map((produto) => (
                <Produto
                    key={produto.id}
                    id={produto.id}
                    imgSrc={produto.imgSrc}
                    alt={produto.alt}
                    title={produto.title}
                    description={produto.description}
                    price={produto.price}
                    price2={produto.price2}
                />
            ))}
        </section>
    );
};

export default ListaProduto;
