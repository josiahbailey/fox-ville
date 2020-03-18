import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Button from './Button'
import Card from './Card'

const Container = () => {
  const [kitten, setKitten] = useState({})

  const getNewKitty = e => {
    axios.get(`https://aws.random.cat/meow?ref=apilist.fun`)
      .then(res => {
        console.log(res)
        setKitten(res.data.file)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getNewKitty()
  }, [])

  return (
    <div className='Container'>
      <Button getNewKitty={getNewKitty} />
      <Card kitten={kitten} />
    </div>
  );
}

export default Container;