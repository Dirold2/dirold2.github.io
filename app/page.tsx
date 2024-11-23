import { ProjectCard } from '@/components/project-card'
import { ContactButton } from '@/components/contact-button'
import { AnimatedText } from '@/components/animated-text'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="w-full max-w-5xl space-y-24">
        {/* Header Section */}
        <section className="text-center space-y-6">
          <AnimatedText className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Привет, я Dirold2 👋
          </AnimatedText>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Разработчик с опытом работы в React, Node.js, Discord.js и Next.js. Создаю современные веб-приложения, Discord-боты и пользовательские интерфейсы.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center">
            Мои проекты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Dashboard"
              description="Описание проекта с указанием технологий, задач и достигнутых результатов."
              link="https://github.com/dashboard"
            />
            <ProjectCard
              title="ragu2"
              description="Еще один интересный проект, демонстрирующий мои навыки в веб-разработке."
              link="https://github.com/ragu2"
            />
            {/* Add more ProjectCard components as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center">
            Контакты
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactButton
              href="https://github.com/dirold2"
              icon="github"
              label="GitHub"
            />
            <ContactButton
              href="mailto:i@dirold2.ru"
              icon="envelope"
              label="i@dirold2.ru"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

