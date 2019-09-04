import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Formulario extends Component {
  valueSelec = React.createRef()

  handleChange = () => {
    const { carregaNoticias } = this.props
    carregaNoticias(this.valueSelec.current.value)
  }
  render() {
    return (
      <div className='buscador row'>
        <div className='col s12 m12'>
          <form style={{ display: 'flex', alignItems: 'center' }}>
            <h5 style={{ marginTop: 0, fontWeight: 'bold' }} className='col s12 m5'>Pesquisar por categoria</h5>
            <div className='input-field col s12 m7'>
              <select
                style={{ display: 'block', border: '1px solid #666' }}
                onChange={this.handleChange}
                ref={this.valueSelec}>
                <option value='general' defaultValue>Geral</option>
                <option value='business'>Negócios</option>
                <option value='entertainment'>Entretenimento</option>
                <option value='health'>Saúde</option>
                <option value='science'>Ciência</option>
                <option value='sports'>Esportes</option>
                <option value='technology'>Tecnologia</option>

              </select>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

Formulario.propTypes = {
  carregaNoticias: PropTypes.func.isRequired
}

export default Formulario