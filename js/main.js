let tbody = document.getElementById("tbody"); //表取得

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

