import React, { useContext , useState} from 'react'
import UserContext from '../context/UserContext';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}}  value={username} />
        <input type="password" onChange={(e=>{setPassword(e.target.value)})}  value={password} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
