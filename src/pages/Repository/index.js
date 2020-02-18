import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  FaSpinner,
  FaChevronLeft,
  FaAngleLeft,
  FaAngleRight,
  FaTimes,
  FaFolderOpen,
  FaAsterisk,
} from 'react-icons/fa';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

import {
  Loading,
  Owner,
  IssueList,
  Navigation,
  Filters,
  FilterButton,
} from './styles';
import Container from '../../components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    state: 'open',
    page: 1,
    filters: [
      {
        state: 'open',
        label: 'Abertas',
        active: true,
        icon: <FaFolderOpen />,
      },
      {
        state: 'closed',
        label: 'Fechadas',
        active: false,
        icon: <FaTimes />,
      },
      { state: 'all', label: 'Todas', active: false, icon: <FaAsterisk /> },
    ],
  };

  async componentDidMount() {
    this.loadIssues();
  }

  handlePage = async action => {
    const { page } = this.state;

    if (page < 1) page = 1;

    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });

    this.loadIssues();
  };

  handleFilter = async filter => {
    const { filters } = this.state;

    filters.forEach(f => {
      if (f.state === filter) {
        f.active = true;
      } else {
        f.active = false;
      }
    });

    await this.setState({ filters });

    this.loadIssues();
  };

  loadIssues = async () => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const filter = this.state.filters.find(f => f.active === true);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filter.state,
          per_page: 5,
          page: this.state.page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  };

  render() {
    const { repository, issues, loading, page, filters } = this.state;

    if (loading) {
      return (
        <Loading>
          Carregando
          <FaSpinner />
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">
            <FaChevronLeft /> repositories
          </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <Filters>
          {filters.map((f, index) => (
            <FilterButton
              key={f.state}
              onClick={() => this.handleFilter(f.state)}
              active={f.active}
            >
              {f.label}
            </FilterButton>
          ))}
        </Filters>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

        <Navigation>
          <button
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
            title="anterior"
          >
            <FaAngleLeft />
          </button>
          <span>Página: {page}</span>
          <button onClick={() => this.handlePage('next')} title="próxima">
            <FaAngleRight />
          </button>
        </Navigation>
      </Container>
    );
  }
}

/*

      dentro da key é interessante sempre passar o valor como string
      por isso String(issue.id), converte o id number em string

    */
