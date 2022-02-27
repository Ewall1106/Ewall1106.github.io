<template>
  <Button v-bind="$attrs">{{ text }}</Button>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'VantButton',
  props: ['text'],
  components: {
    Button
  }
}
</script>
