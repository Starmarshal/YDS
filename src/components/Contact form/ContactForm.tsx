export default function ContactForm() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-3xl">
      <div className="text-center px-8">
        <h2 className="text-2xl font-bold mb-4">Готов обсудить сотрудничество</h2>
        <p className="text-lg text-foreground/80 mb-6">
          Всегда открыт для интересных предложений и профессионального диалога
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:yurdima@mail.ru"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Написать на почту
          </a>
          <a
            href="tel:+79067895344"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}