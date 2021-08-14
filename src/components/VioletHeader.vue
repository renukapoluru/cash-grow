<template>
  <div id="header" class="violet-header">
    <div class="user-notification">
      <div class="hello-user">
          <h3>{{ firstText || 'Hello!' }}</h3>
          <h4>{{ secondText || 'Renuka Poluru'}}</h4>
        </div>
        <div class="notification">
          <img :src="notificationIcon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'VioletHeader',
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
    padding:30px 30px 20px;
    background:#4A00E0;
    z-index: 1;
}
#header .user-notification {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    color:#fff;
}

#header h4 {
    color: #ffffffcf;
    font-size: 1rem;
    margin:0;
}
#header .notification img {
  cursor: pointer;
}
</style>