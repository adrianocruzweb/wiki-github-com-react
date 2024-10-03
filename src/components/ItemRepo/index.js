import { ItemContainer } from "./styles";


const ItemRepo = ({repo, handleRemoveRepo}) => {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer >
      <h3>{repo.name}</h3>
      <p>{repo.fullname}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">Ver repositório</a>
      <br />
      <button onClick={handleRemove}>Remover</button>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;