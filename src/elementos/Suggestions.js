import Suggestion from "./Suggestion.js";

export default function Suggestions() {
    const sugeridos = [{
        imagem: "./assets/bad.vibes.memes.svg",
        alt: "bad.vibes.memes.svg",
        nome: "bad.vibes.memes",
        razão: "Segue você"
    },
    {
        imagem: "./assets/chibirdart.svg",
        alt: "chibirdart",
        nome: "chibirdart",
        razão: "Segue você"
    },
    {
        imagem: "./assets/razoesparaacreditar.svg",
        alt: "razoesparaacreditar",
        nome: "razoesparaacreditar",
        razão: "Novo no Instagram"
    },
    {
        imagem: "./assets/adorable_animals.svg",
        alt: "adorable_animals",
        nome: "adorable_animals",
        razão: "Segue você"
    },
    {
        imagem: "./assets/smallcutecats.svg",
        alt: "smallcutecats",
        nome: "smallcutecats",
        razão: "Segue você"
    }];
    return(
        <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugeridos.map(adress => <Suggestion imagem={adress.imagem} alt={adress.alt} nome={adress.nome} razão={adress.nome}/>)}

          </div>
    );
}