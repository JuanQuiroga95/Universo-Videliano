import React, { useState } from 'react';
import { ExternalLink, GraduationCap, Users, Heart, Smartphone, FileText, BookOpen } from 'lucide-react';
import './App.css';
import Informe from './components/Informe';

interface AppLink {
  title: React.ReactNode;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const appLinks: AppLink[] = [
  {
    title: "Desafío Acreditación",
    description: "Plataforma de acompañamiento pedagógico para la acreditación de saberes.",
    url: "https://desafio-acreditacion.vercel.app/",
    icon: <GraduationCap size={32} />,
    color: "#2D5A27"
  },
  {
    title: "Convivencia Videla",
    description: "Espacio dedicado a la gestión y mejora de la convivencia escolar.",
    url: "https://convivencia-videla.vercel.app/",
    icon: <Users size={32} />,
    color: "#C5A059"
  },
  {
    title: "Vínculo Pasantías",
    description: "Portal de conexión y recursos para la comunidad educativa de Mendoza.",
    url: "https://vinculo-mendoza.vercel.app/",
    icon: <Heart size={32} />,
    color: "#D44D44"
  },
  {
    title: (
      <>
        Test<br />
        ¿Quien maneja a quien?
      </>
    ),
    description: "Evaluación anónima para descubrir tu relación con el celular y la tecnología.",
    url: "https://test-bienestar.vercel.app/",
    icon: <Smartphone size={32} />,
    color: "#8B5CF6"
  },
  {
    title: "Leer en voz alta",
    description: "Herramienta para practicar y mejorar la lectura y fluidez en voz alta.",
    url: "https://fluidez-flame.vercel.app/",
    icon: <BookOpen size={32} />,
    color: "#3B82F6"
  }
];

function App() {
  const [view, setView] = useState<'home' | 'informe'>('home');

  if (view === 'informe') {
    return <Informe onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="bg-gradient" />
      
      {/* Hero Section */}
      <header className="pt-16 pb-12 text-center animate-fade-in">
        <div className="container">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
            <img 
              src="/logo.png" 
              alt="Logo Escuela Videla" 
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Escuela Videla
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto font-light">
            Esc. N° 4-012 Ing. Ricardo Videla
          </p>
          <div className="h-1 w-24 bg-accent mx-auto mt-8 rounded-full mb-8" />
          
          <button 
            onClick={() => setView('informe')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-full text-primary font-bold transition-all hover:-translate-y-1"
          >
            <FileText size={18} />
            Ver Informe Institucional
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {appLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass p-8 rounded-3xl flex flex-col items-center text-center group animate-fade-in delay-${index + 1}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div 
                className="mb-6 p-4 rounded-2xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${link.color}15`, color: link.color }}
              >
                {link.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                {link.title}
              </h3>
              <p className="text-text-muted mb-8 text-lg font-light leading-relaxed">
                {link.description}
              </p>
              <div className="mt-auto flex items-center gap-2 text-accent font-semibold group-hover:translate-x-1 transition-transform">
                Acceder ahora <ExternalLink size={18} />
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-glass-border glass mt-20">
        <div className="container text-center">
          <p className="text-text-muted font-medium">
            © 2026 Escuela Videla. Todos los derechos reservados.
          </p>
          <p className="text-sm text-text-muted/60 mt-2">
            "Serás lo que debas ser."
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
