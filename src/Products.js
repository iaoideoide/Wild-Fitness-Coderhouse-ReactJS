import picMancuernas from "./assets/mancuernas.jfif";
import picStraps from "./assets/straps.jpg";
import picCreatina from "./assets/creatina.jpg";

let Porducts = [
  {
    id: 0,
    title: "mancuernas",
    price: "$1500",
    detail: "mancuernas de 2.5 a 25 kg",
    pictureUrl: picMancuernas,
    category: "equipamento",
  },
  {
    id: 1,
    title: "Straps",
    price: "$2500",
    detail: "Straps para mejorar el agarre de la barra",
    pictureUrl: picStraps,
    category: "accesorio",
  },
  {
    id: 2,
    title: "creatina",
    price: "$3500",
    detail: "pote de creatina",
    pictureUrl: picCreatina,
    category: "suplemento",
  },
];

export default Porducts;
