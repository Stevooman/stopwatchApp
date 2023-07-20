<template>
  <Transition>
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
          <span class="lap">{{ lap.label }}</span>
          <span class="time">{{ lap.time }}</span>
        </div>
      </li>
    </ul>
  </Transition>
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

.lapDisplay {
  list-style-type: none;
  margin-top: 0.3em;
  padding: 0;
}

  .lapTimes {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .lap {
    font-weight: bold;
    font-size: 24px;
    color: rgb(0, 158, 0);
  }

  .time {
    font-weight: bold;
    font-size: 20px;
    color: white;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  @media screen and (min-width: 600px) {
    .lap {
      font-size: 36px;
    }

    .time {
      font-size: 32px;
    }
  }
</style>