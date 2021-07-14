<template>
  <h1>Hunt for your next social media crush!</h1>
  
  <router-link to="/about">Enter</router-link>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
