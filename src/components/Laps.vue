<template>
  <ul
    class="lapDisplay"
    v-if="displayLap"
  >
    <li
      v-for="lap in lapTimes"
      :key="lap.id"
    >
      <div
        class="lapTimes"
      >
        <p>{{ lap.label }}</p>
        <span>{{ lap.time }}</span>
      </div>
    </li>
  </ul>
</template>





<script>

  export default {
    props: {
      id: {
        required: true,
        type: Number
      },
      
      displayLap: {
        required: true,
        type: Boolean
      },

      lapTimes: {
        required: true,
        type: Array
      }
    }
  }
</script>





<style>

</style>