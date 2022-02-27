<template>
  <CountDown v-bind="$attrs" />
</template>

<script>
import { CountDown } from 'vant'

export default {
  name: 'VantCountDown',
  components: {
    CountDown
  }
}
</script>
