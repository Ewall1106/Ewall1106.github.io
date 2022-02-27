<template>
  <Swipe v-bind="$attrs">
    <SwipeItem v-for="item in 2" :key="item">
      <slot />
    </SwipeItem>
  </Swipe>
</template>

<script>
import { Swipe } from "vant";
import { SwipeItem } from "vant";

export default {
  name: "VantSwipe",
  components: {
    Swipe,
    SwipeItem,
  },
};
</script>
