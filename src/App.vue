<template>
  <div class="wrapper">
    <div
      class="numbers"
    >
      {{ timeDisplay }}
    </div>
    <div
      class="buttons"
    >
      <v-button
        class="btns startBtn"
        :onClick="startTimer"
        :buttonText="button1"
      />
      <v-button 
        class="btns pauseBtn"
        :onClick="pauseTimer"
        :buttonText="button2"
      />
      <v-button
        class="btns resetBtn"
        :onClick="resetTimer"
        :buttonText="button3"
      />
      <v-button
        class="btns lapBtn"
        :onClick="logLap"
        :buttonText="button4"
      />
      <v-button
        class="btns viewLapBtn"
        :onClick="displayLaps"
        :buttonText="viewLapBtnText"
      />
    </div>
      <v-laps 
        :displayLap="lapDisplayed"
        :lapTimes="lapTimes"
        :id="uniqueId"
      />
  </div>
</template>





<script>
  import Buttons from './components/Buttons.vue';
  import Laps from './components/Laps.vue';

  export default {
    name: 'App',
    components: {
      'v-button': Buttons,
      'v-laps': Laps
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
        resetMilliseconds: false,
        lapDisplayed: false,
        viewLapBtnText: "View Laps",
        button1: "Start",
        button2: "Pause",
        button3: "Reset",
        button4: "Lap",
        lapCounter: 0,
        uniqueId: 0,
        lapTimes: []
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
      },

      logLap() {
        this.lapCounter++;
        this.uniqueId++;
        this.lapTimes.push(
          {
            id: this.uniqueId,
            label: "Lap " + this.lapCounter,
            time: this.timeDisplay 
          }
        )
      },

      displayLaps() {
        if (!this.lapDisplayed) {
          this.viewLapBtnText = "Close laps"
          this.lapDisplayed = true;
        } else {
          this.viewLapBtnText = "View Laps";
          this.lapDisplayed = false;
        }
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

body {
  background-color: rgb(50, 50, 50);
}

.wrapper {
  padding: 3.0em; /* em = relative to font-size of the element (in this case, 4 times the size of the div's font-size */
  margin: auto;
  border: 0.2em solid rgb(0, 158, 0);
  background-color: #1f1f1f;
  border-radius: 1.0em 6.0em;
  margin-top: 2em;
  max-width: 70vw;
}

.numbers {
  font-size: 96px;
  color: rgb(0, 158, 0);
  display: flex;
  justify-content: center;
  padding-bottom: 0.5em;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: auto auto;
  gap: 1.0em 0.6em;
  justify-content: space-evenly;
}

.btns {
  background-color: rgb(101, 101, 101);
  padding: 1.0em;
  border-radius: 1.2em;
  font-size: 32px;
  font-weight: bold;
}

.startBtn {
  grid-column: 1 / span 2;
  grid-row: 1;
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
      margin-left: 0.5em;
      margin-right: 0.5em;
    }

    .numbers {
      font-size: 68px;
    }

    .buttons {
      gap: 0.3em 0.3em;
    }

    .btns {
      padding: 1.0em;
      font-size: 20px;
    }
  }
</style>
