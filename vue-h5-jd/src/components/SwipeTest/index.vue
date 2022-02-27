<template>
  <Root>
    <VantSwipe
      :style="{ width: '100%', height: '200px', backgroundColor: 'pink' }"
      v-bind="{
        duration: 500,
        loop: true,
        'show-indicators': true,
        touchable: true,
        'stop-propagation': true,
        'indicator-color': '#1989fa',
        autoplay: 3000,
      }"
    >
      <CustomImg
        :style="{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }"
        v-bind="{ src: 'https://img01.yzcdn.cn/vant/cat.jpeg' }"
      >
      </CustomImg>
    </VantSwipe>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import VantSwipe from "./VantSwipe.vue";
import CustomImg from "./CustomImg.vue";

export default {
  name: "SwipeTest",
  components: {
    Root,
    VantSwipe,
    CustomImg,
  },
};
</script>
