import React,{useContext} from 'react';
import Spinner from '../spinner';
import UserItem from './userItem';
import GithubContext from '../../context/github/githubContext';






const Users = () => {
    const githubContext=useContext(GithubContext)
    const {loading,users}=githubContext
    if(loading){
        return <Spinner/>
    }else{
     return (  
            <div style={userStyle}>
            {users.map(user=>(
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
        )
    }
}
 
export default Users ;


const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3 , 1fr)',
    gap:'1rem'
}