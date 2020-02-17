import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Form, SubmitButton, List, Title, MsgError } from './styles';

import Container from '../../components/Container';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
      error: false,
    };
  }

  // carregar os dados do local storage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // salvar os dados
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      this.setState({ loading: true });

      const { newRepo, repositories } = this.state;

      repositories.forEach(repo => {
        if (repo.name === newRepo) {
          throw new Error('Repositório duplicado');
        }
      });

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        error: '',
        loading: false,
      });
    } catch (err) {
      console.log(err.message);
      this.setState({ error: err.message, loading: false });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;

    return (
      <Container>
        <Title>
          <FaGithubAlt />
          Repositórios
        </Title>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? <FaSpinner /> : <FaPlus />}
          </SubmitButton>
        </Form>

        {error && <MsgError>{error}</MsgError>}

        <List>
          {repositories.map(repo => (
            <li key={repo.name}>
              <span>{repo.name}</span>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

/*

  Para utlizar estilos Globais use o createGlobalStyle

  Sempre criar um novo component quando existir a necessidade
  de vários niveis de encadeamento

  todo elemento que deverá ser manipulado, como um button por exemplo
  deve ser criado em um novo elemento

*/
