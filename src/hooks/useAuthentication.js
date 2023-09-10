import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simula una función de inicio de sesión
  const login = () => {
    // Aquí puedes realizar la lógica de inicio de sesión real, como una llamada a una API o autenticación externa.
    // Una vez que el usuario está autenticado, actualiza el estado del usuario y isAuthenticated.
    const fakeUser = { name: 'John Doe' }; // Simulación de un usuario autenticado
    setUser(fakeUser);
    setIsAuthenticated(true);
  };

  // Simula una función de cierre de sesión
  const logout = () => {
    // Realiza la lógica de cierre de sesión real, como borrar tokens o limpiar el almacenamiento local.
    // Luego, actualiza el estado del usuario y isAuthenticated.
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // Aquí puedes realizar la lógica para verificar si el usuario está autenticado al cargar la aplicación.
    // Por ejemplo, puedes verificar si hay un token de autenticación en el almacenamiento local.
    // Si el usuario ya está autenticado, actualiza el estado del usuario e isAuthenticated en consecuencia.
  }, []);

  return { user, isAuthenticated, login, logout };
};
