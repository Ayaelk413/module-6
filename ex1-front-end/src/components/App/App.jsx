import { useContext, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import '../../../src/App.css'
import { Context as ContextePersonne} from '../../services/Contexte'

function App() {
  const [count, setCount] = useState(0)
  const [phonebook,setPhonebook] = useState([]);
  const [newName,setNewName] = useState("");
  const [newNumber,setNewNumber] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");

 const {phonebooks} = useContext(ContextePersonne);
  

  return (
    <>
     <div>
        <h1>Phone Book</h1>
        <ul>
          {phonebooks.map((person) => (
            <li key={person.id}>
              {person.name}: {person.number}
            </li>
          ))}
        </ul>
      </div>
    </>
     
  )
}

export default App
