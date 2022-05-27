import React from 'react'
import './shortlink.css';
import { FiX, FiClipboard } from 'react-icons/fi'

function ShortLink({ closeURL, content }) {

  async function copyLink(){
    await navigator.clipboard.writeText(content.link)
  }
  return (
    <div className='content-container'>

      <div className='content-header'>
        <h3>Your short URL</h3>
        <button onClick={closeURL} className='close-btn'>
        <FiX size={25} color="black" />
        </button>
      </div>

      <span>
       {content.long_url}
      </span>

      <button onClick={copyLink} className='btn-link'>
          {content.link}
          <FiClipboard size={20} color="black"/>
      </button>

    </div>
  )
}

export default ShortLink;