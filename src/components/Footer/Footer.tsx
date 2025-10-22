import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">
                Copyright © 2025 FinFlexity. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Создаем цифровые решения для вашего бизнеса
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-medium mb-3">
                Я в соцсетях
              </p>
              <div className="flex space-x-3">
                <Link
                  href="https://t.me/yurdima"
                  target="_blank"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Image
                    src="/telegram.svg"
                    alt="Telegram"
                    width="24"
                    height="24"
                    className="hover:scale-110 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 text-sm font-medium">
              Мои контакты
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs">
                  Телефон для сотрудничества:
                </p>
                <a
                  href="tel:+79067895344"
                  className="text-white text-sm hover:text-blue-400 transition-colors block mt-1"
                >
                  +7 (906) 789-53-44
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-xs">
                  Почта для сотрудничества:
                </p>
                <a
                  href="mailto:yurdima@mail.ru"
                  className="text-white text-sm hover:text-blue-400 transition-colors block mt-1"
                >
                  yurdima@mail.ru
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400 text-sm font-medium">
              Информация
            </p>
            <div className="flex flex-col space-y-3">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-gray-500 text-xs text-center">
            Все права защищены. Любое копирование материалов запрещено.
          </p>
        </div>
      </div>
    </footer>
  );
}