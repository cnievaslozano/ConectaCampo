import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


const Search = () => {

    //Encuentra el primer input y luego va actualizando la busqueda
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const initialKey = searchParams.get('name') ?? ''  
    const [key, setKey] = useState(initialKey);  // Estado para manejar el valor del input
    const [resultOnEnter, setResultOnEnter] = useState(initialKey);
    useEffect(() => {
      setKey(initialKey);  // Actualizar el estado si cambia el parámetro de consulta
    }, [initialKey]);
  
    const handleKeyDown = (e : any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // Redirigir a la ruta deseada
            navigate(`/search?name=${key}`);
            setResultOnEnter(e.target.value)
          }
    }
    const handleInputChange = (e: any) => {
        setKey(e.target.value);  // Actualiza el estado conforme el usuario escribe
    };
    
  return (
    <Layout>
        <Container className=''>
            <div>
                <h3>Resultados de {resultOnEnter}</h3>
                <input type="text" value={key} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                <p>{}</p>
            </div>
        </Container>
    </Layout>

  )

};

export default Search;
