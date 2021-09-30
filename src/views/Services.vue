<template>
  <ion-page>
    <GoBack @click="sendToHome()" />
    <ion-content :fullscreen="true">
      <div class="page-padding services-page">
        <h3 class="section-heading" v-if="type">
          {{ type }}
        </h3>
        <h3 v-else class="section-heading route-params">
          {{ $route.params.type }}
        </h3>
        <div class="listing">
            <div class="list-item" v-for="(item,index) in data" :key="index">
                <div class="first-letter" :style="{'background-color': getBackgroundColor()}">
                  {{ item.name.charAt(0)}}
                </div>
                <div class="details">
                <h4>{{ item.name }}</h4>
                <div class="profile-rating">
                <h5 class="rating" :style="{'color':getRatingColor(item.rating),'width': getColorWidth(item.rating)}">
                  <img v-if="item.rating" :src="getRatingColor(item.rating)" />
                  <span v-else class="no-ratings">No ratings</span>
                </h5><span v-if="item.rating">({{ item.user_ratings_total }})</span>
                </div>
                </div>
                <div class="navigation">
                  <img @click="navigateToDirections(item.name,item.location.lat,item.location.lng)" class="navigate" :src="navigateIcon" />
                </div>
            </div>
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
    navigateIcon : require('@/assets/pin.png'),
  }),
  mounted() {
    this.fetchServices();
  },
  methods: {
    async fetchServices() {
      this.type = this.$route.params.type;
      console.log('type is', this.type);
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
    navigateToDirections(name: string, lat: number, lng: number){
      this.$router.push('/directions/'+name+'/'+lat+'/'+lng);
    }
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

</style>