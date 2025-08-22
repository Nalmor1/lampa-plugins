(function () {
  'use strict';

  var PLUGIN_ID = 'jacred_check';
  var PLUGIN_TITLE = 'Парсеры Jacred';

  // Наши парсеры (фиксированный список)
  var PARAMS = [
    { name: 'Jacred.pro', url: 'https://jacred.pro' },
    { name: 'Jacred.xyz', url: 'https://jacred.xyz' }
  ];

  function showToast(msg) {
    try {
      if (window.Lampa &amp;&amp; Lampa.Noty) Lampa.Noty.show(msg);
      else console.log('[PLUGIN]', msg);
    } catch (e) {
      console.log('[PLUGIN] Toast error', e);
    }
  }

  function createScreen() {
    var root = document.createElement('div');
    root.style.padding = '2rem';

    var title = document.createElement('div');
    title.textContent = 'Статус парсеров Jacred';
    title.style.fontSize = '1.5rem';
    title.style.marginBottom = '1rem';

    var list = document.createElement('div');
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '0.5rem';

    function checkAll() {
      list.innerHTML = ''; // очистка
      PARAMS.forEach(function (item) {
        var row = document.createElement('div');
        row.textContent = item.name + ' ... проверка';
        row.style.fontSize = '1.1rem';
        row.style.color = 'gray';
        list.appendChild(row);

        fetch(item.url, { method: 'HEAD', mode: 'no-cors' })