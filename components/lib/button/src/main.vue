<template>
  <button class="rd-btn">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "rButton",
  props: {
    msg: String,
  },
});
</script>

<style lang="scss">
.rd-btn {
  width: 80px;
  height: 50px;
  span {
    color: red;
  }
}
</style>
