import { ArrowLeft, GraduationCap, Users, Zap, Shield, Database, Layout } from 'lucide-react';

interface InformeProps {
  onBack: () => void;
}

export default function Informe({ onBack }: InformeProps) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 p-4 z-50 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100 print:hidden">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
        >
          <ArrowLeft size={20} /> Volver al Portal
        </button>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm font-medium text-gray-500 uppercase tracking-widest">Informe Institucional</span>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
          >
            Descargar PDF
          </button>
        </div>
      </nav>

      {/* 1. PORTADA */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-primary text-white p-8 pt-20">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in">
          <img src="/logo.png" alt="Logo Escuela Videla" className="w-24 h-24 md:w-32 md:h-32 mb-6 drop-shadow-2xl" />
          <div className="uppercase tracking-[0.3em] text-sm text-gray-200 mb-4 font-semibold">
            Escuela N° 4-012 · Ing. Ricardo Videla
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-black/20 text-accent-light text-xs font-bold uppercase tracking-widest mb-12">
            <Zap size={14} /> Ecosistema Digital
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300">
            Universo<br/>Videliano
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mb-16">
            La escuela secundaria ahora cuenta con un ecosistema de herramientas digitales diseñadas para transformar la gestión, la convivencia y el aprendizaje.
          </p>

          <div className="bg-white p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://universo-videla.vercel.app/" 
                alt="QR Code" 
                className="w-full h-full object-contain mix-blend-multiply"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center p-1">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-semibold mt-4">Escaneá para acceder al portal</p>
          </div>
          
          <p className="mt-8 text-sm text-accent font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            El universo en un solo lugar
          </p>
        </div>
      </section>

      {/* 2. EL PROBLEMA */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">1</div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Punto de Partida</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">El problema que detectamos</h2>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            La gestión diaria de la escuela presentaba desafíos recurrentes, consultas sin registrar y una falta de integración entre las distintas herramientas utilizadas por la comunidad educativa.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Gestión fragmentada</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Herramientas dispersas que dificultaban el acceso unificado tanto para estudiantes como para docentes. No existía un punto de entrada único.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Dudas recurrentes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Consultas constantes sobre convivencia, bienestar y acreditación de saberes que no quedaban documentadas ni centralizadas.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <h3 className="text-lg font-bold text-primary mb-3">Identidad digital</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A pesar de contar con herramientas tecnológicas, faltaba un espacio que consolidara el sentido de pertenencia y la cultura "videliana".
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-green-50 border border-green-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <Zap size={120} />
             </div>
             <h4 className="font-bold text-primary mb-2 text-lg relative z-10">¿Cómo nace el Universo Videla?</h4>
             <p className="text-gray-700 relative z-10">
               Nace de la necesidad de unificar bajo una sola plataforma web gratuita todas las aplicaciones creadas por la institución. El objetivo fue aprovechar la tecnología para conectar a la comunidad educativa, mejorar la convivencia y facilitar el aprendizaje de manera eficiente e intuitiva.
             </p>
          </div>
        </div>
      </section>

      {/* 3. QUÉ ES */}
      <section className="py-24 px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">2</div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Nuestra Propuesta</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Qué es el Universo Videla</h2>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Es una <strong>constelación de plataformas web</strong> que conecta las distintas áreas de la vida escolar. Es un sistema integral que aborda las dimensiones pedagógicas, socioafectivas y de convivencia escolar.
          </p>
          
          {/* Dashboard Mockup */}
          <div className="bg-primary rounded-3xl p-6 md:p-10 shadow-2xl mb-12 text-white transform hover:scale-[1.02] transition-transform duration-500">
             <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-8">
                <div className="text-2xl font-bold">Universo<span className="font-light">Videla</span></div>
                <div className="hidden sm:flex gap-4 text-sm font-medium opacity-80">
                   <span>Acreditación</span>
                   <span>Convivencia</span>
                   <span>Bienestar</span>
                </div>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                   <div className="text-3xl font-black text-accent-light mb-1">4</div>
                   <div className="text-xs uppercase tracking-wider font-semibold">Plataformas</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                   <div className="text-3xl font-black text-accent-light mb-1">+500</div>
                   <div className="text-xs uppercase tracking-wider font-semibold">Estudiantes</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                   <div className="text-3xl font-black text-accent-light mb-1">24/7</div>
                   <div className="text-xs uppercase tracking-wider font-semibold">Acceso</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                   <div className="text-3xl font-black text-accent-light mb-1">100%</div>
                   <div className="text-xs uppercase tracking-wider font-semibold">Gratuito</div>
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="bg-black/20 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#2D5A27] flex items-center justify-center border border-white/10"><GraduationCap size={20}/></div>
                      <div>
                         <div className="font-bold">Desafío Acreditación</div>
                         <div className="text-xs opacity-70">Acompañamiento pedagógico</div>
                      </div>
                   </div>
                   <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Activo</div>
                </div>
                <div className="bg-black/20 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center border border-white/10"><Users size={20}/></div>
                      <div>
                         <div className="font-bold">Convivencia Videla</div>
                         <div className="text-xs opacity-70">Gestión de la convivencia escolar</div>
                      </div>
                   </div>
                   <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Activo</div>
                </div>
             </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Lo que ven los estudiantes
                </h4>
                <p className="text-gray-600 text-sm">Un panel claro e intuitivo donde pueden hacer consultas, realizar el test de bienestar digital y revisar su progreso en la acreditación de saberes.</p>
             </div>
             <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Lo que ven los docentes
                </h4>
                <p className="text-gray-600 text-sm">Herramientas de seguimiento para validar saberes, registrar incidencias de convivencia y acceder a recursos pedagógicos adaptados al entorno.</p>
             </div>
             <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4A90E2]"></span>
                  Lo que ve la directiva
                </h4>
                <p className="text-gray-600 text-sm">Obtiene una visión panorámica e integrada de la institución para la toma de decisiones, visualizando el estado de la convivencia y el bienestar general.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. FLUJO DE TRABAJO */}
      <section className="py-24 px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">3</div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Cómo funciona</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">El flujo, paso a paso</h2>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            El ecosistema combina la participación activa del estudiante, la agilidad de la plataforma y el acompañamiento del equipo docente.
          </p>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
             
             {/* Step 1 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase tracking-wider">Estudiante</span>
                   </div>
                   <h3 className="font-bold text-gray-900 text-lg mb-2">Accede al portal</h3>
                   <p className="text-gray-600 text-sm">Escanea el código QR institucional o ingresa desde el celular para visualizar todas las plataformas disponibles.</p>
                </div>
             </div>

             {/* Step 2 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-accent text-white font-bold shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase tracking-wider">Interacción</span>
                   </div>
                   <h3 className="font-bold text-gray-900 text-lg mb-2">Elige la plataforma</h3>
                   <p className="text-gray-600 text-sm">Selecciona si necesita consultar un material, reportar una incidencia de convivencia o realizar una evaluación de bienestar.</p>
                </div>
             </div>

             {/* Step 3 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#4A90E2] text-white font-bold shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold uppercase tracking-wider">Sistema</span>
                   </div>
                   <h3 className="font-bold text-gray-900 text-lg mb-2">Registro Centralizado</h3>
                   <p className="text-gray-600 text-sm">La información se procesa y almacena de forma segura, organizando los datos según el contexto de la solicitud.</p>
                </div>
             </div>

             {/* Step 4 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary-dark text-white font-bold shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">4</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase tracking-wider">Equipo Escolar</span>
                   </div>
                   <h3 className="font-bold text-gray-900 text-lg mb-2">Acción y Seguimiento</h3>
                   <p className="text-gray-600 text-sm">El equipo docente revisa los reportes, valida acreditaciones y realiza las intervenciones necesarias basadas en datos reales.</p>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 5. TECNOLOGÍA */}
      <section className="py-24 px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">4</div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Cómo está construido</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tecnología y Escalabilidad</h2>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Todo el ecosistema corre sobre herramientas modernas y de alto rendimiento, demostrando que la innovación en escuelas públicas es posible con herramientas accesibles.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-blue-300 transition-colors">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0"><Layout size={24}/></div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-1">React + TypeScript</h3>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Interfaz de Usuario</p>
                   <p className="text-sm text-gray-600">Aplicaciones web dinámicas y responsivas, optimizadas para móviles y con tipado estricto para mayor seguridad.</p>
                </div>
             </div>
             
             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-green-300 transition-colors">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl shrink-0"><Database size={24}/></div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-1">Supabase</h3>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Base de Datos</p>
                   <p className="text-sm text-gray-600">Backend como servicio que gestiona autenticación y bases de datos en tiempo real para las distintas plataformas.</p>
                </div>
             </div>

             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-purple-300 transition-colors">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl shrink-0"><Zap size={24}/></div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-1">Vercel</h3>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Despliegue y Hosting</p>
                   <p className="text-sm text-gray-600">Alojamiento de última generación, escalable y asegurando que las plataformas estén disponibles 24/7 sin costo.</p>
                </div>
             </div>

             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4 hover:border-orange-300 transition-colors">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0"><Shield size={24}/></div>
                <div>
                   <h3 className="font-bold text-gray-900 mb-1">Diseño Inclusivo</h3>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Experiencia de Usuario</p>
                   <p className="text-sm text-gray-600">UI/UX pensada para que cualquier miembro de la comunidad pueda navegar y utilizar el ecosistema fácilmente.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACTO */}
      <section className="py-24 px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">5</div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Por qué importa</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Impacto en la comunidad</h2>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            El Universo Videliano no es solo un conjunto de links, es una transformación en la forma en la que la escuela se relaciona con sus actores y con la tecnología.
          </p>

          <div className="space-y-6">
             <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-l-[#2D5A27] shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Sentido de pertenencia institucional</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Al tener un portal unificado con el diseño y los valores de la escuela, los estudiantes perciben las herramientas digitales como una extensión de su escuela física.</p>
             </div>
             <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-l-[#C5A059] shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Prevención y bienestar integral</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Las plataformas de Convivencia y el Test de Bienestar Digital permiten detectar de forma temprana problemáticas socioafectivas, brindando información valiosa para actuar a tiempo.</p>
             </div>
             <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-l-[#4A90E2] shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Agilidad administrativa y pedagógica</h3>
                <p className="text-gray-600 text-sm leading-relaxed">La digitalización de los procesos reduce el tiempo de papeleo, permitiendo a los docentes enfocarse en lo verdaderamente importante: enseñar y acompañar.</p>
             </div>
             <div className="p-6 rounded-2xl bg-gray-50 border-l-4 border-l-[#D44D44] shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Un modelo replicable</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Este desarrollo propio demuestra que las escuelas tienen la capacidad de crear soluciones tecnológicas a medida, siendo un faro de innovación para el sistema educativo provincial.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. CONTRAPORTADA */}
      <section className="py-32 px-8 bg-primary text-white text-center relative overflow-hidden">
         {/* Background elements */}
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

         <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300">Universo Videliano</h2>
            <p className="text-xl text-gray-300 mb-12 font-light">
               La escuela en la era digital.<br/>
               Centralizada, eficiente y humana.
            </p>
            
            <button 
               onClick={onBack}
               className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-black/20 mb-20 print:hidden"
            >
               <ArrowLeft size={20} /> Ir al Portal de Aplicaciones
            </button>

            <div className="w-full border-t border-white/20 pt-12 flex flex-col items-center">
               <p className="text-[10px] text-white/50 mb-3 uppercase tracking-[0.2em] font-semibold">Proyecto Institucional</p>
               <p className="text-sm text-white/90 font-bold mb-1">Escuela N° 4-012 "Ing. Ricardo Videla"</p>
               <p className="text-xs text-white/60 mb-6">Luján de Cuyo · Mendoza · Argentina</p>
               
               <p className="text-xs text-white/40 italic">"Serás lo que debas ser."</p>
            </div>
         </div>
      </section>
    </div>
  );
}
