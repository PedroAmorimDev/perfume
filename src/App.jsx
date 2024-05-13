import Foto from './Foto/Foto'
import Card from './Card/Card'
import { Box } from './styles/Box'
function App() {

  return (
    <>
      <Box>
        <Foto />
        <Card tittle={"Gabrielle Essence Eau De Parfum"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio, error expedita quaerat laborum nobis est praesentium autem reiciendis consequatur ducimus quis fugit velit omnis officia earum aspernatur dolores hic."} minLogo={"P E R F U M E"} />
      </Box>
    </>
  )
}

export default App
