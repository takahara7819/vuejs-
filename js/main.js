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
//IDsort
let idCount = 0; //クリック数によって昇順/降順を切り替える
tableID.addEventListener("click", async () => {
  //sort用にjson再取得
  const sortApi = await callApi();
  //要素削除
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  idCount++;
  if (idCount == 1) {
    //昇順
    sortApi.sort(function (x, y) {
      return x.id - y.id;
    });
  }
  if (idCount == 2) {
    //降順
    sortApi.sort(function (x, y) {
      return y.id - x.id;
    });
    idCount = 0;
  }
  // if (idCount == 3) {
  // idCount = 0;
  // }

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

//Namesort
let NameCount = 0;
tableName.addEventListener("click", async () => {
  const sortApi = await callApi();
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  NameCount++;
  if (NameCount == 1) {
    sortApi.sort(function (x, y) {
      return x.name.localeCompare(y.name, "ja");
    });
  }
  if (NameCount == 2) {
    sortApi.sort(function (x, y) {
      return y.name.localeCompare(x.name, "ja");
    });
    NameCount = 0;
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

//companysort
let companyCount = 0;
tableCom.addEventListener("click", async () => {
  const sortApi = await callApi();
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  companyCount++;
  if (companyCount == 1) {
    sortApi.sort(function (x, y) {
      return x.company.localeCompare(y.company, "ja");
    });
  }
  if (companyCount == 2) {
    sortApi.sort(function (x, y) {
      return y.company.localeCompare(x.company, "ja");
    });
    companyCount = 0;
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

//divisionsort
let divisionCount = 0;
tableDivi.addEventListener("click", async () => {
  const sortApi = await callApi();
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  divisionCount++;
  if (divisionCount == 1) {
    sortApi.sort(function (x, y) {
      return x.division.localeCompare(y.division, "ja");
    });
  }
  if (divisionCount == 2) {
    sortApi.sort(function (x, y) {
      return y.division.localeCompare(x.division, "ja");
    });
    divisionCount = 0;
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

//titlesort
let titleCount = 0;
tableTi.addEventListener("click", async () => {
  const sortApi = await callApi();
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  titleCount++;
  if (titleCount == 1) {
    sortApi.sort(function (x, y) {
      return x.title.localeCompare(y.title, "ja");
    });
  }
  if (titleCount == 2) {
    sortApi.sort(function (x, y) {
      return y.title.localeCompare(x.title, "ja");
    });
    titleCount = 0;
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
