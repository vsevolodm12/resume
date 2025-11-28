export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-6 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          О себе
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-4xl">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {/* Здесь будет ваш текст о себе */}
          </p>
        </div>
      </div>
    </section>
  );
};

