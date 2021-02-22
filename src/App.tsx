import React, { FunctionComponent, useState, useEffect } from 'react'
import POKEMONS from './models/mock-pokemon'
import Pokemon from './models/pokemon'
import './style.css'

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  // pokemons.length=0
  // for (let pokemeon of pokemons) {
  //   console.log(pika.name)
  // }
  // const [pokemons] = useState<Pokemon[]>(POKEMONS)
  //   const [name, setName] = useState<String>('React 16,')

  useEffect(() => {
    setPokemons(POKEMONS)
  }, [])
  return (
    <div>
      <h1>Contenu du PokeDex</h1>
      {/* <h2>{pokemons.length}</h2> */}
      <div className='card-deck'>
        {pokemons.map(({ name, picture, hp, cp, types, created }) => {
          return (
            <div class='card'>
              <div className='card--img-frame'>
                <img src={picture} alt={name} />
              </div>
              <p class='card--title' key={name}>
                {name}
              </p>
              <p>
                points de vie: {hp.toString()}
                <br />
                dégats: {cp.toString()}
              </p>
              <ul class='card--list'>
                Capacités:
                {types.map(type => {
                  return <li className='card--list-index'>{type}</li>
                })}
              </ul>
              <p class='card--date'>
                Attrapé le{': '}
                <span>
                  {new Intl.DateTimeFormat('fr', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  }).format(created)}
                </span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
  //   return <h1>Salut, {name} ! </h1>
}
export default App
