<template>
  <div id="header">
    <div class="hello-user">
      <img :src="locationIcon" />
      <input type="text" v-model="location" />
      <img class="down" :src="arrowIcon" />
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
    location: 'Kempagowda International Airport',
    locationIcon : require('@/assets/location.png'),
    arrowIcon : require('@/assets/down-chevron.png'),
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