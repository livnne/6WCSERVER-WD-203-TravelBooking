<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="booking in Bookings" :key="booking._id">
                        <td>{{ booking.destination }}</td>
                        <td>{{ booking.date }}</td>
                        <td>{{ booking.email }}</td>
                        <td>{{ booking.phone }}</td>
                        <td>
                            <router-link :to="{destination: 'edit', params: { id: booking._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteBooking(booking._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Bookings: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Bookings = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteBooking(id){
                let apiURL = `http://localhost:4000/api/delete-booking/${id}`;
                let indexOfArrayItem = this.Bookings.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Bookings.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
