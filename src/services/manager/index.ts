
import axios from 'axios';

import { Storage } from '@capacitor/storage';
//const cashGrowBaseUrl = 'https://enigmatic-mesa-66554.herokuapp.com';
const cashGrowBaseUrl = 'http://localhost:4000';
export class CashGrowService {

    createAccountHolder(data: any) {
        const url = `${cashGrowBaseUrl}/createAccountHolder`;
        return axios.post(url, data);
    }

    getAccountDetails(id: string)
    {
        const url = `${cashGrowBaseUrl}/accounts/${id}`;
        return axios.get(url);
    }

    getAccountBalance(id: string){
        const url = `${cashGrowBaseUrl}/accounts/${id}/balance`;
        return axios.get(url);
    }

    transfer(data) {
        const url = `${cashGrowBaseUrl}/transfers`;
        return axios.post(url,data);
    }

    loginUser(data) {
        const url = `${cashGrowBaseUrl}/login`;
        return axios.post(url,data);
    }

    async createLoanApplication(data) {
        const url = `${cashGrowBaseUrl}/loanapplications`;
        const storageUser: any= await Storage.get({ key: 'user' });
        const user: { firstName: string; lastName: string} = JSON.parse(storageUser.value);
        const applicantId = user['_id'];
        data.user = user;
        data.applicantId = applicantId;
        return axios.post(url, data,)
    }

    async getUserLoanApplications() {
        const storageUser: any= await Storage.get({ key: 'user' });
        const user: { _id: string } = JSON.parse(storageUser.value);
        const url = `${cashGrowBaseUrl}/${user._id}/loanapplications`;
        return axios.get(url);
    }


}