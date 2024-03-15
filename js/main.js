let tbody = document.getElementById("tbody"); //表取得

let tableID = document.getElementById("tableID"); //sortボタン用
let tableName = document.getElementById("tableName"); //sortボタン用
let tableCom = document.getElementById("tableCom"); //sortボタン用
let tableDivi = document.getElementById("tableDivi"); //sortボタン用
let tableTi = document.getElementById("tableTi"); //sortボタン用

//jsonファイル読み込み
async function callApi() {
  const res = await fetch("../cards.json");
  const uesrs = await res.json();
  return uesrs;
}

//jsonファイルをhtml表示
callApi().then((uesrs) => {
  for (let i = 0; i < uesrs.length; i++) {
    const uesrsTxt = uesrs[i];
    tbody.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${uesrsTxt.id}</td>
        <td>${uesrsTxt.name}</td>
        <td>${uesrsTxt.company}</td>
        <td>${uesrsTxt.division}</td>
        <td>${uesrsTxt.title}</td>
        </tr>`
    );
  }
});

//sort機能
let clickCount = 0; //クリック数によって昇順/降順を切り替える
tableID.addEventListener("click", async () => {
  //sort用にjson再取得
  const sortApi = await callApi();
  //要素削除
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  clickCount++;
  if (clickCount == 1) {
    //ID昇順
    sortApi.sort(function (x, y) {
      return x.id - y.id;
    });
  }
  if (clickCount == 2) {
    //ID降順
    sortApi.sort(function (x, y) {
      return y.id - x.id;
    });
  }
  if (clickCount == 3) {
    //ID通常 これいらなそう
    clickCount = 0;
    const unsort = await callApi();
  }

  for (let i = 0; i < sortApi.length; i++) {
    const uesrsTxt = sortApi[i];
    tbody.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${uesrsTxt.id}</td>
        <td>${uesrsTxt.name}</td>
        <td>${uesrsTxt.company}</td>
        <td>${uesrsTxt.division}</td>
        <td>${uesrsTxt.title}</td>
        </tr>`
    );
  }
});
