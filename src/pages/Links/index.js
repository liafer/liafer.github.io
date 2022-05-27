import { useState, useEffect } from 'react'
import './links.css'
import {FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { linksSaved, deleteLink } from '../../services/store'
import ShortLink from '../../components/ShortLink';

export default function Links() {
  const [link, setLink ] = useState([]);

  const [data, setData ] = useState({});
  const [showURL, setShowURL] = useState(false);

  const [emptyList, setEmptyList] = useState(false);


  useEffect(() => {
    async function getLink(){
      const result = await linksSaved('@shortLink')

      if(result.length === 0){
        setEmptyList(true);
      }

      setLink(result);
    }

    getLink();

  }, [])

  function openLink(onlylink){
    setData(onlylink)
    setShowURL(true);
  }

  async function handleDelete (id){
    const result = await deleteLink(link, id);

    if(result.length === 0){
      setEmptyList(true);
    }

    setLink(result)

  }


  return (
      <div className='links-header'>
        <button className='left-btn'>
          <Link to="/">
          <FiArrowLeft size={40} color="black" />
          </Link>
        </button>
        <div className='links-container'>
        <h2>My Links</h2>
        <span>Manage your links here</span>
      </div>

      { emptyList }

     { link.map ( onlylink => (
      <div key={onlylink.id} className='links-manager'>
        <button className='link-btn' onClick={ () => openLink(onlylink)}>
          <FiLink size={20} color="black" />
          {onlylink.long_url}
        </button>
        <button className='delete-btn' onClick={ () => handleDelete(onlylink.id) }>
          <FiTrash size={20}/>
        </button>
      </div>
     ))}

     { showURL && (
       <ShortLink
          closeURL={ () => setShowURL(false) }
          content={data}
       />   
     )} 

    </div>
  )
}
