import React, { FunctionComponent, useState } from 'react'
import POKEMONS from './models/mock-pokemon.ts'
import Pokemon from './models/pokemon.ts'

const App: FunctionComponent = () => {
  const [pokemons] = useState<Pokemon[]>(POKEMONS)
  //   const [name, setName] = useState<String>('React 16,')

  return <h1>Vous avez {POKEMONS.length} pokemons !</h1>
  //   return <h1>Salut, {name} ! </h1>
}
export default App
