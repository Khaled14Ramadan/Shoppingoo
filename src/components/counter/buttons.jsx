
const Button = ({st , operation , text})=>{
    
    return (<>
        <button className={st} onClick={operation} >{text}</button>
    </>)
}

export default Button ;