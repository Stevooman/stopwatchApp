<template>
    <button 
      @click="onClick"
      >{{ buttonText }}
    </button>
    <!-- <button 
      class="btns pauseBtn"
      @click="onClick"
      >Pause</button>
    <button 
      class="btns resetBtn"
      @click="resetTimer"
      >Reset
    </button>
    <button 
      class="btns lapBtn"
      @click="logLap"
      >Lap
    </button>
    <button 
      class="btns viewLapBtn"
      @click="displayLaps"
      >{{ viewLapBtnText }}
    </button> -->
</template>





<script>

  export default {
    props: {
      onClick: {
        required: true,
        type: Function
      },

      buttonText: {
        required: true,
        type: String
      }
    }
  }

</script>





<style></style>