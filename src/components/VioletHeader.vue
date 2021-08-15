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
    background:#4A00E0;
}
#header h3 {
    color:#fff;
}

#header h4 {
    color: #ffffffcf;
}
</style>