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
    <div className="usuario">
        <img data-test="profile-image" src={img_var} onClick={mudar_img} alt="imagem de perfil" />
        <div className="texto">
            <span>
                <strong data-test="name"> {nome_var}</strong>
                <ion-icon data-test="edit-name" onClick={mudar_nome} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    );
}