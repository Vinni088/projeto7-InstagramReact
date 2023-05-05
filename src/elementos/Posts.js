import Post from "./Post.js";

export default function Posts() {
    const posts = [
        {
            usuario_img: "./assets/meowed.svg",
            usuario_alt: "meowed",
            usuario_nome: "meowed",
            conteudo_img: "./assets/gato-telefone.svg",
            conteudo_alt:"gato-telefone",
            curtidas_nome: "respondeai",
            curtidas_qnt: "101.523",
            curtidas_img: "./assets/respondeai.svg",
            curtidas_alt: "respondeai"
        },
        {
            usuario_img: "./assets/barked.svg",
            usuario_alt: "barked",
            usuario_nome: "barked",
            conteudo_img: "./assets/dog.svg",
            conteudo_alt: "dog",
            curtidas_nome: "dorable_animals",
            curtidas_qnt: "99.159",
            curtidas_img: "./assets/adorable_animals.svg",
            curtidas_alt: "adorable_animals"
        }
    ];
    
    return(
        <div class="posts">
            {posts.map(adress => <Post 
            usuario_img = {adress.usuario_img}
            usuario_alt= {adress.usuario_alt}
            usuario_nome= {adress.usuario_nome}
            conteudo_img= {adress.conteudo_img}
            conteudo_alt= {adress.conteudo_alt}
            curtidas_nome= {adress.curtidas_nome}
            curtidas_qnt= {adress.curtidas_qnt}
            curtidas_alt= {adress.curtidas_alt}
            curtidas_img= {adress.curtidas_img}/>)}
        </div>
    );
}