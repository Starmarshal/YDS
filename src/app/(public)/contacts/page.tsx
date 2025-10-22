// app/contacts/page.tsx
import {Metadata} from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Контакты - Юревич Дмитрий'
};

export default function Contacts() {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'yurdima@mail.ru',
      link: 'mailto:yurdima@mail.ru',
      description: 'предпочитаемый способ связи'
    },
    {
      icon: '📞',
      title: 'Телефон',
      value: '+7 (906) 7895344',
      link: 'tel:+79067895344',
      description: 'Telegram: @yurdima'
    },
    {
      icon: '📍',
      title: 'Местоположение',
      value: 'Москва',
      description: 'Готов к командировкам'
    },
    {
      icon: '🌐',
      title: 'Гражданство',
      value: 'Россия',
      description: 'Есть разрешение на работу: Россия'
    },
    {
      icon: '💼',
      title: 'Занятость',
      value: 'Полная занятость',
      description: 'Полный день, не готов к переезду'
    }
  ];

  const professionalProfiles = [
    {
      name: 'Telegram',
      username: '@yurdima',
      link: 'https://t.me/yurdima',
      icon: '📱'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <section className="text-center py-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Контакты</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Всегда открыт для профессионального общения и интересных предложений
        </p>
      </section>

      <section className="py-8 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-3xl">
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Контактная информация</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{contact.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{contact.title}</h3>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-foreground/80 hover:text-blue-500 transition-colors text-lg block mb-1"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground/80 text-lg mb-1">{contact.value}</p>
                    )}
                    <p className="text-sm text-foreground/60">{contact.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Profiles */}
      <section className="py-8 bg-gradient-to-l from-yellow-500/5 to-green-500/5 rounded-3xl">
        <div className="px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Профессиональные профили</h2>
          <div className="flex justify-center">
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10 hover:bg-foreground/10 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="text-2xl">
                  <Image src='telegram.svg' alt='telegram' width={30} height={30} objectFit='contain' quality={100} loading='lazy' />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telegram</h3>
                  <a
                    href="https://t.me/yurdima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-blue-500 transition-colors text-lg block mb-1"
                  >
                    @yurdima
                  </a>
                  <p className="text-sm text-foreground/60">Быстрая связь и общение</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl">
        <div className="px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Доступность</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl mb-3">🕒</div>
              <h3 className="font-semibold mb-2">График работы</h3>
              <p className="text-foreground/80">Полный день</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl mb-3">✈️</div>
              <h3 className="font-semibold mb-2">Командировки</h3>
              <p className="text-foreground/80">Готов к командировкам</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl">
        <div className="px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Быстрая связь</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Предпочитаю начинать общение с email. Отвечаю в течение 24 часов на все профессиональные запросы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yurdima@mail.ru?subject=Предложение о сотрудничестве&body=Здравствуйте, Дмитрий!"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Написать на почту
            </a>
            <a
              href="tel:+79067895344"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Позвонить
            </a>
            <a
              href="https://t.me/yurdima"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-l from-green-500/5 to-blue-500/5 rounded-3xl">
        <div className="px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Время ответа</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl text-green-500 mb-3 flex justify-center items-center">
                <Image src='email.svg' alt='email' width={30} height={30} objectFit='contain' quality={100} loading='lazy' />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-foreground/80">В течение 24 часов</p>
            </div>
            <div className="bg-foreground/5 rounded-xl p-6 backdrop-blur-sm border border-foreground/10">
              <div className="text-2xl text-blue-500 mb-3 flex justify-center items-center">
                <Image src='telegram.svg' alt='telegram' width={30} height={30} objectFit='contain' quality={100} loading='lazy' />
              </div>
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-foreground/80">В течение нескольких часов</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}