import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
       <div>
          <p>Page does not exist :(</p>
          <p>Go <NavLink to="/hci-t6/home">home</NavLink></p>
       </div>
    );
}

export default Error;
