<template>
  <Swipe v-bind="$attrs">
    <slot />
  </Swipe>
</template>

<script>
import { Swipe } from "vant";

export default {
  name: "VantSwipe",
  components: {
    Swipe,
  },
};
</script>
