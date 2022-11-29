import { useState } from 'react';

import gitlogo from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';



function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);
      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }

    }

  }

  const handleRemoveRepo = (id) => {
    setRepos((repos) =>{
      return repos.filter(repoId => repoId.id !== id);
    });

  }


  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt="github-logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}></Input>
      <Button onClick={handleSearchRepo}></Button>
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} key={repo.id.toString()}></ItemRepo>)}
    </Container>
  );
}

export default App;
