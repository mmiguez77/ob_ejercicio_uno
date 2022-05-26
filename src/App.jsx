import './App.css'

// components
import ComponenteA from './components/ComponenteA'
import Contacto from './model/Contacto'

function App() {

  const contactoUno = new Contacto(
    'Cosme','Fulanito','cful@email.com', false
  )
  

  return (
    <div className="App">
      <header className="App-header">
        <ComponenteA contacto={contactoUno} />
      </header>
    </div>
  )
}

export default App
