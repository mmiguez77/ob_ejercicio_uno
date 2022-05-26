import { useState } from 'react'
import PropTypes from 'prop-types'

const ComponenteB = ({ conectado }) => {

    const [connected, setConnected] = useState(conectado)

    return (
        <>
            {
                connected
                ? <p> Usuario conectado  </p>
                : <p> Usuario desconectado  </p>
            }
    
    
            <button onClick={ () => setConnected(!connected) }> Cambiar estado </button>
        </>
    )
}

ComponenteB.propTypes = { 
    conectado: PropTypes.bool.isRequired
}

export default ComponenteB