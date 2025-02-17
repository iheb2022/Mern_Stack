import './App.css'
import PersonCard from './components/Card.jsx'

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

  return (
    <div className="App">
        <PersonCard propt={ prop1 } />
        <PersonCard propt={ prop2 } />
    </div>
  )
}

export default App