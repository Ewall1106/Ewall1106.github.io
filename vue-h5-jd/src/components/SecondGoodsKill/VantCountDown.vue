<template>
  <CountDown v-bind="$props" />
</template>

<script>
import { CountDown } from "vant";

export default {
  name: "VantCountDown",
  props: ["time", "format", "auto-start", "millisecond"],
  components: {
    CountDown,
  },
};
</script>
