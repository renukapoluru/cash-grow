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
import { IonPage, IonContent, toastController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Storage } from '@capacitor/storage';

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
  mounted() {
    this.fetchUsers();
  },
  methods:{
        fetchUsers() {
          fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/users')
          .then(response => response.json())
          .then(data => {
            this.users = data;
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        },
        async signIn(){
          console.log('Users', this.users);
          let userFound = false;
          let passwordMatched = false;
          let role = '';
          await this.users.forEach((entry: any) => {
              console.log(entry);
              if(entry.email == this.email) {
                userFound = true;
                role = entry.role;
                if(entry.password == this.password) {
                  passwordMatched = true;
                    const user = [{
                      key: 'role',
                      value: entry.role
                    },
                    {
                      key: 'email',
                      value: entry.email
                    },
                    {
                      key: 'id',
                      value: entry.id
                    },
                    {
                      key: 'uuid',
                      value: entry.profileId
                    }];
                    Storage.set({ key: 'user', value:JSON.stringify(user)});
                }
              }
          });
          if(userFound) {
            if(passwordMatched) {
              this.$router.push('/tabs/tab1');
            } else {
              this.callToast('Incorrect password');
            }
          } else {
            this.callToast('User not found');
          }
        },
        async callToast(message: string) {

          const toast = await toastController
            .create({
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