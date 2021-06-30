<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="loadAuthBasic">Check Basic auth</button>
    <p></p>
    <button @click="loadData('user1', 'url1')">
      Check authorization user 1 + uRL 1
    </button>
    <button @click="loadData('user1', 'url2')">
      Check authorization user 1 + uRL 2
    </button>
    <button @click="loadData('user2', 'url1')">
      Check authorization user 2 + uRL 1
    </button>
    <button @click="loadData('user2', 'url2')">
      Check authorization user 2 + uRL 2
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    loadAuthBasic() {
      axios
        .get("http://pabw.tif.localhost/auth/basic-auth.php")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Finish");
        });
    },
    loadData(user, url) {
      axios
        .get(
          "http://pabw.tif.localhost/auth/test-casbin.php?user=" +
            user +
            "&password=password1&url=" +
            url
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Finish");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>