import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  const prop1 = {
    firstName : "Jane",
    lastName : "Doe",
    age : 45,
    hairColor : "black"
  }
  
  const prop2= {
    firstName : "Jhon",
    lastName : "Smith",
    age : 88,
    hairColor : "brown"
  }

  const prop3= {
    firstName : "Millard",
    lastName : "Fillmore",
    age : 50,
    hairColor : "brown"
  }

  const prop4= {
    firstName : "Maria",
    lastName : "Smith",
    age : 62,
    hairColor : "brown"
  }

  return (
    <div className="App">
        <PersonCard propt={ prop1 } />
        <PersonCard propt={ prop2 } />
        <PersonCard propt={ prop3 } />
        <PersonCard propt={ prop4 } />
    </div>
  )
}

export default App