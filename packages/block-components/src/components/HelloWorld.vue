<!--  -->
<template>
  <div class="box">
    <div @click="handleClick">sfasdfasdfasdfadsf</div>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("[ 111111 ] >", 111111);
};
</script>

<style scoped>
.box {
  background: red;
  color: aqua;
}
</style>
