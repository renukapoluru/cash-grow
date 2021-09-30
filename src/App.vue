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
    padding:20px 20px 20px;
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
    text-transform: capitalize;
}
#header .notification img {
  cursor: pointer;
}

#header img.down {
    max-width: 18px;
}

.hello-user input {
    border: 0;
    margin: 0 5px;
    color: #000000;
    width: 100%;
    font-size: 10px;
}

.hello-user input:focus {
    outline: none;
}

.hello-user {
    display: flex;
    align-items: center;
    width: 100%;
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
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 16px;
    padding-top: 10px;
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
    margin: 30px auto 5px;
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
    font-family: 'PT Sans',sans-serif;
    font-size: 16px;
    margin-bottom: 5px;
}

.loan-card .profile-details h3 {font-family: 'PT Sans',sans-serif;font-size: 16px;margin-bottom: 5px;}

.loan-card .image-rating h4.purpose {
    height: auto;
    color: #B9AEAE;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
}

.loan-card .profile-details h3 {font-family: 'PT Sans',sans-serif;font-size: 16px;margin-bottom: 5px;}

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
    font-family: 'PT Sans',sans-serif;
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
    padding: 10px 20px 50px;
    margin-top: -1px;
}

.home-funds h4, .home-funds h3 {
    color: #ffffff;
    font-family: 'PT Sans',sans-serif;
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

a#go-back {
    margin: 20px 20px 0;
    display: block;
    position: relative;
    z-index: 3;
}

a#go-back img {
    max-height: 25px;
}

a#go-back+#header {
    padding-top: 5px;
}

/* CARD */

.application {
    background-image: linear-gradient(#FF035E, #F916C7);
    border-radius: 10px;
    padding:20px 15px;
    margin-bottom: 20px;
    position: relative;
}

.application a.link-card {
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
}

.application img {
    max-height:30px;
}

.application.educational{
    background-image: linear-gradient(#005CE7,#24E2FC);
}

.application.home{
    background-image: linear-gradient(#FF6B00,#FF1694);
}

.application.business{
    background-image: linear-gradient(#B3CF05,#24E2FC);
}

.application.other{
    background-image: linear-gradient(#4A00E0,#FF1694);
}

.application h5 {
    font-size: 12px;
    line-height: 20px;
    font-weight: 799;
    color: #EDEDED;
    margin-bottom: 5px;
    text-transform: uppercase;
}

.application h3 {
    margin: 0;
    font-family: 'PT Sans',sans-serif;
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

.application img {
    max-height: 50px;
}

.application h5.paid-total {
    text-transform: none;
    margin: 5px 0 0;
}

.application div.progressbar {
    display: block;
    width: 175%;
    position: relative;
}

.application div.progressbar span.filled, .application div.progressbar span.full {
    border-radius: 10px;
    background: #f2f2f2;
    height: 7px;
    display: block;
    margin: 5px 0 0;
}

span.full {}

.application div.progressbar span.filled {
    position: absolute;
    top: -5px;
    z-index: 1;
    background: #4A00E0;
}

/* Profile Page */


.profile-page {
  padding:30px 20px;
}

.profile-page .user-card .user-image {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    background-size: cover;
    background-position: center;
}

.profile-page .user-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.profile-page .user-card h4 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  font-family: 'PT Sans',sans-serif;
}

.profile-page .user-card .user-image {
    margin-right: 20px;
}

.profile-page .user-card h5 {
    opacity: 0.5;
    font-size: 16px;
    margin: 2px 0 0;
}

.profile-page .card {
    padding: 20px 0;
    border-bottom: 1px solid #f6f3f3;
}

.profile-page .card img.icon {
    max-height: 25px;
    vertical-align: middle;
    margin-right: 10px;
}

.profile-page .card {
    line-height: 1;
    position: relative;
    font-size: 15px;
    font-family: 'PT Sans', sans-serif;
}

.profile-page img.go {
    max-height: 15px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 10px;
}

.profile-page .cards {
    margin-top: 20px;
}

.profile-page .card h4 {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 1;
}

.profile-page .card.logout {
    color: red;
    font-weight: 600;
}

.profile-page .card.logout a {
  color:inherit;
}

.profile-page .funds {
    border: 1px solid #f6f3f3;
    border-left: 0;
    border-right: 0;
    margin: 20px 0 0;
    padding: 20px 0;
}

.profile-page .funds a {
    cursor: pointer;
}

.profile-page .funds {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.profile-page .funds > .column {
    width: 50%;
}

.profile-page .funds h4 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
}

.profile-page .funds h5 {
    font-size: 16px;
    margin-top: 5px;
    margin: 3px 0 0;
    opacity: 0.5;
}

/* Funds Adding Page */

.funds-adding-page {
    padding: 20px;
}

.funds-adding-page label {
    display: block;
    font-size: 20px;
    font-family: 'PT Sans',sans-serif;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: left;
    color: #4A00E0;
}

.funds-adding-page .amount label {
    text-align: center;
}

.funds-adding-page > div {
    margin-bottom: 20px;
}
.funds-adding-page .amount input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #e1e1e1;
    padding: 5px 0;
    background: url(https://i.im.ge/2021/08/27/Qofx2r.png);
    background-size: 20px auto;
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 22px;
    font-family: 'PT Sans',sans-serif;
    font-size: 24px;
    line-height: 1;
}

.funds-adding-page .amount input:focus {
    outline: none;
}

.funds-adding-page input[type="radio"] {
    width: 20px;
    height: 20px;
}

.add-funds-btn {
    margin-top: 70px;
}

.funds-adding-page .radio-group {
  font-family: 'PT Sans',sans-serif;
  font-size: 20px;
  position: relative;
  padding-right: 20px;
}

.funds-adding-page .radio-group input {
    position: absolute;
    right: 0;
    top: 1px;
}

.funds-adding-page select {
    border: 1px solid #e1e1e1;
    padding: 10px 10px;
    display: block;
    width: 100%;
    margin: 0px 0 0;
}


.funds-adding-page input {
    width: 100%;
    border: 1px solid #e1e1e1;
    padding: 10px 10px;
    margin: 0px 0 0;
}

</style>