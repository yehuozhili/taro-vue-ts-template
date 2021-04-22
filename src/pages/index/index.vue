<template>
  <view v-else class="home">
    <view>bbbbbb</view>
    <AtButton type="primary" :on-click="atclick">22222</AtButton>
    <button>213123</button>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AtButton } from "taro-ui-vue";
import Taro from "@tarojs/taro";
@Component({
  components: {
    AtButton
  }
})
export default class TestHello2 extends Vue {
  showLoading: boolean = false;
  pageConfig: any = {};
  async created(e) {
    Taro.hideHomeButton();
    console.log("created", e);
  }

  get id() {
    return Taro.getCurrentInstance().router?.params.id || "";
  }

  init() {
    console.log("init22");
  }

  onShow() {
    console.log("show");
  }
  onHide() {
    console.log("hide");
  }
  onLoad(e) {
    console.log("onload", e);
  }

  atclick() {
    console.log("jjjj22");
  }
}
</script>
