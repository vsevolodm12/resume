# Настройка Git и первый коммит

Git репозиторий уже инициализирован, но для создания коммита нужно настроить вашу личность.

## Настройка Git

Выполните следующие команды в терминале:

```bash
# Установить имя пользователя (только для этого репозитория)
git config user.name "Всеволод Марченко"

# Установить email (только для этого репозитория)
git config user.email "your-email@example.com"

# Или установить глобально для всех репозиториев
git config --global user.name "Всеволод Марченко"
git config --global user.email "your-email@example.com"
```

## Создание первого коммита

После настройки выполните:

```bash
# Добавить все файлы
git add -A

# Создать коммит
git commit -m "Initial commit: создано резюме с автоматизацией, CRM, EdTech проектами"
```

## Подключение к GitHub

Если вы хотите загрузить проект на GitHub:

```bash
# Создайте новый репозиторий на GitHub, затем выполните:
git remote add origin https://github.com/ваш-username/cv2.git
git branch -M main
git push -u origin main
```

## Полезные команды

```bash
# Проверить статус
git status

# Посмотреть историю коммитов
git log

# Создать новую ветку
git checkout -b feature/new-feature

# Вернуться на главную ветку
git checkout main
```

