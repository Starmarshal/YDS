import {Metadata} from 'next';
import ContactForm from '@/src/components/Contact form/ContactForm';

export const metadata: Metadata = {
  title: 'Обо мне - Юревич Дмитрий'
};

export default function About() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
    <section className="text-center py-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Обо мне</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Финансовый директор с 25-летним опытом работы в международных компаниях
          и инвестиционных холдингах. Специализируюсь на стратегическом развитии,
          оптимизации бизнес-процессов и повышении финансовой эффективности.
        </p>
      </section>

      <section className="py-8 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl">
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Мой подход к работе</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
                <h3 className="text-lg font-semibold mb-3">🎯 Ценности</h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Прозрачность и честность в отчетности</li>
                  <li>• Стратегическое мышление и долгосрочное планирование</li>
                  <li>• Эффективное управление рисками</li>
                  <li>• Развитие команды и mentorship</li>
                  <li>• Постоянное профессиональное развитие</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
                <h3 className="text-lg font-semibold mb-3">💪 Сильные стороны</h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  <li>• Лидерство и управление командами 7+ человек</li>
                  <li>• Глубокая экспертиза в МСФО и РСБУ</li>
                  <li>• Опыт работы в международных юрисдикциях</li>
                  <li>• Умение работать в кризисных ситуациях</li>
                  <li>• Техническая грамотность и автоматизация процессов</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-l from-yellow-500/5 to-green-500/5 rounded-3xl">
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Ключевые достижения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl font-bold text-blue-500 mb-2">30-50%</div>
              <p className="text-sm text-foreground/80">Ежегодная оптимизация расходов в инвестиционном холдинге</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl font-bold text-green-500 mb-2">10+</div>
              <p className="text-sm text-foreground/80">Успешных инвестиционных сделок с фондами ОАЭ</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl font-bold text-purple-500 mb-2">35+</div>
              <p className="text-sm text-foreground/80">Аудиторских и налоговых проверок по МСФО и РСБУ</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl font-bold text-yellow-500 mb-2">50%</div>
              <p className="text-sm text-foreground/80">Сокращение времени подготовки отчетности через автоматизацию</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl font-bold text-red-500 mb-2">$150M+</div>
              <p className="text-sm text-foreground/80">Управление активами инвестиционных фондов</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 text-center backdrop-blur-sm border border-foreground-10">
              <div className="text-2xl font-bold text-indigo-500 mb-2">7+</div>
              <p className="text-sm text-foreground/80">Лет на позиции Финансового директора в международном холдинге</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl">
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Профессиональные навыки</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">📊 Финансовый менеджмент</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">МСФО</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">РСБУ</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Бюджетирование</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Финансовый анализ</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Управление рисками</span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">Казначейство</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">🛠 Технические навыки</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">1С УПП</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">SAP/BSC</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Hyperion</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Power BI</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">MS Project</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Redmine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-3xl">
        <div className="px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Личные интересы</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
              <h3 className="text-lg font-semibold mb-3">🎾 Спорт</h3>
              <p className="text-foreground/80">Теннис, волейбол</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
              <h3 className="text-lg font-semibold mb-3">🎵 Музыка</h3>
              <p className="text-foreground/80">Люблю музыку разных жанров</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
              <h3 className="text-lg font-semibold mb-3">🌍 Языки</h3>
              <p className="text-foreground/80">Изучаю арабский язык</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm/>
    </div>
  );
}