Vue.createApp({
  //データ定義
  data: function () {
    return {
      test: "テスト",
      //配列
      list: "",
      newlist: [],
      search_list: [],
      //sort用
      sort_key: "",
      sort_asc: true,
      //検索用
      search_tag: "",
      search_text: "",
      //絞り込み機能切り替え
      isChek: false,
      //新規情報
      //input初期値
      Aname: " ",
      Acompany: " ",
      Adivision: " ",
      Atitle: " ",
      //バリデーション
      add_name: "",
      add_company: "",
      add_division: "",
      add_title: "",
      addChek: false,
      textChek: true,
      //バリデーションエラーメッセージ
      nameError: "",
      companyError: "",
      divisionError: "",
      titlenameError: "",
    };
  },

  created: async function () {
    //jsonの読み込み
    const res = await fetch("../cards.json");
    const users = await res.json();
    this.list = users;
  },

  //メソッド定義
  methods: {
    //sort 列指定+昇順降順切り替え
    sortBy(key) {
      this.sort_key === key
        ? (this.sort_asc = !this.sort_asc)
        : (this.sort_asc = true);
      this.sort_key = key;
    },

    //絞り込み
    searchBt(selected, search) {
      this.search_tag = selected;
      this.search_text = search;
      this.isChek = true;
      //クリックで検索ワード取得
      //isChek切り替えで絞り込み機能ON
    },

    //新規情報追加 入力ワード取得
    addBt(Aname, Acompany, Adivision, Atitle) {
      this.add_name = Aname;
      this.add_company = Acompany;
      this.add_division = Adivision;
      this.add_title = Atitle;
      this.addChek = true;

      console.log(
        "名前＝" +
          this.add_name +
          " 会社名＝" +
          this.add_company +
          " 部署名＝" +
          this.add_division +
          " 役職名＝" +
          this.add_title
      );
    },
  },

  //算出プロパティ
  computed: {
    userList() {
      //絞り込み機能
      if (this.isChek) {
        if (this.search_tag == "id") {
          this.newlist = [];
          for (let i = 0; i < this.list.length; i++) {
            if (String(this.list[i].id).indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
          isChek = false;
        }

        if (this.search_tag == "name") {
          this.newlist = [];
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
          isChek = false;
        }

        if (this.search_tag == "company") {
          this.newlist = [];
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].company.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
          isChek = false;
        }

        if (this.search_tag == "division") {
          this.newlist = [];
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].division.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
          isChek = false;
        }

        if (this.search_tag == "title") {
          this.newlist = [];
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
          isChek = false;
        }

        //sort機能
        if (this.sort_key != "") {
          let set = 1;
          this.sort_asc ? (set = 1) : (set = -1);

          this.newlist.sort((a, b) => {
            if (a[this.sort_key] < b[this.sort_key]) return -1 * set;
            if (a[this.sort_key] > b[this.sort_key]) return 1 * set;
            return 0;
          });
        }
      } else {
        //絞り込みボタンをクリックしていない時
        this.newlist = this.list;

        //sort機能
        if (this.sort_key != "") {
          let set = 1;
          this.sort_asc ? (set = 1) : (set = -1);

          this.newlist.sort((a, b) => {
            if (a[this.sort_key] < b[this.sort_key]) return -1 * set;
            if (a[this.sort_key] > b[this.sort_key]) return 1 * set;
            return 0;
          });
        }
      }

      //新規情報追加
      if (this.addChek) {
        //名前バリデーション
        if (this.add_name.match(/^[ -~]*$/)) {
          //ひらがな・カタカナ・漢字が入っていたらオッケー
          this.textChek = false;
          this.nameError = "ひらがな・カタカナ・漢字で入力してください";
        } else {
          alert("名前正常");
        }

        //会社名バリデーション
        if (this.add_company.match(/^[ -~]*$/)) {
          //記号と数字が入っていたらエラー
          this.textChek = false;
          this.companyError = "Error";
        } else {
          alert("会社名正常");
        }

        //部署名バリデーション
        if (this.add_division.match(/^[ -~]*$/)) {
          //記号と数字が入っていたらエラー
          this.textChek = false;
          this.divisionError = "Error";
        } else {
          alert("部署名正常");
        }

        //役職バリデーション
        if (this.add_title.match(/^[ -~]*$/)) {
          //記号と数字が入っていたらエラー 空欄OKにしたい
          this.textChek = false;
          this.titlenameError = "Error";
        } else {
          alert("役職正常");
        }

        if (this.textChek) {
          alert("みんなオッケー");
          //ここでnewlistにpushすればいいのかな？

          //listの最後のIDを取得 + 1 でID番号を作りたい
          const lastID = this.list.slice(-1)[0];
          const newID = lastID.id + 1;
          console.log(
            newID +
              this.add_name +
              this.add_company +
              this.add_division +
              this.add_title
          );
          
          this.newlist.push();

          addChek = false;
        } else {
          alert("入力拒否");
          this.textChek = true;
          addChek = false;
        }
      }
      return this.newlist;
    },
  },
}).mount("#app");
