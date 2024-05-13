import Button from "../Button/Button"
import { CardStyle } from "../styles/CardStyle"
import { Titulo } from "../styles/Box"
import Valor from "../Valor/Valor"
const Card = ({ tittle, paragraph, minLogo }) => {
     return (
          <>
               <CardStyle>
                    <Titulo>{minLogo}</Titulo>
                    <h1>{tittle}</h1>
                    <p>{paragraph}</p>
                    <Valor preco={"$149.99"} minPreco={"$169.99"}/>
                    <Button text={"Add to Cart"}/>
               </CardStyle></>
     )
}
export default Card