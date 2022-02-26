<template>
  <Icon v-bind="$props" />
</template>

<script>
import { Icon } from "vant";

export default {
  name: "VantIcon",
  props: ["name", "dot", "badge", "info", "color", "size", "tag"],
  components: {
    Icon,
  },
};
</script>
