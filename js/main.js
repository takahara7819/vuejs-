Vue.createApp({
  data: function () {
      return { //dataはreturnの中に追記していく
          list: "",   //ggると[]が多いけど""でいけるらしい
          sort_key: "",   //どこでsortを指定するのかに使う 初期値ブランク
          sort_asc: true, //昇順・降順切り替え用
      }
  },

  created: async function () {    //jsonの読み込み listに配列をいれたよ
      const res = await fetch('../cards.json');
      const users = await res.json();
      this.list = users;
  },

  methods: {  //methodsの横にはfunction書かない？
      sortBy(key) {
          this.sort_key === key    //クリックされた回数がこれでわかるらしい
              ? (this.sort_asc = !this.sort_asc)
              : (this.sort_asc = true);

          this.sort_key = key;    //クリックされたthをsort_keyに保存する
      },
  },

  computed: {
      sort_users() { //v-forのlist→sort_usersに置き換えて表示可能
          if (this.sort_key != "") {
              let set = 1;
              this.sort_asc ? (set = 1) : (set = -1);
              //↑条件 (三項) 演算子 「条件 ? (tureの処理):(falseの処理)」
              this.list.sort((a, b) => {
                  if (a[this.sort_key] < b[this.sort_key]) return -1 * set; //昇順
                  if (a[this.sort_key] > b[this.sort_key]) return 1 * set; //降順
                  return 0; //並び替え無し
              })
              return this.list;
          } else {
              return this.list;
          }
      },
  },
}).mount('#app');
