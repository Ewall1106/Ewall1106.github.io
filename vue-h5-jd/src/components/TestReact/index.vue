<template>
  <Root>
    <Container :style="{ display: 'block' }">
      <CustomText v-bind="{ text: '我是文本' }"> </CustomText>

      <CustomImg
        :style="{ display: 'block', width: '1rem', height: '1rem' }"
        v-bind="{ src: 'https://img01.yzcdn.cn/vant/cat.jpeg' }"
      >
      </CustomImg>
    </Container>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import Container from "./Container.vue";
import CustomText from "./CustomText.vue";
import CustomImg from "./CustomImg.vue";

export default {
  name: "TestReact",
  components: {
    Root,
    Container,
    CustomText,
    CustomImg,
  },
};
</script>
