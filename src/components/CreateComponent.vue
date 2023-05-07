<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Add Booking</h3>
            <form @submit.prevent="handleSubmitForm">
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
                    <button class="btn btn-danger btn-block">Book</button>
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
                booking: {
                   destination: '',
                   date: '',
                   email: '',
                   phone: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-booking';
                
                axios.post(apiURL, this.booking).then(() => {
                  this.$router.push('/view')
                  this.booking = {
                    destination: '',
                    date: '',
                    email: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>

<style>
.row {
  margin: 2rem 0;
}

.col-md-6 {
  margin: auto;
}

.text-center {
  text-align: center;
}

.form-group {
  margin: 1rem 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type='text'],
input[type='email'] {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

input[type='text']:focus,
input[type='email']:focus {
  outline: 0;
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-danger {
  color: #000000;
  background-color: #fde02f;
  border-color: #fde02f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #fde02f;
  border-color: #fde02f;
}

.btn-block {
  display: block;
  width: 20%;
}

.btn:focus,
.btn:hover {
  text-decoration: none;
}

</style>
