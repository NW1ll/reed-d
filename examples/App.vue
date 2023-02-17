<template><!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <RdButton theme="error">确认</RdButton>
  <hr />
  <g-button btnType="default">提交</g-button>
  <g-button btnType="success">提交</g-button>
  <g-button btnType="warning">提交</g-button>
  <rd-select></rd-select>
  <hr />
  <rd-breadcrumb separator="/">
    <rd-breadcrumb-item :to="{ path: '/1' }">Home</rd-breadcrumb-item>
    <rd-breadcrumb-item>test1</rd-breadcrumb-item>
    <rd-breadcrumb-item :to="{ path: '/2' }">test2</rd-breadcrumb-item>
    <rd-breadcrumb-item :to="{ path: '/3' }">test3</rd-breadcrumb-item>
  </rd-breadcrumb>
  <hr /> -->
    <rd-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange" label="全选" />
    <rd-checkbox-group @change="handleCheckedCitiesChange" v-model="checkedCities" size="large">
      <rd-checkbox v-for="city in cities" :key="city" :label="city" />
    </rd-checkbox-group>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script setup lang="ts">
import RdSelect from "~/lib/select/main.vue";
import RdButton from "~/lib/button/main.vue";
import RdBreadcrumbItem from "~/lib/breadcrumb/src/breadcrumb-item.vue";
import RdBreadcrumb from "~/lib/breadcrumb/src/breadcrum.vue";
import RdCheckbox from "~/lib/Ckeckbox/src/Checkbox.vue";
import RdCheckboxGroup from "~/lib/Ckeckbox/src/CheckboxGroup.vue";
import { ref } from "vue";

const checkAll = ref(false);
const isIndeterminate = ref(true);

const checkedCities = ref(["长安", "洛阳"]);
const cities = ["长安", "洛阳", "南京", "北京"];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? [...cities] : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount;
};
</script>
