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

<style lang="less">
.rd-btn {
  width: 100px;
  height: 100px;
}
</style>
