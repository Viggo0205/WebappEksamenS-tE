const baseUrl = "https://birdobservationscontroller.azurewebsites.net/api/BirdObservations"



Vue.createApp({
    data() {
        return {
            birds: [],
            GetByIdId: -1,
            singleBird: null,
            deleteId: 0,
            delteById: 0,
            deleteMessage: "", 
            addData: { species: "", howMany: 0},
            addMessage: "",
            
        }
    },
    methods: {
        async getBirds() {
            try {
                const response = await axios.get(baseUrl)
                this.birds = response.data
            } catch (ex) {
                alert(ex.message)
            }
        },

        getAllBirds() {
            this.getBirds()
        }
    }
}).mount("#app")