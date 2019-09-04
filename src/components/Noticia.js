import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia
  return (
    <a
      href={url}
      target='_blank'
      without='true'
      rel="noopener noreferrer"
      style={{ display: 'block' }}>
      <div className='col s12 m6 l4' >
        <div className='card' style={{ height: '500px' }}>
          <div className='card-image'>
            <img src={urlToImage} alt={title} />
            <span className='card-title title-site'>{source.name}</span>
          </div>
          <div className='card-content center' style={{ paddingTop: '0px' }}>
            <h3 style={{ marginTop: '10px' }}>{title}</h3>
            <p style={{ color: '#333' }}>{description && description.substring(0, 150)}</p>
          </div>

        </div>
      </div>
    </a>
  )
}

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}

export default Noticia