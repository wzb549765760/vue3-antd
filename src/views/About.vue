<template>
<div class="about">
  <create @handleplan="handlePlan"></create>
</div>
</template>

<script>
import create from './create'
export default {
  components: {
    create,
  },
  setup() { //this  不方便判断
    const handlePlan = (plan) => {
      console.log(plan)
    }
    return {
      handlePlan
    }
  },
}
</script>
