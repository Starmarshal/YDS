import ContactForm from '@/src/components/Contact form/ContactForm';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Главная'
};

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <section className="text-center py-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Юревич Дмитрий
        </h1>
        <h2 className="text-xl lg:text-2xl text-foreground/80 mb-8">
          Исполнительный Финансовый Директор
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <div className="bg-foreground/5 rounded-lg p-4 backdrop-blur-sm border border-foreground/10">
            <p className="text-lg">📞 +7 (906) 7895344</p>
            <p className="text-sm text-foreground/60">Telegram: @yurdima</p>
          </div>
          <div className="bg-foreground/5 rounded-lg p-4 backdrop-blur-sm border border-foreground/10">
            <p className="text-lg">📧 yurdima@mail.ru</p>
            <p className="text-sm text-foreground/60">предпочитаемый способ связи</p>
          </div>
          <div className="bg-foreground/5 rounded-lg p-4 backdrop-blur-sm border border-foreground/10">
            <p className="text-lg">📍 Москва</p>
            <p className="text-sm text-foreground/60">Готов к командировкам</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 px-10">
          <div className="text-center bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
            <div className="text-2xl font-bold text-blue-500">25+</div>
            <div className="text-sm text-foreground/60">лет опыта</div>
          </div>
          <div className="text-center bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
            <div className="text-2xl font-bold text-green-500">30-50%</div>
            <div className="text-sm text-foreground/60">оптимизация расходов</div>
          </div>
          <div className="text-center bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
            <div className="text-2xl font-bold text-purple-500">10+</div>
            <div className="text-sm text-foreground/60">инвестиционных сделок</div>
          </div>
          <div className="text-center bg-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-foreground/10">
            <div className="text-2xl font-bold text-yellow-500">35+</div>
            <div className="text-sm text-foreground/60">аудиторских проверок</div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl">
        <h3 className="text-2xl font-bold mb-8 text-center">Опыт и Экспертиза</h3>

        <div className="grid md:grid-cols-2 gap-8 px-6">
          <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/10 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4">💼 Ключевые компетенции</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>• Финансовое руководство и стратегия</li>
              <li>• Управление инвестиционными фондами</li>
              <li>• МСФО и корпоративная отчетность</li>
              <li>• Оптимизация бизнес-процессов</li>
              <li>• Командообразование и развитие</li>
              <li>• Управление рисками и комплаенс</li>
            </ul>
          </div>

          <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/10 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4">🎯 Специализации</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">Казначей</span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">Финансовый директор (CFO)</span>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/30">Комплаенс-менеджер</span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-500/30">Финансовый контролер</span>
            </div>

            <h4 className="text-lg font-semibold mt-6 mb-4">🌍 Языки</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm border border-foreground/20">Русский — Родной</span>
              <span className="bg-foreground/10 text-foreground px-3 py-1 rounded-full text-sm border border-foreground/20">Английский — C1 — Продвинутый</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl">
        <div className="px-6">
          <h3 className="text-xl font-bold mb-4 text-center">Текущая позиция</h3>
          <p className="text-lg mb-2 text-center">
            <strong>Финансовый директор (CFO)</strong> в Инвестиционном Холдинге VPE Capital
          </p>
          <p className="text-foreground/60 text-center">Март 2018 — настоящее время • 7 лет 8 месяцев</p>
          <p className="mt-4 text-foreground/80 text-center">
            Управление активами на сумму свыше $8 млн и Фондами на сумму более $150 млн
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Управление командой 7+</span>
            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Оптимизация расходов 30-50%</span>
            <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">10+ инвестиционных сделок</span>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-l from-yellow-500/5 to-green-500/5 rounded-3xl">
        <h3 className="text-2xl font-bold mb-8 text-center">Образование и Сертификаты</h3>

        <div className="grid md:grid-cols-2 gap-6 px-6">
          <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
            <h4 className="text-lg font-semibold mb-4">🎓 Образование</h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">МАТИ - Russian State Technological University</p>
                <p className="text-foreground/60 text-sm">Финансовый менеджер • 2002</p>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
            <h4 className="text-lg font-semibold mb-4">📜 Сертификаты</h4>
            <div className="space-y-2 text-sm">
              <p>• Профессиональный Финансовый Директор (2025)</p>
              <p>• Anti Money Laundering Specialist (2024)</p>
              <p>• DipIFR (RUS) ACCA (2007)</p>
              <p>• Специалист по Кадрам (2022)</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm/>
    </div>
  );
}