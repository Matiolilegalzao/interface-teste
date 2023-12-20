import React from 'react';
//import NavBar from './components/NavBar';
import AppRoutes from './Routes';
import SideBar from './components/SideBar';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
