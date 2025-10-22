export const AdditionalSkills = () => {
  const additionalSkills = [
    'Промт-инжиниринг для бизнес-задач',
    'Подготовка датасетов для моделей',
    'Файнтюнинг моделей',
    'Разметка данных для CNN и ML моделей',
    'Дизайн в Photoshop и Illustrator',
    'Видеомонтаж',
    'Английский язык — B2'
  ];

  const techStack = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
    { name: 'Telegram', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg' },
    { name: 'WhatsApp API', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'LLM модели', icon: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png' }
  ];

  return (
    <section id="additional" className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Дополнительные навыки
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-3xl">
          AI, работа с данными, дизайн и технический стек
        </p>
        
        {/* Дополнительные навыки */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalSkills.map((skill, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400 dark:before:text-gray-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Стек технологий */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Технологический стек
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="group inline-flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-xl text-sm sm:text-base md:hover:shadow-[0_2px_12px_rgba(0,0,0,0.11)] md:hover:dark:shadow-[0_2px_12px_rgba(255,255,255,0.11)] md:hover:scale-[1.025] transition-all duration-200 md:duration-300 ease-out transform-gpu touch-manipulation"
              >
                <div className={`w-5 h-5 flex-shrink-0 overflow-hidden ${tech.name === 'JavaScript' ? 'rounded-md' : 'rounded-full'}`}>
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-medium text-black dark:text-white">{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

