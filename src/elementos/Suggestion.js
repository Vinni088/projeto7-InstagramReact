export default function Suggestion(props) {
    return(
    <div className="sugestao">
        <div className="usuario">
            <img
                src={props.imagem}
                alt={props.alt}
            />
            <div className="texto">
                <div className="nome">{props.nome}</div>
                <div className="razao">{props.razão}</div>
            </div>
        </div>
        <div className="seguir">Seguir</div>
    </div>
    );
}