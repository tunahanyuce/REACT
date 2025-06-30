import React from 'react'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'

const Firms = () => {

  const {getFirms}=useStockCall()

  useEffect(()=>{
    getFirms()
  },[])

  return (
    <div>Firms</div>
  )
}

export default Firms