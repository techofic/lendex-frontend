<template>
  <div>
    <Navbar />
    <Nuxt />
    <BottomContainer />
  </div>
</template>
<script>
import Navbar from "/components/navbar";
import BottomContainer from "/components/footer";

export default {
  components: {
    Navbar,
    BottomContainer,
  },
};
</script>
