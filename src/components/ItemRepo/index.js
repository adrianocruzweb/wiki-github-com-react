import { ItemContainer } from "./styles";


const ItemRepo = ({repo}) => {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.fullname}</p>
      <a href={repo.html_url} target="_blank">Ver repositório</a>
      <br />
      <a href="foo" className="remover">Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;