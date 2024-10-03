import { ItemContainer } from "./styles";


const ItemRepo = () => {
  return (
    <ItemContainer>
      <h3>Nome repo</h3>
      <p>Descrição repo</p>
      <a href="foo">Ver repositório</a>
      <br />
      <a href="foo" className="remover">Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;