import { useState } from "react";

export default function Post(prop) {
  let [heart, setHeart] = useState("heart-outline");
  let [color, setColor] = useState("");
  let [bookmark, setBookmark] = useState("bookmark-outline");
  let [num_likes, setNum] = useState(prop.curtidas_qnt);

  function like(){
    if(heart === "heart-outline"){
      setHeart("heart");
      setColor("Cor_coração");
      setNum(Number(num_likes) + 0.001);
    } else if(heart === "heart") {
      setHeart("heart-outline");
      setColor("");
      setNum(Number(num_likes) - 0.001);
    }
  }
  function mark(){
    if(bookmark === "bookmark-outline"){
      setBookmark("bookmark");
    } else if(bookmark === "bookmark") {
      setBookmark("bookmark-outline");
    }
  }
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={prop.usuario_img} alt={prop.usuario_alt} />
          {prop.usuario_nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={prop.conteudo_img} alt={prop.conteudo_alt} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon class={color} onClick={like} name={heart}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={mark} name={bookmark}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={prop.curtidas_img} alt={prop.curtidas_alt} />
          <div class="texto">
            Curtido por <strong>{prop.curtidas_nome}</strong> e{" "}
            <strong>outras {num_likes} pessoas</strong>`
          </div>
        </div>
      </div>
    </div>
  );
}
