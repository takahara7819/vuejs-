Vue.createApp({
  data: function () {
    return {
      list: "",
      sort_key: "",
      sort_asc: true,
    };
  },

  created: async function () {
    //jsonの読み込み
    const res = await fetch("../cards.json");
    const users = await res.json();
    this.list = users;
  },

  methods: {
    sortBy(key) {
      this.sort_key === key
        ? (this.sort_asc = !this.sort_asc)
        : (this.sort_asc = true);

      this.sort_key = key;
    },
  },

  computed: {
    sort_users() {
      if (this.sort_key != "") {
        let set = 1;
        this.sort_asc ? (set = 1) : (set = -1);

        this.list.sort((a, b) => {
          if (a[this.sort_key] < b[this.sort_key]) return -1 * set;
          if (a[this.sort_key] > b[this.sort_key]) return 1 * set;
          return 0;
        });
        return this.list;
      } else {
        return this.list;
      }
    },
  },
}).mount("#app");
