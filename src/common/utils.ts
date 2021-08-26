import { toastController } from '@ionic/vue';


export const callToast = async(message: string) => {
    const toast = await toastController
    .create({
        message: message,
        duration: 2000
    })
    return toast.present();
};

export const formatCurrency = (amount: any) => {
    amount=amount.toString();
    let lastThree = amount.substring(amount.length-3);
    const otherNumbers = amount.substring(0,amount.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
};

export const loanTypeImages = {
    'personal' : 'https://i.im.ge/2021/08/26/QMH4Rc.png',
    'educational': 'https://i.im.ge/2021/08/26/QMpM3x.png',
    'home': 'https://i.im.ge/2021/08/26/QMpQ4a.png',
    'business': 'https://i.im.ge/2021/08/26/QMpoqJ.png',
    'other': 'https://i.im.ge/2021/08/26/QMplzS.png',
    'default': 'https://i.im.ge/2021/08/26/QMplzS.png'
}

export const statusColor = {
    'CREATED' : '',
    'ACTIVE': '',
    'DISBURSED': '',
    'REJECTED': 'red'
}