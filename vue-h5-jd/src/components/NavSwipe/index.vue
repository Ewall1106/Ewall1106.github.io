<template>
  <Root>
    <VantSwipe v-bind="{ loop: false, 'indicator-color': 'red' }">
      <VantSwipeItem>
        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }"
        >
          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '我是文本' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '数码家电' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东服饰' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东生鲜' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东生鲜' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/199143/10/8979/4223/614599f5E45cd5464/d15aa650a0ebe596.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '物流查询' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '领券' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东生鲜' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '会员' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东生鲜' }"
            >
            </CustomText>
          </Container>
        </Container>
      </VantSwipeItem>

      <VantSwipeItem>
        <Container
          :style="{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '20px',
          }"
        >
          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/191060/24/12861/6818/60ec11f2E67cf5ee6/c264378678b3cd96.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '进口' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '数码家电' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/191377/35/12864/5624/60ec146cE304517a9/20acb632f59fbbbd.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东旅行' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东服饰' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东生鲜' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/199143/10/8979/4223/614599f5E45cd5464/d15aa650a0ebe596.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '物流查询' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东生鲜' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '领券' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '会员' }"
            >
            </CustomText>
          </Container>

          <Container
            :style="{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              width: '0.75rem',
              height: '0.75rem',
              justifyContent: 'center',
              alignContent: 'center',
              flexWrap: 'nowrap',
              alignItems: 'center',
            }"
          >
            <CustomImg
              :style="{
                display: 'block',
                boxSizing: 'border-box',
                width: '0.4rem',
                height: '0.4rem',
                objectFit: 'contain',
              }"
              v-bind="{
                imgSrc:
                  '//m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg',
              }"
            >
            </CustomImg>

            <CustomText
              :style="{
                fontFamily: 'PingFang SC',
                fontSize: '0.12rem',
                lineHeight: '1em',
                color: '#666',
                fontWeight: 500,
                margin: '0.02rem 0rem 0rem 0rem',
              }"
              v-bind="{ content: '京东生鲜' }"
            >
            </CustomText>
          </Container>
        </Container>
      </VantSwipeItem>
    </VantSwipe>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import VantSwipe from "./VantSwipe.vue";
import VantSwipeItem from "./VantSwipeItem.vue";
import Container from "./Container.vue";
import CustomImg from "./CustomImg.vue";
import CustomText from "./CustomText.vue";

export default {
  name: "NavSwipe",
  components: {
    Root,
    VantSwipe,
    VantSwipeItem,
    Container,
    CustomImg,
    CustomText,
  },
};
</script>
