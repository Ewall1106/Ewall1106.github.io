<template>
  <Root>
    <Container
      :style="{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }"
    >
      <VantCountDown
        v-bind="{
          time: 600000,
          format: 'DD 天 HH 时 mm 分 ss 秒',
          millisecond: false,
        }"
      >
      </VantCountDown>
    </Container>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import Container from "./Container.vue";
import VantCountDown from "./VantCountDown.vue";

export default {
  name: "CountDownTest",
  components: {
    Root,
    Container,
    VantCountDown,
  },
};
</script>
