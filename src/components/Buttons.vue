<template>
    <button 
      @click="onClick"
      >{{ buttonText }}
    </button>
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