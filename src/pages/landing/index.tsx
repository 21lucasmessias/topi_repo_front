import React from 'react';
import Api from '../../api/api';

import LookupSearch from '../../components/LookupSearch';
import './styles.css';

const Landing: React.FC = () => {
  console.log(Api)
  return (
    <div id='landing'>
      <strong className='logo'>TOPi Repo</strong>

      <p className='label-search'>Type a language to search for the most starred repositories in github.</p>
           
      <div className='input-box'>
        <LookupSearch onClick={() => {}}/>
      </div>
    </div>
  );
}

export default Landing;