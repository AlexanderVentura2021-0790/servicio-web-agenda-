import logo from './logo.svg';
import Contacto from './Contacto';
import {useState, useEffect} from 'react';
import {baseDeDato} from "./ConfiguracionFirebase";
import ContactoNuevo from "./ContactoNuevo";
import './App.css';

function App() {
  const [contactos, setContactos] = useState([]);

  const agregarNuevoContacto = (contacto)=>{
    const tempContactos = contactos.slice();
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }

  useEffect(()=>{
    const listado = [];

    baseDeDato.collection('Agendados')
    .get()
    .then( resultado => {
      resultado.forEach( contacto=>{
        listado.push(contacto.data());
      })
      setContactos(listado);
    }).catch( error=>console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ContactoNuevo agregarNuevoContacto={agregarNuevoContacto} />
        {
          contactos && contactos.slice().reverse().map((contacto, i)=>{
              const {nombre, apellido, telefono} = contacto;
              return (<Contacto key={i} nombre={nombre} apellido={apellido} telefono={telefono} />) 
          })
        }
        

      </header>
    </div>
  );
}

export default App;
