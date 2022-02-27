<template>
  <div class="home">
    <CountDownTest />
    <NavSwipe />
    <SecondGoodsKill />
    <GoodsItem />
    <TestReact />
    <Test />
    <SwipeTest />
  </div>
</template>

<script>
import NavSwipe from "@/components/NavSwipe";
import SecondGoodsKill from "@/components/SecondGoodsKill";
import GoodsItem from "@/components/GoodsItem";
import TestReact from "@/components/TestReact";
import Test from "@/components/test";
import SwipeTest from "@/components/SwipeTest";
import CountDownTest from "@/components/CountDownTest";

export default {
  name: "Home",
  components: {
    NavSwipe,
    SecondGoodsKill,
    GoodsItem,
    TestReact,
    Test,
    SwipeTest,
    CountDownTest,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #efefef;
}
</style>
