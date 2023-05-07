<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/create">Create Booking</router-link></li>
        <li><router-link to="/view">List of Bookings</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Apply a reset to remove any default padding and margin */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Apply a global font family and size */
body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}

/* Style the navigation bar */
nav {
  background-color:#000024;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

/* Style the navigation links */
nav ul {
  margin: 0px;
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 10px;
}

nav ul li a {
  color: #ffffff;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav ul li a:hover {
  background-color: #fde02f;
  color:#000000;
}

/* Style the router view */
.router-view {
  margin: 20px;
}


</style>
