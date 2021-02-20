import Countries from "./components/Countries"
import Languages from "./components/Languages"

const langs = [
  {language: "English", fluency: "Native"},
  {language: "German", fluency: "Limited Working"},
  {language: "Spanish", fluency: "Limited Working"},
  {language: "Chinese", fluency: "Elementary"},
  {language: "Latin", fluency: "Elementary"}
]

const countries = [
    {name: "United Kingdom", capital: "London"},
    {name: "United States of America", capital: "Washington DC"},
    {name: "Hungary", capital: "Budapest"},
    {name: "Romania", capital: "Bucharest"},
]

const App = () => {
  return (
    <div>
      <Languages langs={langs}/>
      <br/>
      <Countries countries={countries}/>
    </div>
  )
}

export default App
