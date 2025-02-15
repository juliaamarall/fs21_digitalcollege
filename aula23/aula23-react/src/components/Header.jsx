function Header(){
    return(
        <>

        <header style={{background:"#ccc", margin:0, display:"flex", alignItems: "center", justifyContent: "space-around"}}>
         <div>
            STORESTAR
         </div>
         <nav>
            <ul style={{listStyle: "none", display: "flex"}} >
                <li style={{marginRight:5}}>Menu</li>
                <li style={{marginRight:5}}>Contato</li>
                <li style={{marginRight:5}}>Calçados</li>
            </ul>
         </nav>
        </header>
        
        </>
    )
}

export default Header;