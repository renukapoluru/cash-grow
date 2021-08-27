<template>
  <div id="go-back">
    <img :src="goBackIcon" />
  </div>
</template>

<script lang="ts">


export default {
  name: 'GoBack',
  props: {
  },
  data: () => ({
    goBackIcon : require('@/assets/goback.png'),
  })
}
</script>

<style>

div#go-back {
    position: relative;
    z-index: 55;
    padding: 10px 20px 0;
    background:#fff;
}

div#go-back img {
    max-width: 30px;
}

.hide-top-padding#header {
  padding-top:0;
}
</style>