import Vue from "vue";
import Vuex from "vuex";
import Taro from "@tarojs/taro";

Vue.use(Vuex);

export interface UserInfo {
  avatarUrl: string;
  mobile: string;
  nickName: string;
  userId: number;
}

interface GlobalState {
  userToken: string;
  hasLogin: boolean;
  userInfo: UserInfo | null;
}

const state: GlobalState = {
  userToken: Taro.getStorageSync("userToken") || "",
  hasLogin: false,
  userInfo: null
};

const mutations = {
  SET_GLOBAL_STATE(state: GlobalState, payload: { key: string; value: any }) {
    state[payload.key] = payload.value;
  },
  SET_USER_INFO(state: GlobalState, value: UserInfo) {
    state.userInfo = value;
  }
};

const actions = {
  setGlobalState({ commit }, { key, value }: { key: string; value: any }) {
    commit("SET_GLOBAL_STATE", { key, value });
  },
  setUserInfo({ commit }, value) {
    commit("SET_USER_INFO", value);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
