(function () {
  'use strict';

  var PLUGIN_ID = 'jacred_check';
  var PLUGIN_TITLE = 'Парсеры Jacred';

  var PARAMS = [
    { name: 'Jacred.pro', url: 'https://jacred.pro' },
    { name: 'Jacred.xyz', url: 'https://jacred.xyz' }
  ];

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
      list.innerHTML = '';
      PARAMS.forEach(function (item) {
        var row = document.createElement('div');
        row.textContent = item.name + ' ... проверка';
        row.style.fontSize = '1.1rem';
        row.style.color = 'gray';
        list.appendChild(row);

        fetch(item.url, { method: 'HEAD', mode: 'no-cors' })
          .then(function () {
            row.textContent = item.name + ' ✅ Работает';
            row.style.color = 'green';
          })
          .catch(function () {
            row.textContent = item.name + ' ❌ Не работает';
            row.style.color = 'red';