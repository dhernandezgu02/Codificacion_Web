import React from 'react';

interface HomeMenuProps {
  onSelectOption: (option: 'codify' | 'review') => void;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ onSelectOption }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Codificación Automática de Encuestas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utiliza inteligencia artificial avanzada para procesar y analizar respuestas abiertas de manera rápida y precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Option 1: Codify New Responses */}
          <button
            onClick={() => onSelectOption('codify')}
            className="group relative flex flex-col items-center p-8 bg-white border-2 border-blue-100 rounded-xl hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
              <svg
                className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              Codificar Nuevas Respuestas
            </h3>
            <p className="text-gray-500 text-center leading-relaxed">
              Sube tus archivos de respuestas y códigos para iniciar un nuevo proceso de codificación automática.
            </p>
          </button>

          {/* Option 2: Review Existing Coding */}
          <button
            onClick={() => onSelectOption('review')}
            className="group relative flex flex-col items-center p-8 bg-white border-2 border-purple-100 rounded-xl hover:border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
              <svg
                className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
              Revisar Codificación Existente
            </h3>
            <p className="text-gray-500 text-center leading-relaxed">
              Sube archivos ya codificados para que la IA verifique la calidad y sugiera correcciones.
            </p>
          </button>
        </div>

        <div className="mt-12 text-center border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Centro Nacional de Consultoría. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
