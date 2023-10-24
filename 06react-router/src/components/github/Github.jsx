import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/Paras-is-coding")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setData(data);
        })
    },[])
  return (<>
    <div className=' text-center p-4 max-h-20 bg-slate-800 text-white text-4xl'>Github Followers : {data.followers}</div>
    <div className='flex justify-around'>
        <img className=' p-6' src={data.avatar_url} alt={data.bio} />    
        <div className='flex gap-4 text-center flex-col p-6 flex-wrap'>
            <h1 className='text-3xl font-extrabold'>{data.name}</h1>
            <h1 className='text-3xl font-bold '>{data.bio}</h1>
            <a href={data.blog} className='text-3xl font-bold text-orange-800'>Linkedin</a>

        </div>

    </div>
    </>
  )
}
