<template>
  <ion-page id="step-1" class="sign-up-in-page signup-step">
    <ion-content :fullscreen="true">
      <div class="signup-content">
        <div class="sign-up-in-heading">
          <h3>Create Account,</h3>
          <h4>Sign up to get started!</h4>
        </div>
        <div class="sign-form">
          <div class="input-field">
            <img class="input-icon" :src="userIcon" />
            <select v-model="role" name="role" id="role">
              <option value="I want to.." selected disabled>I want to..</option>
              <option value="LEND">I want to Lend</option>
              <option value="BORROW">I want to Borrow</option>
            </select>
          </div>
          <div class="input-field">
            <img class="input-icon" :src="userIcon" />
            <input v-model="name" type="text" placeholder="Full Name" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="userIcon" />
            <input v-model="email" type="text" placeholder="Email" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="userIcon" />
            <input v-model="phone" type="text" placeholder="Phone Number" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="pwdIcon" />
            <input v-model="password" type="password" placeholder="Password" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="pwdIcon" />
            <input v-model="repassword" type="password" placeholder="Re-enter Password" />
          </div>
          <ion-button color="primary" @click="signUp">Sign Up</ion-button>
        </div>
      </div>
      <div class="signup-bottom">
        I'm already a member, <a href="/signin">Sign In</a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default  defineComponent({
  name: 'SignUp',
  components: { 
    IonContent, 
    IonPage
  },
  data(){
    return{
      name: '',
      role: 'I want to..',
      password: '',
      repassword: '',
      email: '',
      phone: '',
      userIcon : require('@/assets/user-icon.png'),
      pwdIcon: require('@/assets/pwd-icon.png')
    }
  },
  methods:{
        async signUp(){
           //const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
           console.log(this.role);
           const data = {
             name: this.name,
             role: this.role,
             email: this.email,
             userId: this.createUserId(),
             password: this.password
           }
          fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/users', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        },
        createUserId() {
          let ID = "";
          const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          for ( let x = 0; x < 2; x++ ) {
            ID += characters.charAt(Math.floor(Math.random() * 36));
          }
          ID += Math.floor(Math.random()*(999-100+1)+100);
          return ID;
        }
    }
});
</script>
<style>
</style>