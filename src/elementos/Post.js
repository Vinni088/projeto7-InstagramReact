export default function Post(prop){
    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={prop.usuario_img} 
                  alt={prop.usuario_alt}  />
                  {prop.usuario_nome}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={prop.conteudo_img}  
                alt={prop.conteudo_alt}  />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img
                    src={prop.curtidas_img} 
                    alt={prop.curtidas_alt} 
                  />
                  <div class="texto">
                    Curtido por <strong>{prop.curtidas_nome}</strong> e{" "}
                    <strong>outras {prop.curtidas_qnt} pessoas</strong>`
                  </div>
                </div>
              </div>
            </div>
    );
}