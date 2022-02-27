<template>
  <Root>
    <Container
      :style="{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }"
    >
      <VantButton v-bind="{ text: '我是按钮123123' }"> </VantButton>

      <CustomImg
        :style="{ display: 'block', width: '1rem', height: '1rem' }"
        v-bind="{ src: 'https://img01.yzcdn.cn/vant/cat.jpeg' }"
      >
      </CustomImg>

      <CustomText v-bind="{ text: '我是文本' }"> </CustomText>
    </Container>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import Container from "./Container.vue";
import VantButton from "./VantButton.vue";
import CustomImg from "./CustomImg.vue";
import CustomText from "./CustomText.vue";

export default {
  name: "test",
  components: {
    Root,
    Container,
    VantButton,
    CustomImg,
    CustomText,
  },
};
</script>
