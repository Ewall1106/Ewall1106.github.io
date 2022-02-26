<template>
  <div class="home">
    <ImageSwipe />
    <NavSwipe />
    <SecondGoodsKill />
    <GoodsItem />
    <TestReact />
  </div>
</template>

<script>
import ImageSwipe from "@/components/ImageSwipe";
import NavSwipe from "@/components/NavSwipe";
import SecondGoodsKill from "@/components/SecondGoodsKill";
import GoodsItem from "@/components/GoodsItem";
import TestReact from "@/components/TestReact";

export default {
  name: "Home",
  components: {
    ImageSwipe,
    NavSwipe,
    SecondGoodsKill,
    GoodsItem,
    TestReact,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #efefef;
}
</style>
