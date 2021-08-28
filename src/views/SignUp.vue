<template>
  <ion-page id="step-1" class="sign-up-in-page signup-step">
    <ion-content class="page-content" :fullscreen="true">
      <div class="signup-content">
        <div class="sign-up-in-heading">
          <h3>Create Account,</h3>
          <h4>Sign up to get started!</h4>
        </div>
        <div class="sign-form">
          <div class="input-field">
            <img class="input-icon" :src="usersIcon" />
            <select v-model="role" name="role" id="role">
              <option value="I want to.." selected disabled>I want to..</option>
              <option value="LEND">I want to Lend</option>
              <option value="BORROW">I want to Borrow</option>
            </select>
          </div>
          <div class="input-field">
            <img class="input-icon" :src="genderIcon" />
            <select v-model="gender" name="role" id="role">
              <option value="Select" selected disabled>Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHERS">Others</option>
            </select>
          </div>
          <div class="input-field">
            <img class="input-icon" :src="userIcon" />
            <input v-model="firstname" type="text" placeholder="First Name" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="userIcon" />
            <input v-model="lastname" type="text" placeholder="Last Name" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="dobIcon" />
            <input v-model="dob" type="date">
          </div>
          <div class="input-field">
            <img class="input-icon" :src="emailIcon" />
            <input v-model="email" type="text" placeholder="Email" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="callIcon" />
            <input v-model="phone" type="text" placeholder="Phone Number" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="passwordIcon" />
            <input v-model="password" type="password" placeholder="Password" />
          </div>
          <div class="input-field">
            <img class="input-icon" :src="passwordIcon" />
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
import { IonPage, IonContent, toastController,loadingController } from '@ionic/vue';

import { defineComponent } from 'vue';

import { uniqueId } from '@/common/utils';

import { CashGrowManager } from "@/services/services";


export default  defineComponent({
  name: 'SignUp',
  components: { 
    IonContent, 
    IonPage
  },
  data(){
    return{
      firstname: '',
      lastname: '',
      gender: 'Select',
      role: 'I want to..',
      password: '',
      repassword: '',
      email: '',
      dob: '',
      phone: '',
      usersIcon : require('@/assets/users-icon.png'),
      userIcon : require('@/assets/user-icon.png'),
      pwdIcon: require('@/assets/pwd-icon.png'),
      borrowIcon: require('@/assets/borrow-icon.png'),
      emailIcon: require('@/assets/email-icon.png'),
      callIcon: require('@/assets/call-icon.png'),
      passwordIcon: require('@/assets/password-icon.png'),
      genderIcon: require('@/assets/bigender.png'),
      dobIcon: require('@/assets/calendar-icon.png'),
      accountHolderRes : null
    }
  },
  methods:{
        async signUp(){
          const loading = await loadingController.create({
              message: 'Signing up...'
          });
          loading.present();
          const dt = new Date(this.dob);
          const year = dt.getFullYear();
          const month =  parseInt((dt.getMonth() < 10 ? '0' : '') + (dt.getMonth()+1));
          const day = parseInt((dt.getDate() < 10 ? '0' : '') + dt.getDate());
          const accountHolder = {
              "ifiID": "140793",
              "formID": uniqueId(),
              "spoolID": "123",
              "individualType": "REAL",
              "salutation": "Ms.",
              "firstName": this.firstname,
              "middleName": "",
              "lastName": this.lastname,
              "profilePicURL": this.gender == 'MALE' ? 'https://i.im.ge/2021/08/27/QoBS1G.jpg': 'https://i.im.ge/2021/08/27/QoBOAc.jpg',
              "dob": {
                  "year": year,
                  "month": month,
                  "day": day
              },
              "gender": this.gender,
              "mothersMaidenName": "",
              "kycDetails": {
                  "kycStatus": "MINIMAL",
                  "kycStatusPostExpiry": "string",
                  "kycAttributes": {},
                  "authData": {
                      "PAN": uniqueId()
                  },
                  "authType": "PAN"
              },
              "vectors": [
                  {
                      "type": "p",
                      "value": `+91${this.phone}`,
                      "isVerified": false
                  }
              ],
              "pops": [],
              "customFields": {
                  "companyID": [
                      1,
                      2,
                      3
                  ]
              },
              "tags": [
                  {
                      "type": "vbo",
                      "value": "swiggy",
                      "isVerified": false
                  }
              ],
              "source": "postman"
          };
          this.accountHolderRes = await CashGrowManager.createAccountHolder({ accountHolder: accountHolder});
          const { accountHolderID, accountID } = this.accountHolderRes.data;
          const rndInt = Math.floor(Math.random() * 12) + 1;
          const limit = rndInt*5000*10;
          const data = {
            firstName: this.firstname,
            lastName: this.lastname,
            role: this.role,
            email: this.email,
            userId: this.createUserId(),
            password: this.password,
            limit: limit,
            profilePicURL:  this.gender == 'MALE' ? 'https://i.im.ge/2021/08/27/QoBS1G.jpg': 'https://i.im.ge/2021/08/27/QoBOAc.jpg',
            accountHolderID: accountHolderID,
            accountID: accountID
          };
          fetch('https://enigmatic-mesa-66554.herokuapp.com/users', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(() => {
            this.callToast('success','Account created. Please sign in.');
            this.$router.push('/signin');
            loading.dismiss();
          })
          .catch((error) => {
            console.error('Error:', error);
            this.callToast('danger','Error creating account.');
            loading.dismiss();
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