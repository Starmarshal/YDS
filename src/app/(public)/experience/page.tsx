import {Metadata} from 'next';
import {EXPERINCE} from '@/src/shared/data/experience.data';

export const metadata: Metadata = {
  title: 'Опыт работы - Юревич Дмитрий'
};

export default function Experience() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <section className="text-center py-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Опыт работы</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          25+ лет профессионального опыта в финансовом управлении,
          инвестиционных холдингах и международных компаниях
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="bg-foreground/5 rounded-lg px-4 py-2">
            <div className="font-bold text-blue-500">25+</div>
            <div className="text-sm text-foreground/60">лет опыта</div>
          </div>
          <div className="bg-foreground/5 rounded-lg px-4 py-2">
            <div className="font-bold text-green-500">{EXPERINCE.length}</div>
            <div className="text-sm text-foreground/60">позиций</div>
          </div>
          <div className="bg-foreground/5 rounded-lg px-4 py-2">
            <div className="font-bold text-purple-500">8+</div>
            <div className="text-sm text-foreground/60">лет CFO</div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        {EXPERINCE.map((job) => (
          <div
            key={job.id}
            className="bg-foreground/5 rounded-2xl p-8 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/10 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-semibold text-blue-500">{job.period}</span>
                  <span className="text-sm text-foreground/60">({job.duration})</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{job.position}</h3>
                <div className="mb-2">
                  <p className="font-semibold text-lg">{job.company}</p>
                  {job.website && (
                    <a
                      href={`https://${job.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline block"
                    >
                      {job.website}
                    </a>
                  )}
                  {job.location && (
                    <p className="text-sm text-foreground/70">{job.location}</p>
                  )}
                  {job.industry && (
                    <p className="text-sm text-foreground/60">{job.industry}</p>
                  )}
                </div>
              </div>
            </div>

            {job.description && (
              <p className="text-foreground/80 mb-4 italic">{job.description}</p>
            )}

            <div>
              <h4 className="font-semibold mb-3 text-foreground/80">Ключевые достижения:</h4>
              <ul className="space-y-2">
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground/80">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="py-8 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl">
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Обзор компетенций</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <h3 className="font-semibold mb-3">🏢 Отрасли</h3>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>Инвестиционные холдинги</p>
                <p>Сельское хозяйство</p>
                <p>Медицина и фармацевтика</p>
                <p>Металлургия</p>
                <p>Консалтинг и аудит</p>
                <p>СМИ и телерадиовещание</p>
              </div>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <h3 className="font-semibold mb-3">📈 Функции</h3>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>Финансовый директор (CFO)</p>
                <p>Руководитель отчетности</p>
                <p>Финансовый контролер</p>
                <p>Казначей</p>
                <p>Комплаенс-менеджер</p>
                <p>Финансовый аналитик</p>
              </div>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <h3 className="font-semibold mb-3">🌍 География</h3>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>Россия (Москва)</p>
                <p>Международные юрисдикции</p>
                <p>Испания, Кипр, Казахстан</p>
                <p>Кайманы, Гернси</p>
                <p>Страны СНГ</p>
                <p>Удаленная работа</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-3xl">
        <div className="px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Профессиональная эволюция</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
              <div className="text-lg font-bold text-blue-500 mb-2">2000-2007</div>
              <p className="text-sm text-foreground/80">Старт карьеры в аудите и консалтинге</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
              <div className="text-lg font-bold text-green-500 mb-2">2007-2013</div>
              <p className="text-sm text-foreground/80">Экспертиза в МСФО и корпоративной отчетности</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
              <div className="text-lg font-bold text-purple-500 mb-2">2013-2018</div>
              <p className="text-sm text-foreground/80">Руководство отделами и проектами</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
              <div className="text-lg font-bold text-yellow-500 mb-2">2018-н.в.</div>
              <p className="text-sm text-foreground/80">Финансовый директор международного холдинга</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}