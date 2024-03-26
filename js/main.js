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
    };
  },

  created: async function () {
    //jsonの読み込み
    const res = await fetch("../cards.json");
    const users = await res.json();
    this.list = users;
  },

  //メソッド定義 v-onディレクティブなど
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
  },

  //算出プロパティ
  computed: {
    userList() {
      let newlist = [];
      //sort機能
      if (this.sort_key != "") {
        let set = 1;
        this.sort_asc ? (set = 1) : (set = -1);

        this.list.sort((a, b) => {
          if (a[this.sort_key] < b[this.sort_key]) return -1 * set;
          if (a[this.sort_key] > b[this.sort_key]) return 1 * set;
          return 0;
        });
      }

      //絞り込み機能
      if (this.isChek) {
        if (this.search_tag == "id") {
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id.indexOf(Number(this.search_text)) > -1) {
              newlist.push(this.list[i]);
            }
          }
        }

        if (this.search_tag == "name") {
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
        }

        if (this.search_tag == "company") {
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].company.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
        }

        if (this.search_tag == "division") {
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].division.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
        }

        if (this.search_tag == "title") {
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title.indexOf(this.search_text) > -1) {
              this.newlist.push(this.list[i]);
            }
          }
        }
      }
      console.log(this.newlist);
      return this.list;
    },
  },
}).mount("#app");
