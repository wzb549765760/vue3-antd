<template>
<a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
  <a-form-item label="选择计划的日期">
    <a-date-picker v-model:value="form.date" show-time type="date" placeholder="选择计划日期" style="width: 100%;" />
  </a-form-item>
  <a-form-item label="选择耗时">
    <a-input-number :min="1" :max="10" v-model:value="form.time" />
  </a-form-item>
  <a-form-item label="代办事项">
    <a-textarea v-model:value="form.content" placeholder="代办事项" :auto-size="{ minRows: 2, maxRows: 5 }" />
  </a-form-item>
  <a-form-item>
    <a-button type="primary" @click="submit">创建任务</a-button>
  </a-form-item>
</a-form>
</template>

<script>
import {
  reactive,
  toRefs
} from 'vue'
import moment from 'moment'
export default {
  setup(props, context) {
    const state = reactive({
      form: {
        date: moment(Date.now()).format('YYYY-MM-DD'),
        time: 0,
        content: ""
      },
    })

    const submit = () => {
      context.emit("handleplan", state.form);
    }

    return {
      ...toRefs(state),
      submit
    }
  },
}
</script>
