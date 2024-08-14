import React, { useState } from 'react';
import '../styles/userSettings.css'
import Container from "../components/Container";
import Layout from '../components/Layout';

const UserSettings: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo una llamada a una API.
    console.log({ name, email, password, role });
  };

  return (
    <Layout>
        <Container className=''>
          <div className="settings-container">
          <h2>Configuración de cuenta</h2>
          <form className="settings-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Introduce tu nuevo nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Introduce tu nuevo email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Introduce tu nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Rol:</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="buyer">Comprador</option>
                <option value="seller">Vendedor</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Guardar Cambios</button>
          </form>
      </div>
      </Container>
    </Layout>


  );
};

export default UserSettings;
