<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>
<style>
body h1, body h2, body h3, body h4, body h5, body h6,body p {
    margin: 0 0 15px;
}
* {
  box-sizing: border-box;
}

body a {
    text-decoration: none;
}

/* First Screen */

#first-screen {
  background:#4A00E0;
}
#first-screen ion-content {
    --background: #4A00E0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
#first-screen .logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#first-screen .button {
    display: block;
    --background: white;
    color: #4A00E0;
    margin-bottom: 30px;
}

/* Sign Up In Flow */


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
    height: 40px;
}

.input-field input:focus {
    outline: none;
    border-color: #4A00E0;
}


</style>