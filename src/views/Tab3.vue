<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="profile-page">
        <div class="user-card">
            <div class="user-image" :style="'background-image:url('+userInfo.profilePicURL+');'">
            </div>
            <div class="user-info">
              <h4>{{ userInfo.firstName }} {{ userInfo.lastName }}</h4>
              <h5>{{ userInfo.email }}</h5>
            </div>  
        </div>
        <div class="funds">
            <div class="column">
              <h4>5,00,000</h4>
              <h5>Balance</h5>
            </div>
            <div class="column">
              <a href="/lender/addfunds">+ Add Funds</a>
            </div>
        </div>
        <div class="cards">
            <div class="card" v-for="(card, index) in cards" :key="index">
              <img class="icon" :src="card.icon">
              <h4>{{ card.title }}</h4>
              <img src="https://i.im.ge/2021/08/26/QQGzL0.png" class="go"/>
            </div>
            <div class="card logout">
                <a href="/signin">
                <img class="icon" src="https://i.im.ge/2021/08/26/QTX6d4.png" />
                <h4>Logout</h4>
                </a>
            </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

import { Storage } from '@capacitor/storage';

export default  {
  name: 'Tab3',
  components: { IonContent, IonPage},
  data: () => ({
    userInfo: {},
    cards: [
      {
        title: 'My Money',
        icon: 'https://i.im.ge/2021/08/26/QQGxQD.png'
      },
      {
        title: 'Settings',
        icon: 'https://i.im.ge/2021/08/26/QQGgdp.png'
      },
      {
        title: 'Support',
        icon: 'https://i.im.ge/2021/08/26/QQG8PP.png'
      },
      {
        title: 'Preferences',
        icon: 'https://i.im.ge/2021/08/26/QQGRk1.png'
      }
    ]
  }),
  async mounted() {
    const item: any= await Storage.get({ key: 'user' });
    const user: any = JSON.parse(item.value);
    this.userInfo = user;
  },
}
</script>
<style>

</style>