<template>
  <ul
    class="lapDisplay"
    v-if="displayLap"
  >
    <li
      v-for="lap in lapTimes"
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