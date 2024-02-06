import React, {useState, useEffect} from 'react'

const App = () => {
  const [dogImg, setDogImg] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) =>{
      setDogImg(data.message)
      setIsLoaded(true);
    })
  })

  if (!isLoaded) return <p>Loading...</p>;
  return (
    <div>
      <img src={dogImg} alt="A Random Dog" />
    </div>
  )
}

export default App
