import { ArrowLeft } from 'lucide-react';

export const EmployeeTraining = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={handleBack}
                className="group flex items-center gap-2 px-2 sm:px-3 py-2 text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white md:hover:text-gray-900 md:hover:dark:text-white active:bg-gray-50 active:dark:bg-gray-800 md:hover:bg-gray-50 md:hover:dark:bg-gray-800 rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 md:group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="text-sm font-medium hidden sm:inline">Назад</span>
              </button>
              <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Всеволод Марченко</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
              Создание системы обучения и адаптации сотрудников оконной компании
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Подробное описание проекта будет добавлено позже.
            </p>
          </div>

          {/* Placeholder Content */}
          <div className="bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-12 text-center">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Контент в разработке
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-sm font-bold text-white dark:text-black">ВМ</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Всеволод Марченко</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2025</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://t.me/vsevolodmarchenko" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white md:hover:text-gray-900 md:hover:dark:text-white md:hover:scale-[1.025] transition-all duration-200 md:duration-300 ease-out font-medium">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

