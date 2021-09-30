<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="homeOutline" />
            <ion-label>HOME</ion-label>
          </ion-tab-button>
            
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="airplane" />
            <ion-label>FLIGHTS</ion-label>
          </ion-tab-button>
          
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="personOutline" />
            <ion-label>ACCOUNT</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { homeOutline, calendarOutline, personOutline, airplane} from 'ionicons/icons';
export default {
  name: 'Tabs',
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeOutline, 
      calendarOutline, 
      personOutline,
      airplane
    }
  }
}
</script>
<style scoped>
ion-tab-bar.md.hydrated {   
  box-shadow: 0px -1px 10px rgb(0 0 0 / 25%);
  border: 0;
  height:70px;
}
ion-tab-bar ion-icon.md.hydrated {
    margin-bottom: 5px;
}
ion-tab-bar ion-label.sc-ion-label-md-h.sc-ion-label-md-s.md.hydrated {
    font-weight: 500;
}
</style>