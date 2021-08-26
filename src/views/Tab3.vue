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
              <a>+ Add Funds</a>
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
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

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
    console.log('User',JSON.parse(item.value));
    const user: { id: string} = JSON.parse(item.value);
    fetch('https://6107b8f1d73c6400170d35a9.mockapi.io/users/'+user.id).then(response => response.json())
    .then(userDetails => {
        console.log('User Details are', userDetails);
        this.userInfo = userDetails;
    }).catch((error) => {
        console.error('Error:', error);
    });
  },
}
</script>
<style>

.profile-page {
  padding:30px 20px;
}

.user-card .user-image {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    background-size: cover;
    background-position: center;
}

.user-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.user-card h4 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  font-family: 'PT Sans',sans-serif;
}

.user-card .user-image {
    margin-right: 20px;
}

.user-card h5 {
    opacity: 0.5;
    font-size: 16px;
    margin: 2px 0 0;
}

.card {
    padding: 20px 0;
    border-bottom: 1px solid #f6f3f3;
}

.card img.icon {
    max-height: 25px;
    vertical-align: middle;
    margin-right: 10px;
}

.card {
    line-height: 1;
    position: relative;
    font-size: 15px;
    font-family: 'PT Sans', sans-serif;
}

img.go {
    max-height: 15px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 10px;
}

.cards {
    margin-top: 20px;
}

.card h4 {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 1;
}

.card.logout {
    color: red;
    font-weight: 600;
}

.card.logout a {
  color:inherit;
}

.funds {
    border: 1px solid #f6f3f3;
    border-left: 0;
    border-right: 0;
    margin: 20px 0 0;
    padding: 20px 0;
}

.funds {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.funds > .column {
    width: 50%;
}

.funds h4 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
}

.funds h5 {
    font-size: 16px;
    margin-top: 5px;
    margin: 3px 0 0;
    opacity: 0.5;
}

</style>