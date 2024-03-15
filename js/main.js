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
tableID.addEventListener("click", () => {
  clickCount++;
  console.log("IDクリックテスト");
  console.log(clickCount);
  if (clickCount == 1) {
    alert("ID1回クリック");
  }
  if (clickCount == 2) {
    alert("ID2回クリック");
  }
  if (clickCount == 3) {
    clickCount = 0;
    alert("IDクリック数初期化")
  }
});
