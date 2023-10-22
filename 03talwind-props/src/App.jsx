import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [color,setColor] = useState("pink")

  let cardFilling1 = {
    imgSrc : "https://media.licdn.com/dms/image/D4D03AQE9UWjaKMDvbg/profile-displayphoto-shrink_400_400/0/1697602007868?e=1703116800&v=beta&t=82QoVBOXPSHY6vO-nldFX80KXrve-_iXbMA9-kQrivw",
    heading:"Paras, A passionste web developer",
    body:"Hello I'm paras. I'm a computer science student and I've been in the field of web development for a while and I really love making websites"

  }
  let cardFilling2 = {
    imgSrc: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc",
    heading:"Dog of Paras",
    body:"Hey I'm paras ko dog and I'm really disappointed with him houghhough!"
  }

  return (
    <main className=" w-full flex flex-wrap gap-6 p-6  min-h-screen" style={{backgroundColor:color}}>
  <Card  cardDetails = {cardFilling1}/>
  <Card  cardDetails = {cardFilling2}/>
  <Card  cardDetails = {cardFilling1}/>
  <Card  cardDetails = {cardFilling2}/>

<div className=" fixed bottom-10 flex flex-wrap justify-center items-center w-full">
<div className=" flex flex-wrap justify-center gap-6 shadow-md items-center bg-gray-200 w-4/5 p-3 rounded-lg">
  <button onClick={()=>setColor("red")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"red"}}>Red</button>
  <button onClick={()=>setColor("black")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"black"}}>Black</button>
  <button onClick={()=>setColor("green")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"green"}}>Green</button>
  <button onClick={()=>setColor("blue")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"blue"}}>Blue</button>
  <button onClick={()=>setColor("olive")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"olive"}}>Olive</button>
  <button onClick={()=>setColor("pink")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"pink"}}>Pink</button>
  <button onClick={()=>setColor("purple")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"purple"}}>Purple</button>
  <button onClick={()=>setColor("lavender")} className="px-3 py-2 rounded-2xl outline-none shadow-lg text-white" style={{backgroundColor:"lavender"}}>Lavender</button>
  <button onClick={()=>setColor("white")} className="px-3 py-2 rounded-2xl outline-none shadow-lg " style={{backgroundColor:"white"}}>White</button>
</div>
</div>
    </main>
  )
}
 
export default App
