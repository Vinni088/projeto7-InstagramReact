import Story from "./Story.js";

export default function Stories() {
  const strs = [
    {
      img:"./assets/9gag.svg",
      alt:"9gag",
      nome: "9gag"
    },
    {
      img:"./assets/meowed.svg",
      alt: "meowed",
      nome:"meowed"
    },
    {
      img: "./assets/barked.svg",
      alt: "barked",
      nome: "barked"
    }, 
    {
      img:"./assets/nathanwpylestrangeplanet.svg",
      alt:"nathanwpylestrangeplanet",
      nome:"nathanwpylestrangeplanet"
    },
    {
      img: "./assets/wawawicomics.svg",
      alt: "wawawicomics",
      nome: "wawawicomics"
    },
    {
      img: "./assets/respondeai.svg",
      alt: "respondeai",
      nome: "respondeai"
    }, 
    {
      img: "assets/filomoderna.svg",
      alt: "filomoderna", 
      nome: "filomoderna"
    },
    {
      img: "assets/memeriagourmet.svg",
      alt: "memeriagourmet",
      nome: "memeriagourmet"
    }
  ];
  return (
    <div class="stories">
      {strs.map(adress => 
        <Story 
        img={adress.img}
        alt={adress.alt}
        nome={adress.nome}/>)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}