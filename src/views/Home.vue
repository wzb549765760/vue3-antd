<template>
<div class="home">
  home
</div>
</template>

<script>
import {
  computed,
  onMounted,
  reactive,
  toRefs
} from 'vue'
import {
  useStore
} from 'vuex'

import * as types from "../store/action-types"

export default {
  name: 'Home',
  setup() {
    const store = useStore();

    const state = reactive({
      planList: computed(() => {
        return store.state.planList;
      })
    })

    onMounted(() => {
      store.dispatch(types.SET_PLAN_LIST);

    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
