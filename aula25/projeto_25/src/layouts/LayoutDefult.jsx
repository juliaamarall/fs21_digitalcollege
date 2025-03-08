import Menu from "./Menu"

const LayoutDefult = ({children}) =>{
    return (
        <>
        <Menu />
        <div className="container">
        {children}
        </div>
        
        </>
    )
}

export default LayoutDefult;