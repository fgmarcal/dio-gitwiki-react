import React from 'react'
import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () =>{
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p> 
        <a href={repo.html_url} target="_blank" rel="noreferrer" >Ver repositório</a><br></br>
        <span rel="noreferrer" className='remover' onClick={handleRemove}>Remover</span>
        <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo;
