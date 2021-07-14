<template>
    <router-view></router-view>
   <h1>Babelist Management Console</h1>
   <div style="border:1px solid #ccc;" v-for="babe in babes">
        <h2> {{ babe.Name }} </h2>
        <p>Age: {{ babe.Age }} </p>

       <router-link :to="'/admin/babes/' + babe.ID"> Edit </router-link>
       <router-link :to="'/admin/babes/' + babe.ID"> Delete </router-link>

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