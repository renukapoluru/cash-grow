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
            <input v-model="email" type="text" placeholder="Email" />
          </div><div class="input-field">
            <img class="input-icon" :src="pwdIcon" />
            <input v-model="password" type="password" placeholder="Password" />
          </div>
          <ion-button color="primary" @click="signIn">Sign In</ion-button>
        </div>
      </div>
      <div class="signup-bottom">
        I'm a new user, <a href="/signup">Sign Up</a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, toastController, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Storage } from '@capacitor/storage';

import { CashGrowManager } from "@/services/services";

export default defineComponent({
  name: 'SignIn',
  components: { 
    IonContent, 
    IonPage
  },
  data(){
    return{
      users: [],
      userId:'',
      email: '',
      password: '',
      userIcon : require('@/assets/user-icon.png'),
      pwdIcon: require('@/assets/pwd-icon.png'), 
    }
  },
  methods:{
        async signIn(){
          const loading = await loadingController.create({
              message: 'Signing in...'
          });
          loading.present();
          try {
            const { data } = await CashGrowManager.loginUser({ email: this.email, password: this.password});
            if(data.length < 1) {
              this.callToast('danger', `Couldn't find the user.`);
            } else {
              Storage.set({ key: 'user', value:JSON.stringify(data[0])});
              if(data[0].role == 'BORROW'){
                this.$router.push('/tabs/tab1');
              } else {
                this.$router.push('/lender-tabs/tab1');
              }
            }
            loading.dismiss();
          } catch(e) {
            loading.dismiss();
            this.callToast('danger', `Couldn't find the user.`);
          }
        },
        async callToast(type: string, message: string) {

          const toast = await toastController
            .create({
              color: type,
              message: message,
              duration: 2000
            })
          return toast.present();
        }
    }

});
</script>
<style>
</style>