
import axios from 'axios';

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


}