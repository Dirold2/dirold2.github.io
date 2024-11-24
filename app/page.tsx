import { ProjectCard } from '@/components/project-card'

export default function Page() {
  return (
    <main className='center'>
      <div style={{width: '100%'}}>
        <section>
          <p>
            Разработчик с опытом работы в React, Node.js, Discord.js и Next.js. Создаю современные веб-приложения, Discord-боты и пользовательские интерфейсы.
          </p>
        </section>

        <section>
          <h2>
            Мои проекты
          </h2>
          <div className='center' style={{flexWrap: 'wrap'}}>
            <ProjectCard
              title="Dashboard"
              description="Описание проекта с указанием технологий, задач и достигнутых результатов."
              link="https://github.com/dirold2/dashboard"
            />
            <ProjectCard
              title="ragu2"
              description="Еще один интересный проект, демонстрирующий мои навыки в веб-разработке."
              link="https://github.com/dirold2/ragu2"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

