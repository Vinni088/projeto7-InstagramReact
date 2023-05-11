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
            curtidas_qnt: "101523",
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
            curtidas_qnt: "101567",
            curtidas_img: "./assets/adorable_animals.svg",
            curtidas_alt: "adorable_animals"
        },
        {
            usuario_img: "https://i.pinimg.com/564x/25/a0/6f/25a06f4c02f17c090454e6e48ec49973.jpg",
            usuario_alt: "Humor_Maromba",
            usuario_nome: "Humor_Maromba",
            conteudo_img: "https://i.pinimg.com/564x/85/c4/a3/85c4a35e0e6152f8bc5d6e44233b53ec.jpg",
            conteudo_alt: "100% Natural",
            curtidas_nome: "respondeai",
            curtidas_qnt: "136088",
            curtidas_img: "./assets/respondeai.svg",
            curtidas_alt: "respondeai"
        }
    ];
    
    return(
        <div className="posts">
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