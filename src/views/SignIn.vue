<template>
  <ion-page id="step-1" class="sign-up-in-page signup-step">
    <ion-content :fullscreen="true">
      <div class="signup-content">
        <div class="sign-up-in-heading">
          <h3>Welcome,</h3>
          <h4>Sign in to continue!</h4>
        </div>
        <div class="sign-form">
          <div class="input-field">
            <img class="input-icon" :src="userIcon" />
            <input type="text" placeholder="User ID" />
          </div><div class="input-field">
            <img class="input-icon" :src="pwdIcon" />
            <input type="password" placeholder="Password" />
          </div>
          <ion-button color="primary" href="/tabs/tab1">Sign In</ion-button>
        </div>
      </div>
      <div class="signup-bottom">
        I'm a new user, <a href="/signup">Sign Up</a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'SignIn',
  components: { 
    IonContent, 
    IonPage
  },
  data: () => ({
    userIcon : require('@/assets/user-icon.png'),
    pwdIcon: require('@/assets/pwd-icon.png'), 
  })
}
</script>
<style>
</style>