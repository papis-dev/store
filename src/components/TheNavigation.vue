<template>
  <section class="test">
    <section class="test0">
      <img src="@/assets/EduVibe.png" alt="logo">
    </section>
    <section class="test1">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </section>
    <section class="test2">
      <button><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
      <router-link to="/">
        <font-awesome-icon :icon="['fas', 'user']" />
        Login / Register
      </router-link>
    </section>
  </section>
</template>
<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap');

  .test{
    display: flex;
    justify-content: space-between;
  }
  .test0{
    padding-left: 10%;
  }
  .test1{
    display: flex;
    justify-content: space-between;
    font-family:'Urbanist', sans-serif;
    width:15%;
  }
  .test2{
    display: flex;
    justify-content: space-between;
    width: 13%;
    padding-right: 10%;
  }
</style>
