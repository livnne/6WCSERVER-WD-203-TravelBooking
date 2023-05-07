<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Booking</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Destination</label>
                    <input type="text" class="form-control" v-model="booking.destination" required>
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="date" class="form-control" v-model="booking.date" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="booking.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="booking.phone" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            booking: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-booking/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.booking = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-booking/${this.$route.params.id}`;
            axios.put(apiURL, this.booking).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
