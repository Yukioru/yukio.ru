# yukio.ru

Персональный сайт, построенный на Next.js с поддержкой нескольких языков.

## 🚀 Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - утилитарный CSS фреймворк
- **next-intl** - интернационализация (поддержка ru/en/ja)
- **Motion** - анимации
- **Bun** - пакетный менеджер и рантайм

## 🛠 Разработка

```bash
# Установка зависимостей
bun install

# Запуск в режиме разработки
bun dev

# Сборка для продакшена
bun run build

# Запуск продакшен версии
bun run start
```

Сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000)

## 🌍 Языки

- 🇷🇺 Русский
- 🇬🇧 English  
- 🇯🇵 日本語

## 📦 Docker

Для запуска в контейнере используйте файлы из папки `docker/`:

```bash
# Разработка
docker-compose -f docker/development/compose.yml up

# Продакшен
docker-compose -f docker/production/compose.yml up
```