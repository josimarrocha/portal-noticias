import React, { Component } from 'react'

import Header from './components/Header'
import Noticias from './components/Noticias'
import Formulario from './components/Formulario'
import './index.css'

class App extends Component {
  state = {
    noticias: []
  }

  componentWillMount() {
    this.carregaNoticias()
  }

  carregaNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=br&category=${categoria}&apiKey=dc9e6a20167344d2b04dd1aebf8ad614`

    const data = await fetch(url)
    const response = await data.json()

    this.setState({ noticias: response.articles })
  }

  render() {
    const { noticias } = this.state
    return (
      <div className="App">
        <Header />
        <div className='container white container-noticias'>
          <Formulario carregaNoticias={this.carregaNoticias} />
          {!!noticias.length && <Noticias noticias={this.state.noticias} />}
        </div>
      </div>
    );
  }
}

export default App;
