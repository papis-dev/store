<template>
  <section class="home">
      <section class="home11">
        <img id="shape0501" src="~@/assets/shape-05-01-2.png" alt="image3">
        <img id="girl2" src="~@/assets/girl-bg-2.png" alt="image1">
        <img id="banner0102" src="~@/assets/banner-01-2.png" alt="image4">
        <img id="shape1901" src="~@/assets/shape-19-01-2.png" alt="image2">
      </section>
      <section class="home12">
        <span>BETTER LEARNING FUTURE WITH US</span>
        <h1>Committed To Learn Excellence In Education</h1>
        <p>Discover the possibilities of online education and unlock your true
  potential! Expand your mind with online education.</p>
        <router-link to="/">
          Get Started Today
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </router-link>
       <!---  <img src="~@/assets/arrow-2.png" alt="image5">  -->
      </section>
    <!-- <img id="homeimg" src="~@/assets/shape-19-2.png" alt="shape">--->
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
};
</script>

<style>
  .home{
    background-color: #F8E3C3;
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid red;
  }
  .home1{
    display: flex;
    flex-direction: row-reverse;
  }
  .home11{
  }
  #girl2{
    width: 100px;
    height: 100px;
  }
  .home #homeimg{
    width: 89px;
    height: 102px;
    border: 1px solid blue;

  }
  .home11 #banner0102{
    width: 100px;
    height: 100px;
    padding: 100px 100px 100px 0;
  }
  .home12{
    position: relative;
    padding: 100px 0 100px 100px;
  }
  .home12::after{
    content:  url('~@/assets/arrow-2.png');;
    /* background-image: url('~@/assets/arrow-2.png');
    background-repeat: no-repeat; */
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .home12::before{
    content:  url('~@/assets/shape-19-2.png');;
    position: absolute;
    top: 100px;
    z-index: -1;
    left: 50px;
  }
  #shape0501{
    width: 50px;
    height: 52px;
  }
  #shape1901{
    width: 96px;
    height: 96px;
  }
</style>
