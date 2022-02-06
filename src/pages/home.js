import React, { Fragment } from 'react';
import Search from '../components/users/search';
import Users from '../components/users/Users';
const Home = (props) => {
    return (  
        <Fragment>
            <Search/>
            <Users/>
        </Fragment>
    );
}
 
export default Home;
