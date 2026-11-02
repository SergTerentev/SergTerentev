// Google Apps Script для анкеты свадебного приглашения Сергея и Полины.
// Вставьте целиком вместо старого кода (Расширения → Apps Script), сохраните
// и разверните заново: Развернуть → Управление развертываниями → ✎ → Новая версия.

const SHEET_NAME = ''; // имя листа; пусто — первый лист таблицы
const HEADERS = ['Дата', 'Имя', 'Придёт', 'Сопровождающий', 'Напитки', 'Питание/аллергии', 'Комментарий'];
const DRINKS = {
  wine_red: 'вино красное',
  wine_white: 'вино белое',
  champagne: 'вино игристое',
  vodka: 'водка',
  conyuack: 'коньяк',
  whisky: 'виски',
  nonalcoholic: 'безалкогольное'
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();
    const now = new Date();
    const coming = data.attendance === 'yes' ? 'да' : 'нет';
    const drinks = list => (list || []).map(key => DRINKS[key] || key).join(', ');

    // Гость, который заполнил анкету
    sheet.appendRow([now, data.name || '', coming, data.plusOne || '', drinks(data.drinks), data.dietary || '', data.comments || '']);

    // Спутник (спутница) приходит отдельным запросом и попадает сюда же,
    // в колонке «Сопровождающий» у него стоит «вторая половинка: <имя гостя>».

    return json_({ result: 'success' });
  } catch (err) {
    return json_({ result: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
