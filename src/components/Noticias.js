import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Noticia from './Noticia'

class Noticias extends Component {
  render() {
    const { noticias } = this.props
    return (
      <div className='row'>
        <TransitionGroup>
          {noticias.map(noticia => (
            <CSSTransition
              key={noticia.url}
              classNames='fade'
              timeout={500}>
              <Noticia noticia={noticia} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }
}

Noticias.propTypes = {
  noticias: PropTypes.array.isRequired
}

export default Noticias