<template>
  <ion-page>
    <GoBack @click="sendToHome()" />
    <ion-content :fullscreen="true">
      <div class="page-padding services-page" style="padding:0;">
        <h3 class="section-heading" v-if="name" style="padding:0 20px;">
          <span style="color:#000;">Navigating to</span> {{ $route.params.name }}<span style="color:#000;">...</span>
        </h3>
        <h3 v-else class="section-heading route-params">
          Navigation
        </h3>
        <div class="navigator-screen">
          <iframe src="/assets/scene.html" style="position:absolute; width: 100%; height: 100%;"></iframe>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import GoBack from '@/components/GoBack.vue';

import { Storage } from '@capacitor/storage';

import { uniqueId } from '@/common/utils';
import { callToast } from '@/common/utils';

import { CashGrowManager } from "@/services/services";

export default  {
  name: 'Services',
  components: { 
    IonContent, 
    IonPage,
    GoBack
  },
  data: () => ({
    data: [],
    type: '',
    name: '',
    lat: null,
    lng: null,
    navigateIcon : require('@/assets/pin.png'),
  }),
  mounted() {
    this.fetchServices();
  },
  methods: {
    async fetchServices() {
      this.name = this.$route.params.name;
      this.lat = this.$route.params.lat;
      this.lng = this.$route.params.lng;
      console.log('type is', this.name,this.lat,this.lng);
      try {
        fetch('http://localhost:3000/services?type=restaurant')
          .then(response => response.json())
          .then(result => { this.data = [...result];})
          .catch(error => console.log('error', error));
      } catch(e) {
        callToast('danger', 'Error while fetching places.');
      }
    },
    getRatingColor(rating: number) {
      if(rating > 3.5) {
        return require('@/assets/rating.png');
      } else if(rating >= 3) {
        return require('@/assets/yellow-rating.png');
      } else {
        return require('@/assets/red-rating.png')
      }
    },
    getColorWidth(rating: number) {
      if(rating >= 5) {
        return '68px';
      } else {
        return 13.6*rating+1+'px'
      }
    },
    getBackgroundColor() {
      return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    },
    sendToHome(){
      this.$router.push('/tabs/tab1');
    },
  }
}
</script>
<style>
.services-page .section-heading {
    text-transform: capitalize;
}
.services-page .rating img {
    width: 73px;
    display: block;
}

.services-page .list-item {
    background: #f5f5f5;
    border-radius: 10px;
    margin: 0 0 20px;    
    display: flex;
    align-items: center;
}

.services-page .list-item h5.rating {
    overflow: hidden;
}

.services-page .list-item h5.rating img {
  max-width: none;
}

.services-page .first-letter {
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: auto;
    line-height: 1;
    text-align: center;
    width: 80px;
    height: 100px;
    line-height: 100px;
    color: #ffffff;
    font-weight: bold;
    font-size: 25px;
    text-shadow: 4px 4px 15px #000000;
}

.services-page .list-item .details {
    padding: 25px 30px;
    width: calc(100% - 140px);
}

.services-page .list-item .details h5 {
    margin-bottom: 0;
}

.services-page .profile-rating {
    display: flex;
    align-items: center;
}

.services-page .profile-rating span {
    font-size: 12px;
    color: #908787;
    margin-left: 5px;
}

.services-page .list-item h4 {
    margin-bottom: 5px;
}

.services-page .list-item img.navigate {
    height: 30px;
    cursor: pointer;
}

.services-page iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
}

</style>