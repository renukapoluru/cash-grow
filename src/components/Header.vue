<template>
  <div id="header">
    <div class="hello-user">
        <h3>{{ firstText || 'Hello!' }}</h3>
        <h4>{{ secondText || userName}}</h4>
      </div>
      <div class="notification">
        <img :src="notificationIcon" />
    </div>
  </div>
</template>

<script lang="ts">

import { Storage } from '@capacitor/storage';

export default {
  name: 'Header',
  props: {
    firstText: { type: String},
    secondText: { type: String}
  },
  data: () => ({
    userName : '',
    notificationIcon : require('@/assets/notification.png'),
  }),
  async mounted() {
    const item: any= await Storage.get({ key: 'user' });
    const user: { firstName: string; lastName: string} = JSON.parse(item.value);
    this.userName = user.firstName  + " " + user.lastName;
  }
}
</script>

<style scoped>

</style>