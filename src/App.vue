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

/* Header */

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:30px 20px 20px;
    background:#fff;
    z-index: 1;
}

#header .user-notification {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#header h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
}

#header h4 {
    color: #7A7A7A;
    font-size: 0.9rem;
    margin:0;
}
#header .notification img {
  cursor: pointer;
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
.input-field input,
.input-field select {
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
    height: 52px;
    background: #ffffff;
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
    max-width: 20px;
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

/* Page */

.page-padding {
  padding:0px 20px;
}

/* Loan Card */
.loan-requests {
  padding:30px 20px;
}

.loan-card .card-top {
    display: flex;
    flex-wrap: wrap;
}

.loan-card .card-top .profile-pic {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 20px;
}

.loan-card .card-top .profile-pic img {
    width: 100%;
    height: 100%;
}

.loan-card .profile-details > h4 {
    margin-bottom: 5px;
    height:20px;
    overflow: hidden;
}

.loan-card .profile-details > h4 img {
    max-width: none;
    width: 68px;
}

.loan-card .profile-details.image-rating {
}

.loan-card .tenure-interest {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.loan-card .tenure-interest > h3 {margin-right: 30px;}

.loan-card .detail {
    width: calc(100% - 180px);
}

.loan-card .profile-details h3 {
    font-family: 'Roboto',sans-serif;
    font-size: 16px;
    margin-bottom: 5px;
}

.loan-card .profile-details h3 {font-family: 'Roboto',sans-serif;font-size: 16px;margin-bottom: 5px;}

.loan-card .image-rating h4.purpose {
    height: auto;
    color: #B9AEAE;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
}

.loan-card .profile-details h3 {font-family: 'Roboto',sans-serif;font-size: 16px;margin-bottom: 5px;}

.loan-card .image-rating h4.purpose {
    height: auto;
    color: #B9AEAE;
    font-weight: bold;
    font-size: 12px;
}

.loan-card .card-bottom {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.loan-card .card-bottom h3 {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    font-family: 'Roboto',sans-serif;
    margin-bottom: 5px;
}

.card-bottom > div {
    text-align: center;
    width: 31.333%;
    padding: 10px 0px;
    padding-right: 1.5%;
    border-right: 1px solid #D2CCCC;
    margin-right: 1.5%;
}

.loan-card .card-bottom h4 {
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #787878;
    margin: 0;
}

.card-bottom > div:last-child {
    padding-right: 0;
    border-right: 0;
    margin-right: 0;
}

.home-funds {
  background:#4A00E0;
}
.home-funds {
    background: #4A00E0;
    padding: 10px 30px 50px;
    margin-top: -1px;
}

.home-funds h4, .home-funds h3 {
    color: #ffffff;
    font-family: 'Roboto',sans-serif;
}

.home-funds h4 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    opacity: 0.75;
    text-transform: uppercase;
}

.home-funds h3 {
    font-size: 20px;
    margin: 0;
    line-height: 1;
}

.home-funds > div {
    margin-bottom: 20px;
}

.home-funds .funds h3 {
    font-size: 30px;
}

.home-funds .lent-earned {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 30px 0 0;
}

/* Table Details */

.table-details {
    padding: 5px 20px;
    background: #F5EFEF;
    margin-top: 20px;
    border-radius: 10px;
}

.table-details .row {
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
}

.table-details .row > h4 {
    width: 49%;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    margin: 0;
}

.table-details .row > h4:first-child {
    margin-right: 2%;
}

/* Default */

.default-tab-padding {
    padding:0 20px;
}

.all-text-white,
.all-text-white h1,
.all-text-white h2,
.all-text-white h3,
.all-text-white h4,
.all-text-white h5,
.all-text-white h6,
.all-text-white p {
    color:#fff;
}

/* CARD */

.application {
    background-image: linear-gradient(#FF035E, #F916C7);
    border-radius: 10px;
    padding:40px 25px;
}

.application h5 {
    font-size: 12px;
    line-height: 20px;
    font-weight: 799;
    color: #EDEDED;
    margin-bottom: 5px;
}

.application h3 {
    margin: 0;
    font-family: 'Roboto',sans-serif;
    font-size: 24px;
    line-height: 1;
}

.application {
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-between;
}

.application img {
    vertical-align: middle;
}
</style>