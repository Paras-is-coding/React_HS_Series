import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams()
  return (
    <div className=' text-center p-4 max-h-20 bg-slate-800 text-white text-4xl'>User: {userId} </div>
  )
}
