import { Preco1, Preco2 } from "../styles/Preco"
const Valor = ({preco, minPreco})=>{
return(<>
<Preco1>{preco} <Preco2>{minPreco}</Preco2></Preco1>
</>)
}
export default Valor