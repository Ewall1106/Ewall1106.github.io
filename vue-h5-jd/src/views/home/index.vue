<template>
  <div class="home">
    <NavSwipe />
    <SecondGoodsKill />
    <GoodsItem />
    <TestReact />
    <Test />
  </div>
</template>

<script>
import NavSwipe from "@/components/NavSwipe";
import SecondGoodsKill from "@/components/SecondGoodsKill";
import GoodsItem from "@/components/GoodsItem";
import TestReact from "@/components/TestReact";
import Test from "@/components/test";

export default {
  name: "Home",
  components: {
    NavSwipe,
    SecondGoodsKill,
    GoodsItem,
    TestReact,
    Test,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #efefef;
}
</style>
