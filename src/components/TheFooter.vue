<template>
  <section class="footer">
    <section class="footer1">
      <section class="footer11">
        <img src="@/assets/EduVibe.png" alt="logo">
        <p>It is a long established fact that a
    reader will be distracted by the
    readable content of a page when
    looking at its layout. The point of using
    Lorem Ipsum.
        </p>
        <ul>
          <li><font-awesome-icon :icon="['fab', 'facebook-f']"/></li>
          <li><font-awesome-icon :icon="['fab', 'linkedin-in']" /></li>
          <li><font-awesome-icon :icon="['fab', 'pinterest']" /></li>
          <li><font-awesome-icon :icon="['fab', 'twitter']" class="icon alt"/></li>
        </ul>
      </section>
      <section class="footer12">
        <h2>Explore</h2>
        <ul>
          <li>About Us</li>
          <li>Upcoming Events</li>
          <li>Blog & News</li>
          <li>FAQ Question</li>
          <li>Testimonial</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
      <section class="footer13">
        <h2>Useful Links</h2>
        <ul>
          <li>Contact Us</li>
          <li>Pricing Plan</li>
          <li>Gallery</li>
          <li>Instructor</li>
          <li>Purchase Guide</li>
        </ul>
      </section>
      <section class="14">
        <h2>Contact Info</h2>
        <ul>
          <li><font-awesome-icon :icon="['fas', 'location-dot']" />275 Quadra Street Victoria Road,
    New York</li>
          <li><font-awesome-icon :icon="['fas', 'phone']" />+1 (332) 777-4226</li>
          <li><font-awesome-icon :icon="['fas', 'envelope']" />uxbeast@gmail.com</li>
        </ul>
      </section>
    </section>
    <section>
      <p>Copyright 2023 @UX Beast. All Rights Reserved</p>
    </section>
  </section>
</template>

<script>

</script>

<style>
.footer{
  background-color : #231F40;
  color:white;
  width: auto;
  height: 643.55px;
  top: 8517px;

}
.footer1{
  display: flex;
  justify-content: space-between;
}
.footer11, .footer12, .footer13, .footer14{
  width: 200px;
  height: 400.47px;
}
</style>
