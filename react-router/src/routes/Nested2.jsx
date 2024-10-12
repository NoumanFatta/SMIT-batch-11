import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Nested2 = ({data}) => {
  const a = useContext(ThemeContext)
  console.log(a)
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Nested2