import React,{useContext, useState} from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';



const Search=()=> {
    const githubContext=useContext(GithubContext);
    const alertContext=useContext(AlertContext);
  const {clearUsers,users}=githubContext;

   const[text,setText]=useState('');
   
    const onInpChange=(e)=>{
        setText(e.target.value)
    }
   const handleSubmit=(e)=>{
        e.preventDefault()
        if(text===''){
            alertContext.setAlert('Please Enter Something','light')
        }else{
            githubContext.searchUsers(text)
           setText('')
        }
    }
   
     
        return (
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <input type='text' name='text' placeholder='Search Users ...' value={text} onChange={onInpChange}/>
                    <input type='submit' value='Submit' className='btn btn-dark btn-block'/>
                    {users.length >0 &&(
                    <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
                    )
                    }
                    
                </form>
            </div>
        );
    }

 
export default Search;