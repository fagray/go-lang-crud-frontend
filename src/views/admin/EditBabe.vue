<template>
   <h1>Edit Babe</h1>
   <div style="border:1px solid #ccc;">
       <router-link to="/admin"> <h2> Back to admin page </h2></router-link>

       <form method="post" action="#">
           Name: <input type="text" v-model="babe.Name">
          Age: <input type="text" v-model="babe.Age">
          <button @click.prevent="updateBabe()">Update</button>
       </form>
   </div>
   
</template>

<script>
export default {
    data() {
        return {
            babe: {},
            newBabeDetails: {},
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
        },
        updateBabe() {
            this.newBabeDetails.Name = this.babe.Name,
            this.newBabeDetails.Age = this.babe.Age
            this.axios.put('http://localhost:8000/api/v1/babes/' + this.babeId, this.newBabeDetails,
                {
                    headers: {"Content-Type": "application/json'"}
                })
                .then(response => {
                        console.log(response.data)
                    }
                )
                .catch(e => console.log(e));

        }
    }
}
</script>