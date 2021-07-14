<template>
    <router-link to="/">Back to home</router-link>
   <h1>Babe Details</h1>
   <div style="border:1px solid #ccc;" >
       <h1>{{ babe.Name }} </h1>
       <p>Age: {{ babe.Age }} </p>
   </div>
   
</template>

<script>
export default {
    data() {
        return {
            babe: {},
            babeId: null
        }
    },
    mounted() {
        this.babeId = this.$route.params.id
        this.getBabeDetails()
    },
    methods: {
        getBabeDetails() {
            this.axios.get('http://localhost:8000/api/v1/babes/' + this.babeId)
                .then(response => (this.babe = response.data))
        }
    }
}
</script>