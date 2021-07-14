<template>
   <h1>Hunt for your next social media crush!</h1>
   <div style="border:1px solid #ccc;" v-for="babe in babes">
       <router-link :to="'/babes/' + babe.ID"> <h2> {{ babe.Name }} </h2></router-link>
       <p>Age: {{ babe.Age }} </p>
   </div>
   
</template>

<script>
export default {
    data() {
        return {
            babes: []
        }
    },
    mounted() {
        this.getAllBabe()
    },
    methods: {
        getAllBabe() {
            this.axios.get('http://localhost:8000/api/v1/babes')
                .then(response => (this.babes = response.data))
        }
    }
}
</script>