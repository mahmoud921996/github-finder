import React from 'react';
import RepoItem from './repoItem';

const Repos = ({repos}) => {
    return repos.map(repo=> <RepoItem repo={repo} key={repo.id}/>)
}
 
export default Repos;