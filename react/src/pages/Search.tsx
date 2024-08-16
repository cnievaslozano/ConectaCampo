import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/search.css';
import SearchProductGrid from '../components/SearchProductGrid';

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
    //TODO Cuando se busca, o se implementan los filtros o el buscar x el nombre ya que no estan en el mismo form.
    

  return (
    <Layout>
        <Container className=''>
            <section className='search-main-container'>

                <aside className='search-filters'>
                    <form action="/search" method="GET">
        
                        <div className='distance-filter-div'>
                            <label htmlFor="distance">Distancia (km):</label>
                            <input type="number" id="distance" name="distance" min="0" max="1000" placeholder="Hasta cuántos km" />
                        </div>

                        {/*<!-- Filtro de Tipo de Producto -->*/}
                        <div className='product-type-div'>
                            <label htmlFor="product-type">Tipo de Producto:</label>
                            <select id="product-type" name="product-type">
                            <option value="">Seleccionar tipo</option>
                            <option value="fruits">Frutas</option>
                            <option value="vegetables">Vegetales</option>
                            <option value="herbs">Hierbas</option>
                            <option value="grains">Granos</option>
                            </select>
                        </div>

                        {/*<!-- Filtro de Precio -->*/}
                        <div className='price-filter-div'>
                            <label htmlFor="price-range">Rango de Precio:</label>
                            <input type="number" id="price-min" name="price-min" min="0" placeholder="Mínimo" />
                            <input type="number" id="price-max" name="price-max" min="0" placeholder="Máximo" />
                        </div>

                        {/*<!-- Filtro de Categoría (Orgánico, Convencional) -->*/}
                        <div className='categoy-filter-div'>
                            <label>Categoría:</label>
                            <div>
                            <input type="checkbox" id="organic" name="category" value="organic" />
                            <label htmlFor="organic">Orgánico</label>
                            </div>
                            <div>
                            <input type="checkbox" id="conventional" name="category" value="conventional" />
                            <label htmlFor="conventional">Convencional</label>
                            </div>
                        </div>
                        {/*jdjjjdjd*/} 
                        
                        <div className='availability-filter-div'>
                            <label htmlFor="availability">Disponibilidad:</label>
                            <select id="availability" name="availability">
                            <option value="">Seleccionar</option>
                            <option value="in-stock">En stock</option>
                            <option value="pre-order">Preordenar</option>
                            </select>
                        </div>

                        {/*<!-- Filtro de Origen -->*/}
                        <div className='origin-filter-div'>
                            <label htmlFor="origin">Origen del Producto:</label>
                            <select id="origin" name="origin">
                            <option value="">Seleccionar origen</option>
                            <option value="local">Local</option>
                            <option value="imported">Importado</option>
                            </select>
                        </div>

                    
                        <div className='submit-div'>
                            <button type="submit">Buscar</button>
                        </div>
                    </form>

                </aside>
                <section className='search-container'>
                    <input type="text" value={key} onChange={handleInputChange} onKeyDown={handleKeyDown} className='search-name-filter' placeholder='Introduce el nombre del producto'/>
                    <h3 className='my-4 text-xl'>Resultados de "{resultOnEnter}"</h3>
                    <SearchProductGrid>
                        
                    </SearchProductGrid>
                </section>

            </section>

        </Container>
    </Layout>

  )

};

export default Search;
