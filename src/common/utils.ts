import { toastController } from '@ionic/vue';


export const callToast = async(message: string) => {
    const toast = await toastController
    .create({
        message: message,
        duration: 2000
    })
    return toast.present();
};