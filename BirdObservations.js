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
            species: ""
            
        }
    },
    methods: {
        async getBirds(url) { // helper method: getAllCars + getByVendor are very similar
            try {
                response = await axios.get(url)
                this.birds = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },

        getAllBirds() {
            this.getBirds(baseUrl)
        },
        getBySpecies(species) { 
            const url = baseUrl + "?species=" + species;
            this.getBirds(url);           
        },
        
        sortById() {
            // https://www.w3schools.com/js/js_array_sort.asp
            this.birds.sort((bird1, bird2) => bird1.id - bird2.id)
        },
        sortByIdDescending() {
            this.birds.sort((bird1, bird2) => bird2.id - bird1.id)
        },

        sortBySpecies() {
            this.birds.sort((bird1, bird2) =>
                bird1.species.localeCompare(bird2.species))
        },

        async addBird() {
            try {
                response = await axios.post(baseUrl, this.addData)
                console.log("Jeg er her"+response)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllBirds()
            } catch (ex) {
                alert(ex.message)
            }
        },

        async deleteBird(deleteId) {
            const url = `${baseUrl}/${deleteId}`
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllBirds()
            } catch (ex) {
                alert(ex.message)
            }
        }

    }
}).mount("#app")