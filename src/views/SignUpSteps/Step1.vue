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
            <input type="text" placeholder="Full Name" />
          </div><div class="input-field">
            <img class="input-icon" :src="pwdIcon" />
            <input type="password" placeholder="Password" />
          </div>
          <ion-button color="primary">Sign In</ion-button>
        </div>
      </div>
      <div class="signup-bottom">
        I'm a new user, <a href="/tabs/tab1">Sign Up</a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'Step1',
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
.sign-up-in-page {
  padding:30px;
}

.sign-up-in-page h3 {
    font-size: 1.7rem;
    margin-bottom: 7px;
}

.sign-up-in-page h4 {
    color: #7A7A7A;
    font-size: 1.25rem;
    margin:0;
}
.sign-up-in-page .sign-form {
  padding-top:80px;
}
.input-field input {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    border: 0;
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 2;
    margin-bottom: 20px;
    margin: 0 0 20px;
    padding: 9px 10px 9px 50px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
}

.input-field {
    position: relative;
}

.input-field img.input-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 18px;
}
.signup-bottom {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 16px;
}

.signup-bottom a {
    text-decoration: none;
    font-weight: 600;
}
.sign-form .button {
    width: 100%;
    margin: 0;
    --border-radius: 25px;
}

.input-field input:focus {
    outline: none;
    border-color: #4A00E0;
}
</style>