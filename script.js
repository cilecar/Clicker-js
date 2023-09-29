let valueClick = parseInt(localStorage.getItem("valueClick")) || 0;
let btnValue = parseInt(localStorage.getItem("btnValue")) || 1;
let PointInSecond = parseInt(localStorage.getItem("PointInSecond")) || 1;

function saveValues() {
  localStorage.setItem("valueClick", valueClick);
  localStorage.setItem("btnValue", btnValue);
  localStorage.setItem("PointInSecond", PointInSecond);
} // Сохранение значений в локальном хранилище

document.getElementById("valueClick").innerHTML = valueClick; // Отрисовка очков при загрузке страницы
document.getElementById("btnValue").innerHTML = btnValue; // Отрисовка очков за нажатие при загрузке страницы
document.getElementById("pointPerSecond").innerHTML = PointInSecond; // Отрисовка очков в секунду при загрузке страницы


function animateValue(id, start, end, duration) {
  let startTimestamp = null;
  const element = document.getElementById(id);

  function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.innerHTML = value.toLocaleString();
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  }

  window.requestAnimationFrame(step);
}

animateValue('valueClick', 0, valueClick, 1000);


function deleteProgress() {
  var resultConfirm = confirm("Вы действительно хотите удалить прогресс?");
  if (resultConfirm == true) {
    localStorage.removeItem("valueClick");
    localStorage.removeItem("btnValue");
    localStorage.removeItem("PointInSecond");
    valueClick = 0;
    btnValue = 1;
    PointInSecond = 1;
    document.getElementById("valueClick").innerHTML = valueClick;
    document.getElementById("btnValue").innerHTML = btnValue;
  } else {
    return false;
  }
} // Кнопка удаления прогресса

function addClick() {
  valueClick += btnValue;
  document.getElementById("valueClick").innerHTML = valueClick;
  saveValues();
} // Кнопка для добавления клика

function addOneClickValue() {
  if (valueClick >= 30) {
    valueClick -= 30;
    btnValue += 1;
    document.getElementById("btnValue").innerHTML = btnValue;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +1 к клику

function addTwoClickValue() {
  if (valueClick >= 100) {
    valueClick -= 100;
    btnValue += 2;
    document.getElementById("btnValue").innerHTML = btnValue;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +2 к клику

function addFiveClickValue() {
  if (valueClick >= 300) {
    valueClick -= 300;
    btnValue += 5;
    document.getElementById("btnValue").innerHTML = btnValue;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +5 к клику

function addTenClickValue() {
  if (valueClick >= 1000) {
    valueClick -= 1000;
    btnValue += 10;
    document.getElementById("btnValue").innerHTML = btnValue;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +10 к клику

function addTwentyClickValue() {
  if (valueClick >= 2200) {
    valueClick -= 2200;
    btnValue += 20;
    document.getElementById("btnValue").innerHTML = btnValue;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +20 к клику

function addFiftyClickValue() {
  if (valueClick >= 5500) {
    valueClick -= 5500;
    btnValue += 50;
    document.getElementById("btnValue").innerHTML = btnValue;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +50 к клику

function pointPerSecond() {
  valueClick += PointInSecond;
  document.getElementById("pointPerSecond").innerHTML = PointInSecond;
  document.getElementById("valueClick").innerHTML = valueClick;
  saveValues();
}
setInterval(pointPerSecond, 1000); // Добавление очков в секунду

function addOnePointInSecond() {
  if (valueClick >= 90) {
    valueClick -= 90;
    PointInSecond += 1;
    document.getElementById('pointPerSecond').innerHTML = PointInSecond;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +1 к пассивным очкам в секунду

function addTwoPointInSecond() {
  if (valueClick >= 300) {
    valueClick -= 300;
    PointInSecond += 2;
    document.getElementById('pointPerSecond').innerHTML = PointInSecond;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +2 к пассивным очкам в секунду

function addFivePointInSecond() {
  if (valueClick >= 900) {
    valueClick -= 900;
    PointInSecond += 5;
    document.getElementById('pointPerSecond').innerHTML = PointInSecond;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +5 к пассивным очкам в секунду

function addTenPointInSecond() {
  if (valueClick >= 3000) {
    valueClick -= 3000;
    PointInSecond += 10;
    document.getElementById('pointPerSecond').innerHTML = PointInSecond;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +10 к пассивным очкам в секунду

function addTwentyPointInSecond() {
  if (valueClick >= 6600) {
    valueClick -= 6600;
    PointInSecond += 20;
    document.getElementById('pointPerSecond').innerHTML = PointInSecond;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +20 к пассивным очкам в секунду

function addFiftyPointInSecond() {
  if (valueClick >= 16500) {
    valueClick -= 16500;
    PointInSecond += 50;
    document.getElementById('pointPerSecond').innerHTML = PointInSecond;
    document.getElementById("valueClick").innerHTML = valueClick;
    saveValues();
  } else {
    alert("Не хватает очков!");
  }
} // Обновление +50 к пассивным очкам в секунду