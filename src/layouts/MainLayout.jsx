import React from 'react';
import { Outlet } from 'react-router-dom';

// Componentes del layout, ahora en la misma carpeta para una mejor cohesión
import TopBar from './TopBar';
import LeftSidebar from './LeftSidebar';
import Footer from '../components/Footer';

// El componente de configuración de tema es ahora un componente de UI genérico
import ThemeSettings from '../components/ThemeSettings/ThemeSettings';

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <LeftSidebar />
      <div className="content-page">
        <div className="content">
          <Outlet /> {/* Aquí se renderiza la página anidada */}
        </div>
        <Footer />
      </div>
      <ThemeSettings />
    </>
  );
}