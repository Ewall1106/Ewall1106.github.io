<template>
  <SwipeItem>
    <slot />
  </SwipeItem>
</template>

<script>
import { SwipeItem } from "vant";

export default {
  name: "VantSwipeItem",
  components: {
    SwipeItem,
  },
};
</script>
