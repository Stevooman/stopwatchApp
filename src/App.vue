<template>
  <div class="wrapper">
    <div
      class="numbers"
    >
      {{ timeDisplay }}
    </div>
    <div class="buttons">
      <button 
        class="btns startBtn"
        @click="startTimer"
        >Start
      </button>
      <button 
        class="btns pauseBtn"
        @click="pauseTimer"
        >Pause</button>
      <button 
        class="btns resetBtn"
        @click="resetTimer"
        >Reset
      </button>
      <button 
        class="btns lapBtn"
        >Lap
      </button>
      <button 
        class="btns viewLapBtn"
        >View Laps
      </button>
    </div>
  </div>
</template>





<script>
  import LapTimes from './components/LapTimes.vue';

  export default {
    name: 'App',
    components: {
      LapTimes
    },

    data() {
      return {
        timeDisplay: "00:00:00",
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        startTime: 0,
        elapsedTime: 0,
        currentTime: 0,
        paused: true,
        intervalId: 0,
        resetMilliseconds: false
      }
    },

    methods: {
      startTimer() {
        if (this.paused) {
          this.paused = false;
          this.startTime = Date.now() - this.elapsedTime;
          this.intervalId = setInterval(this.updateTimer, 10);
        }
      },

      updateTimer() {
        this.elapsedTime = Date.now() - this.startTime;
        this.milliseconds = Math.floor(this.elapsedTime / 10) % 100;
        this.seconds = Math.floor((this.elapsedTime / 1000) % 60);
        this.minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);

        this.milliseconds = this.padZeros(this.milliseconds);
        this.seconds = this.padZeros(this.seconds);
        this.minutes = this.padZeros(this.minutes);
        this.displayTimer();
      },

      displayTimer() {
        this.timeDisplay = `${this.minutes}:${this.seconds}:${this.milliseconds}`;
      },

      pauseTimer() {
        clearInterval(this.intervalId);
        this.paused = true;
      },

      resetTimer() {
        clearInterval(this.intervalId);
        this.paused = true;
        this.elapsedTime = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
        this.timeDisplay = "00:00:00";
      },

      padZeros(unitOfTime) {
        return ('0' + unitOfTime).length > 2 ? unitOfTime : '0' + unitOfTime;
      }
    },

    computed: {
      
    }
  }
</script>





<style>

  @import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Roboto+Mono&display=swap');

* {
  font-family: Roboto Mono, sans-serif;
}

html {
  background-color: rgb(41, 41, 41);
}

.wrapper {
  padding: 3.0em; /* em = relative to font-size of the element (in this case, 4 times the size of the div's font-size */
  margin: auto;
  border: 0.6em solid #15eade;
  background-color: #158cea;
  border-radius: 1.0em 6.0em;
  margin-top: 2em;
  max-width: 70vw;
}

.numbers {
  font-size: 96px;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  padding-bottom: 0.5em;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: auto auto;
  gap: 2.0em 1.0em;
  justify-content: space-evenly;
}

.btns {
  padding: 1.0em;
  border-radius: 1.2em;
  font-size: 24px;
  font-weight: bold;
}

.startBtn {
  grid-column: 1 / span 2;
  grid-row: 1;
  background-color: #1521ea;
}

.pauseBtn {
  grid-column: 3 / span 2;
  grid-row: 1;
}

.resetBtn {
  grid-column: 5 / span 2;
  grid-row: 1;
}

.lapBtn {
  grid-column: 1 / 4;
  grid-row: 2;
}

.viewLapBtn {
  grid-column: 4 / 7;
  grid-row: 2;
}

@media screen and (max-width: 600px) {
    .wrapper {
      max-width: 65vw;
    }

    .numbers {
      font-size: 72px;
    }
  }
</style>
