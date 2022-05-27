import React, { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ShortLink from '../../components/ShortLink';
import './home.css'

import api from '../../services/api';
import { localLink } from '../../services/store';

function Home() {

  const [link, setLink ] = useState('');
  const [data, setData ] = useState({});
  const [showURL, setShowURL] = useState(false);

  async function ShortenLink(){
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowURL(true);

      localLink('@shortLink', response.data)

      setLink('')

    }catch{
      alert("Oops! Something went wrong")
      setLink('');
    }
  }


  return (
    <div className='container-home'>
      <div className='link-header'>
        <Link to="/links">
        <h4>My Links</h4>
        </Link>
      </div>
      <h1>URL Shortener</h1>
      <span>Shorten your link here. It's free!</span>

      <div className='input-home'>
        <div>
          <FiLink size={40}/>
        <input
        type='text'
        placeholder='Enter your URL'
        value={link}
        onChange={ (e) => setLink(e.target.value) }
        />

        <button onClick={ShortenLink}>
          <h4>Shorten</h4>
        </button>
        </div>

      </div>

      { showURL && (
        <ShortLink
          closeURL={ () => setShowURL(false) }
          content={data}
        /> 
      ) }

    </div>
  )
}

export default Home