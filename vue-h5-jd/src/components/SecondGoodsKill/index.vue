<template>
  <Root>
    <Container
      :style="{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.1rem 0.1rem 0.1rem 0.1rem',
        backgroundColor: '',
        borderRadius: '0.1rem 0.1rem 0.1rem 0.1rem',
        background: '#fff',
      }"
    >
      <Container
        :style="{
          boxSizing: 'border-box',
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }"
      >
        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }"
        >
          <CustomText
            :style="{
              fontFamily: 'PingFang SC',
              fontSize: '0.14rem',
              lineHeight: '1em',
              fontWeight: 500,
              color: '#333',
              margin: '0rem 0rem 0rem 0rem',
            }"
            v-bind="{ content: '京东秒杀' }"
          >
          </CustomText>

          <VantCountDown
            :style="{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '1.16rem',
              height: '0.3rem',
              backgroundColor: '',
              margin: '0rem 0rem 0rem 0.04rem',
            }"
            v-bind="{
              time: 600000,
              format: 'HH 时 mm 分 ss 秒',
              'auto-start': true,
              millisecond: false,
            }"
          >
          </VantCountDown>
        </Container>

        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <CustomText
            :style="{
              fontFamily: 'PingFang SC',
              fontSize: '0.12rem',
              lineHeight: '1em',
              color: 'red',
            }"
            v-bind="{ content: '更多秒杀' }"
          >
          </CustomText>

          <VantIcon
            :style="{
              display: 'block',
              width: '0.14rem',
              height: '0.14rem',
              fontWeight: null,
            }"
            v-bind="{ name: 'arrow', color: 'red', size: '14px' }"
          >
          </VantIcon>
        </Container>
      </Container>

      <Container
        :style="{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          margin: '0rem 0rem 0rem 0rem',
          flexWrap: 'nowrap',
        }"
      >
        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: '0.68rem',
            height: '0.78rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0rem 0rem 0rem 0rem',
          }"
        >
          <CustomImg
            :style="{
              display: 'block',
              boxSizing: 'border-box',
              width: '0.55rem',
              height: '0.55rem',
              objectFit: 'contain',
            }"
            v-bind="{
              imgSrc:
                '//img11.360buyimg.com/n7/s150x150_jfs/t1/167227/11/25099/170269/61ee0f55Eee34b8bd/d0b1fffdb3def1c9.jpg.dpg',
            }"
          >
          </CustomImg>

          <CustomText
            :style="{
              fontFamily: 'PingFang SC',
              fontSize: '0.14rem',
              lineHeight: '1em',
              color: '#f2270c',
              fontWeight: 500,
            }"
            v-bind="{ content: '¥23' }"
          >
          </CustomText>
        </Container>

        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: '0.68rem',
            height: '0.78rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0rem 0rem 0rem 0rem',
          }"
        >
          <CustomImg
            :style="{
              display: 'block',
              boxSizing: 'border-box',
              width: '0.55rem',
              height: '0.55rem',
              objectFit: 'contain',
            }"
            v-bind="{
              imgSrc:
                '//img11.360buyimg.com/n7/s150x150_jfs/t1/209911/19/14081/130965/61c923f9Eda0c157a/657f27b1ae760329.jpg.dpg',
            }"
          >
          </CustomImg>

          <CustomText
            :style="{
              fontFamily: 'PingFang SC',
              fontSize: '0.14rem',
              lineHeight: '1em',
              color: '#f2270c',
              fontWeight: 500,
            }"
            v-bind="{ content: '¥19' }"
          >
          </CustomText>
        </Container>

        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: '0.68rem',
            height: '0.78rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0rem 0rem 0rem 0rem',
          }"
        >
          <CustomImg
            :style="{
              display: 'block',
              boxSizing: 'border-box',
              width: '0.55rem',
              height: '0.55rem',
              objectFit: 'contain',
            }"
            v-bind="{
              imgSrc:
                '//img11.360buyimg.com/n7/s150x150_jfs/t1/167227/11/25099/170269/61ee0f55Eee34b8bd/d0b1fffdb3def1c9.jpg.dpg',
            }"
          >
          </CustomImg>

          <CustomText
            :style="{
              fontFamily: 'PingFang SC',
              fontSize: '0.14rem',
              lineHeight: '1em',
              color: '#f2270c',
              fontWeight: 500,
            }"
            v-bind="{ content: '¥23' }"
          >
          </CustomText>
        </Container>

        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: '0.68rem',
            height: '0.78rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0rem 0rem 0rem 0rem',
          }"
        >
          <CustomImg
            :style="{
              display: 'block',
              boxSizing: 'border-box',
              width: '0.55rem',
              height: '0.55rem',
              objectFit: 'contain',
            }"
            v-bind="{
              imgSrc:
                '//img11.360buyimg.com/n7/s150x150_jfs/t1/109350/27/22328/124144/620db43dEa8317541/ad15092ef5664aa4.jpg.dpg',
            }"
          >
          </CustomImg>

          <CustomText
            :style="{
              fontFamily: 'PingFang SC',
              fontSize: '0.14rem',
              lineHeight: '1em',
              color: '#f2270c',
              fontWeight: 500,
            }"
            v-bind="{ content: '¥23' }"
          >
          </CustomText>
        </Container>

        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            width: '0.68rem',
            height: '0.78rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0rem 0rem 0rem 0rem',
          }"
        >
          <CustomImg
            :style="{
              display: 'block',
              boxSizing: 'border-box',
              width: '0.55rem',
              height: '0.55rem',
              objectFit: 'contain',
            }"
            v-bind="{
              imgSrc:
                '//img11.360buyimg.com/n7/s150x150_jfs/t1/167227/11/25099/170269/61ee0f55Eee34b8bd/d0b1fffdb3def1c9.jpg.dpg',
            }"
          >
          </CustomImg>

          <CustomText
            :style="{
              fontFamily: 'PingFang SC',
              fontSize: '0.14rem',
              lineHeight: '1em',
              color: '#f2270c',
              fontWeight: 500,
            }"
            v-bind="{ content: '¥23' }"
          >
          </CustomText>
        </Container>
      </Container>
    </Container>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import Container from "./Container.vue";
import CustomText from "./CustomText.vue";
import VantCountDown from "./VantCountDown.vue";
import VantIcon from "./VantIcon.vue";
import CustomImg from "./CustomImg.vue";

export default {
  name: "SecondGoodsKill",
  components: {
    Root,
    Container,
    CustomText,
    VantCountDown,
    VantIcon,
    CustomImg,
  },
};
</script>
