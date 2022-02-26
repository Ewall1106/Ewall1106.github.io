<template>
  <tabbar route active-color="#1989fa" placeholder>
    <tabbar-item replace to="/" icon="good-job">首页</tabbar-item>
    <tabbar-item replace to="/user" icon="manager">我的</tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>
