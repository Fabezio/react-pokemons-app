import React, { FunctionComponent, useState, useEffect } from 'react'
import POKEMONS from './models/mock-pokemon'
import Pokemon from './models/pokemon'

const App: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  // pokemons.length=0
  for (let pika of pokemons  ) {
    console.log(pika.name)
  }
  // const [pokemons] = useState<Pokemon[]>(POKEMONS)
  //   const [name, setName] = useState<String>('React 16,')

  useEffect(() => {
    setPokemons(POKEMONS)

  }, [])
  return (
    <div>
      <h1>Contenu du PokeDex</h1>
      {/* <h2>{pokemons.length}</h2> */}

      <p>{pokemons.map(({ name }) => {
        <span key={name}>{name}
        </span>
      })}</p>


    </div>
  )
  //   return <h1>Salut, {name} ! </h1>
}
export default App
