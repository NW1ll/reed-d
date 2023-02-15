<template>
  <view :class="itemClass" @click="handleClick">
    <slot name="icon"></slot>
    {{ tabTitle }}
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tabItemProps, tabItemEmits, useTab } from "../index";

const props = defineProps(tabItemProps);
const emits = defineEmits(tabItemEmits);

const { tabType, tabTitle, tabActive, tabDisabled, handleClick } = useTab(
  props,
  emits
);

const itemClass = computed(() => {
  return {
    [`rd-tab-item`]: true,
    [`rd-tab-item-${tabType.value}`]: tabType,
    [`rd-tab-item-${tabType.value}-${tabActive.value ? "active" : ""}`]:
      tabActive,
    [`rd-tab-item-${tabDisabled.value ? "disabled" : ""}`]: tabDisabled,
  };
});
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "tabItem",
});
</script>

<style lang="scss" scoped>
$h: 40px;
$radius: 3px;
$color: #333;
$active-color: #3a88fc;
$disabled-color: #cfcfcf;
.rd-tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
  width: auto;
  height: 95%;
  line-height: 94%;
  min-width: 80px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  color: $color;
  &:hover {
    color: $active-color;
  }
}
.rd-tab-item-card {
  background-color: #fafafa;
  border: 1px solid #dddddd;
  border-radius: $radius $radius 0 0;
}
.rd-tab-item-line-active {
  color: $active-color;
  border-bottom: 2px solid $active-color;
}
.rd-tab-item-card-active {
  color: $active-color;
  background-color: #ffffff;
  border-bottom: 1px solid #ffffff;
}
.rd-tab-item-disabled {
  color: $disabled-color;
  cursor: not-allowed;
  &:hover {
    color: $disabled-color;
  }
}
</style>
