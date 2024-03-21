Vue.createApp({
  //データ定義
  data: function () {
    return {
      test: "テスト",
      //配列 通常状態
      list: "",
      //sort用
      sort_key: "",
      sort_asc: true,
      //検索用
      // selected: "", //select
      // search: "", //input
      search_tag: "",
      search_text: "",
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
    //絞り込みワード取得
    searchBt(selected, search) {
      this.search_tag = selected;
      this.search_text = search;
      alert(this.search_tag + this.search_text);
    },
  },

  //算出プロパティ 計算とか変換
  computed: {
    //sort
    users() {
      // if (this.sort_key != "") {
      //   let set = 1;
      //   this.sort_asc ? (set = 1) : (set = -1);

      //   this.list.sort((a, b) => {
      //     if (a[this.sort_key] < b[this.sort_key]) return -1 * set;
      //     if (a[this.sort_key] > b[this.sort_key]) return 1 * set;
      //     return 0;
      //   });
      //   return this.list;
      // } else {
      //   return this.list;
      // }

      //絞り込み
      let tagtest = this.search_tag;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].name == this.search_text) {
          console.log(this.list[i]);
        }
      }
    },
  },
}).mount("#app");
