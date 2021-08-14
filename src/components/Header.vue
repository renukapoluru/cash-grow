<template>
  <div id="header">
    <div class="hello-user">
        <h3>{{ firstText || 'Hello!' }}</h3>
        <h4>{{ secondText || 'Renuka Poluru'}}</h4>
      </div>
      <div class="notification">
        <img :src="notificationIcon" />
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Header',
  props: {
    firstText: { type: String},
    secondText: { type: String }
  },
  data: () => ({
    notificationIcon : require('@/assets/notification.png'),
  }),
}
</script>

<style scoped>
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:30px 30px 20px;
    background:#fff;
    z-index: 1;
}
#header h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
}

#header h4 {
    color: #7A7A7A;
    font-size: 1rem;
    margin:0;
}
#header .notification img {
  cursor: pointer;
}
</style>