# vehiclesDemoTest

тестовое задание

## Замечания по проекту

1. Проект выполнен на vue версии 3.4.29 с использованием Pinia в качестве стейт менеджера и TypeScript в качестве языка
   программирования. В системе использована node v20.17.0
2. Так как апи выдаёт, в том числе, невалидные результаты — с отсутствующими описаниями модели и бренда, то для
   пагинации пришлось загружать весь объём информации, фильтровать от неликвида, и уже потом делать пагинацию и
   формировать выдачу.
3. Фото отображается только если оно "обработано и модерировано".
4. Так как апи делает поиск не только по полю "VIN", но и по бренду и по модели, а в подсказке поля говорится о том, что
   поиск должен быть во VIN — опять же пришлось дофильтровывать список вручную.
5. Нижнее поле в дизайне (*30/30 и подобное + "осталось 3 дня"*) не получилось сопоставить с данными, которые выдаёт
   апи.

   Я спросил что использовать для формирования этого поля в телеграмме, который мне был выдан для выдачи
   результатов. Ответа я не получил, и чтобы не затягивать сдачу тестового задания — выдаю со следующими допущениями:

   5.1. цифра слева в прямоугольнике — это количество фотографий. Не знаю почему 30 — это очень хорошая цифра,
   при которой аж выдают зелёную галочку, но больше ничего на ум не приходит.

   5.2. срок размещения объявления — 2 года (просто подобрал эмпирическим путём, чтобы оставалось вменяемое
   количество времени). Соответственно в правом углу карточки пишу количество дней до истечения двухлетнего
   срока размещения карточки.

**© Boss Soft**