<template>
<div>
<AnimatedJumbo/>
<div style="height: 500px;"></div>
</div>
</template>

<script>
import AnimatedJumbo from "~/components/AnimatedJumbo.vue";
import { hello } from "~/shared/gateway";

export default {
  components: {
    AnimatedJumbo
  },

  data: () => ({
    name: "",
    result: " "
  }),

  watch: {
    name: async function(newName) {
      this.result = newName ? await hello(newName) : "";
    }
  }
};
</script>

<style>
.splash {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.result {
  height: 30px;
  line-height: 30px;
}

</style>
