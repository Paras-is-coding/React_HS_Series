import Card from "./components/Card"

function App() {
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
    <>
  <Card  cardDetails = {cardFilling1}/>
  <Card  cardDetails = {cardFilling2}/>
    </>
  )
}
 
export default App
