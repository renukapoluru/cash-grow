<template>
  <ion-page id="first-screen">
    <ion-content :fullscreen="true">
      <div class="logo">
        <ion-button href="/signin">Sign In</ion-button>
        <img :src="whiteLogo" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'SignUp',
  components: { 
    IonContent, 
    IonPage
  },
  data: () => ({
    whiteLogo : require('@/assets/white-logo.png'),
  })
}
</script>
<style>

</style>