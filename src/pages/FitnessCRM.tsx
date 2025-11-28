import { ArrowLeft, Users, TrendingUp, Database, Settings, CheckCircle, BarChart3 } from 'lucide-react';
import { useState } from 'react';

export const FitnessCRM = () => {
  const [currentPage, setCurrentPage] = useState<string>('summary');

  const handleBack = () => {
    window.history.back();
  };

  const sections = [
    { id: 'summary', title: 'Summary проекта', icon: BarChart3 },
    { id: 'situation', title: 'Исходная ситуация', icon: Users },
    { id: 'implementation', title: 'Этапы реализации', icon: Settings }
  ];

  const renderSummaryPage = () => (
    <div className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">
          Summary проекта
        </h2>
        
        <div className="space-y-8">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Провёл полный аудит бизнес-процессов элитного фитнес-клуба и выявил узкие места: ручное списание тренировок, дублирование данных, отсутствие контроля и потери выручки.
          </p>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Основные достижения:
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                С нуля спроектировал и внедрил CRM-систему на базе 1С Фитнес Клуб и 1С Тренер, адаптировав логику под реальные процессы
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                Перевёл все учётные операции из бумажного формата в цифровой, обеспечив прозрачный контроль и автоматическое начисление зарплат
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                Оптимизировал взаимодействие между тренерами, администраторами и менеджерами по продажам, устранив ручные ошибки и «человеческий фактор»
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                Создал систему контроля и аналитики, исключив возможность тренировок «мимо кассы»
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                Организовал обучение персонала и внедрение новой системы, обеспечив плавный переход без сбоев в работе клуба
              </li>
            </ul>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Результат</h3>
          <div className="space-y-8">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Бизнес перешёл с ручного учёта на прозрачную цифровую CRM-модель; утечки выручки устранены, операционные затраты снижены, а управляемость процессов выросла в разы.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              После внедрения разработанной мной системы оборот фитнес клуба увеличился на <strong className="text-green-800 dark:text-green-200">37% (+2.4 млн рублей)</strong>
            </p>
          </div>
          
          {/* Placeholder for screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center min-h-[200px]">
              <span className="text-gray-500 dark:text-gray-400 text-center">Скриншот статистики 1</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center min-h-[200px]">
              <span className="text-gray-500 dark:text-gray-400 text-center">Скриншот статистики 2</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Навыки</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              'Бизнес-анализ и описание процессов',
              'Построение и внедрение CRM-систем',
              'Настройка логики и интеграций 1С',
              'Управление изменениями и обучение персонала',
              'Контроль эффективности и аналитика'
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100/70 dark:bg-gray-700/70 border border-gray-200/50 dark:border-gray-600/50 text-black dark:text-white rounded-xl text-base sm:text-lg font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

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
      <section className="px-6 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="pt-12 sm:pt-16 pb-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
              Внедрение CRM-системы и автоматизация бизнес-процессов элитного фитнес-клуба
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6">
              Полный переход с ручного учёта на прозрачную цифровую CRM-модель с увеличением оборота на 37% (+2.4 млн рублей).
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/40 dark:to-emerald-900/30 rounded-xl p-6 border border-green-200 dark:border-green-900/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-green-900/70 dark:text-green-300">Рост оборота</span>
                  </div>
                  <span className="text-4xl font-bold text-green-900 dark:text-green-100">+37%</span>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-900/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-900/70 dark:text-blue-300">Дополнительная выручка</span>
                  </div>
                  <span className="text-4xl font-bold text-blue-900 dark:text-blue-100">+2.4М₽</span>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/40 dark:to-violet-900/30 rounded-xl p-6 border border-purple-200 dark:border-purple-900/50">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-purple-900/70 dark:text-purple-300">Обучено персонала</span>
                  </div>
                  <span className="text-4xl font-bold text-purple-900 dark:text-purple-100">41 чел.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pt-0 pb-4 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Оглавление</h2>
          <div className="flex flex-wrap gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setCurrentPage(section.id)}
                  className={`inline-flex items-center gap-3 px-6 py-4 rounded-lg text-base font-medium transition-all duration-200 ${
                    currentPage === section.id
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                      : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600 active:bg-gray-50 active:dark:bg-gray-600 md:hover:bg-gray-50 md:hover:dark:bg-gray-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      {currentPage === 'summary' && renderSummaryPage()}
      {currentPage === 'situation' && (
        <div className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">
              Исходная ситуация
            </h2>
            
            <div className="space-y-5">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                В фитнес-клубе работали три основные роли:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">Менеджер по продажам</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">оформлял абонементы и продления</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">Администратор</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">регистрировал клиентов, списывал тренировки, контролировал посещения</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">Тренер</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">вёл тренировки, вручную записывал данные о клиентах и тренировках в бумажные табели</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Основные проблемы:
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Учёт вёлся в тетрадях и Excel, без централизованной базы
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Тренеры могли списывать тренировки самостоятельно, без подтверждения администратора
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Возникали «тренировки в долг» — несогласованные занятия до оплаты
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Продажи и посещаемость не отслеживались в реальном времени
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Купленное ПО 1С Фитнес Клуб не использовалось — сотрудники не понимали, как работать с ним
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentPage === 'implementation' && (
        <div className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">
              Этапы реализации
            </h2>
            
            <div className="space-y-8">
              {/* Analytics */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Аналитика и проектирование</h3>
                <ul className="space-y-2 sm:space-y-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Провёл детальный аудит всех рабочих процессов (от приёма клиента до расчёта зарплаты)
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Составил схему взаимодействия отделов и точек контроля данных
                  </li>
                </ul>
              </div>

              {/* Integration */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Настройка и интеграция</h3>
                <ul className="space-y-2 sm:space-y-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Полностью перестроил логику CRM на базе 1С Фитнес Клуб и 1С Тренер
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    <div>
                      <p className="mb-3">Реализовал синхронизацию между администратором и тренером:</p>
                      <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Администратор фиксирует посещение → тренировка автоматически попадает в приложение тренера</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Тренер подтверждает проведённое занятие свайпом → система списывает тренировку и обновляет отчётность</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Настроил автоматическое формирование табелей и отчётов для начисления зарплат
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Создал модуль контроля: управляющая видит все тренировки и может сверять с видеонаблюдением
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Внедрил ограничение на тренировки «в долг» и механизм контроля оплаты
                  </li>
                </ul>
              </div>

              {/* Training */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5">Обучение и внедрение</h3>
                <ul className="space-y-2 sm:space-y-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Провёл индивидуальные и групповые обучения тренеров и администраторов
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Разработал видеоинструкции и краткие памятки по работе в системе
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-1 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    Обеспечил поддержку и контроль внедрения на протяжении первых недель
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

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
              <a href="https://t.me/vsevolodmarchenko" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 active:text-gray-900 active:dark:text-white md:hover:text-gray-900 md:hover:dark:text-white transition-colors font-medium">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};