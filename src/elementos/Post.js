import { useState } from "react";

export default function Post(prop) {
  let [heart, setHeart] = useState("heart-outline");
  let [color, setColor] = useState("");
  let [bookmark, setBookmark] = useState("bookmark-outline");
  let [num_likes, setNum] = useState(prop.curtidas_qnt);
  let [animation, setAnimation] = useState("hidden");

  function like(){
    if(heart === "heart-outline"){
      setHeart("heart");
      setColor("Cor_coração");
      setNum(Number(num_likes) + 1);
    } else if(heart === "heart") {
      setHeart("heart-outline");
      setColor("");
      setNum(Number(num_likes) - 1);
    }
  }
  function mark(){
    if(bookmark === "bookmark-outline"){
      setBookmark("bookmark");
    } else if(bookmark === "bookmark") {
      setBookmark("bookmark-outline");
    }
  }
  function like_perma() {
    if(heart === "heart-outline"){
      setHeart("heart");
      setColor("Cor_coração");
      setNum(Number(num_likes) + 1);
    }
    setAnimation("animado animar");
    setTimeout(() => { setAnimation("hidden"); }, 500);
  }
  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={prop.usuario_img} alt={prop.usuario_alt} />
          {prop.usuario_nome}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img onDoubleClick={like_perma} data-test="post-image" src={prop.conteudo_img} alt={prop.conteudo_alt} />
        <ion-icon name="heart" class={animation} onClick={like}></ion-icon>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" class={color} onClick={like} name={heart}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={mark} name={bookmark}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={prop.curtidas_img} alt={prop.curtidas_alt} />
          <div data-test="likes-number" className="texto">
            Curtido por <strong>{prop.curtidas_nome}</strong> e{" "}
            <strong>outras  {num_likes} pessoas</strong>`
          </div>
        </div>
      </div>
    </div>
  );
}
