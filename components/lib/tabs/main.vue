<template>
  <div class="rd-tabs">
    <div :class="headerClasses" ref="container">
      <slot name="leftExtra"></slot>
      <tabItem
        v-for="item in tabItems"
        :key="item.key"
        :data-idx="item.key"
        :type="tabType"
        :title="item.title"
        :isActive="activeKey == item.key"
        :disabled="item.disabled"
        @click="tabChange"
      >
        <template v-if="item.url" #icon>
          <img class="icon" src="item.url" />
        </template>
      </tabItem>
      <slot name="rightExtra"></slot>
    </div>
    <div class="rd-tabs-content">{{ tabItems[activeKey - 1].context }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { tabProps, tabEmits, useTabs } from "./index";
import tabItem from "./tab/tabNode.vue";

const props = defineProps(tabProps);
const emits = defineEmits(tabEmits);

const { activeKey, tabCentered, tabType, tabSize, tabItems, tabPosition } =
  useTabs(props, emits);

const tabChange = (e) => {
  activeKey.value = parseInt(e.target.dataset.idx);
};

const headerClasses = computed(() => {
  return {
    [`rd-tabs-header`]: true,
    [`rd-tabs-header-${tabSize.value}`]: tabSize,
    [`rd-tabs-header-${tabPosition.value}`]: tabPosition,
    [`rd-tabs-header-${tabCentered.value ? "centered" : ""}`]: tabCentered,
  };
});
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "rdTab",
});
</script>

<style lang="scss" scoped>
$color: #333;
$border-color: #d9d9d9;
$card-background: #f7f7fa;
$white: #fff;
$radius: 3px;
$h: 40px;
.rd-tabs {
  width: 100%;
  height: 100px;
  .rd-tabs-header {
    display: flex;
    color: $color;
    position: relative;
    width: 100%;
  }
  .rd-tabs-header-top {
    border-bottom: 1px solid $border-color;
  }
  .rd-tabs-header-bottom {
    border-top: 1px solid $border-color;
  }
  .rd-tabs-header-left {
    border-right: 1px solid $border-color;
  }
  .rd-tabs-header-right {
    border-left: 1px solid $border-color;
  }
  .rd-tabs-header-centered {
    justify-content: center;
  }
  .rd-tabs-content {
    padding: 8px 0;
    text-align: left;
  }
}
.rd-tabs-header-middle {
  height: 40px;
}
.rd-tabs-header-small {
  height: 30px;
  font-size: 14px;
}
.rd-tabs-header-large {
  height: 50px;
  font-size: 18px;
}
</style>
