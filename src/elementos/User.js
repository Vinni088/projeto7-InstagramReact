import { useState } from "react";

export default function User() {

    let [nome_var, setNome] = useState("catanacomics");
    let [img_var, setImg] = useState("./assets/catanacomics.svg");

    function mudar_nome(){
        let nome_2 = prompt("Digite o novo nome");
        if(nome_2){
            setNome(nome_2);
        }
    }
    function mudar_img(){
        let img_2 = prompt("Digite o link para a nova imagem");
        if(img_2){
            setImg(img_2);
        }
    }

    return(
    <div class="usuario">
        <img src={img_var} onClick={mudar_img} alt="imagem de perfil" />
        <div class="texto">
            <span>
                <strong>{nome_var}</strong>
                <ion-icon onClick={mudar_nome} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    );
}