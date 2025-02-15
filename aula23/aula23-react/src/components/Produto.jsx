function Produto(props) {
    return (
        <>
            <section style={{background: "#ccc", color: "black", padding: 5, borderRadius: 5 }}>
                <img src={props.imagem} alt={props.nome} style={{ width: "250px", height: "auto", borderRadius: "5px", display:"flex", justifyContent: "center", alignItems: "center" }} />
                <p>{props.nome}</p>
                <p>{props.src}</p>
                <p>{props.descricao}</p>
                <p>{props.preco}</p>
            </section>
        </>
    )
}

export default Produto;
