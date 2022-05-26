import PropTypes from 'prop-types'

import Contacto from '../model/Contacto.js'
import ComponenteB from './ComponenteB.jsx'


const ComponenteA = ({ contacto }) => {

    const { nombre, apellido, email, conectado } = contacto

    return (

        <div>
            <h2> Usuario </h2>
            <hr />

            <h4> Nombre: { nombre } </h4>
            <h4> Apellido: { apellido } </h4>
            <h4> Email: { email } </h4>
            
            <ComponenteB conectado={conectado} />

        </div>
  
  
  )
}

ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteA