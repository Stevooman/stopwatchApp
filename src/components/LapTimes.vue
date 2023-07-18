<template>
  <div 
    class="wrapper"
    v-if="viewingLaps"
  >
    <div
      class="buttons"
    >
     <li
      v-for="time in lapTimes"
     >

     </li>
    </div>
  </div>
</template>





<script>
  export default {
    name: "LapTimes",

    props: {

    },

    data() {
      return {
        viewingLaps: false,
        lapTimes: []
      }
    },

    methods: {
      logLap(lapTime) {
        this.viewingLaps = true;
        let index = lapTimes.length + 1;
        this.lapTimes.push(
          {
            label: "Lap " + index,
            time: lapTime
          }
        )
      }
    }
  }
</script>





<style>

</style>