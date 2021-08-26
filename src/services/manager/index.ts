
import axios from 'axios';

const cashGrowBaseUrl = 'https://enigmatic-mesa-66554.herokuapp.com';

const userToken = 'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidGFnIjoiQVJydlQzRzBZRjl1clRiN08zdXo5USIsImFsZyI6IkExMjhHQ01LVyIsIml2IjoiVnItNDdKVFdPZW9MVnp3eiJ9.J84KJiobSaTW789Uxva_2OsqryjbyMSRnnJTCynU1nI.r2QeAfegTPMkWdvrFobIbA.H04PspJi921p-NTGLe7UwRzeKZY1s9rVwqdAZVIpDLvUw8Lo1T9JwrxtRws_MkOOGYKb7UZ21lnPBxpxzq8PmDyKhFGH8vODnTpkyDl1UsxCJ6th5f8htgKmQK6efXCunHWkmtap8apqrxoGCZzo_RVC-tDhs13Fngh3a-XTHCXPsi45RmqX66AV_ujWl8_DfAxwnsl5v3oYkJAl5yaqmrbjtNJjGyIO84Em-KeN5ZYPyDllDDpRdBnTw_68XCxYju_jgRDMPxW0a2opJkurigj3s5v9kDMVhkWiSJY6UzVnxErywPtOX0WGxL1Zh4bGqP00qA1zUnwxWm6KZJb5j33GUnBEeiZq53xaoEHQZqQsc338FRQZjljeu5kfu0pp.6tIJinfmsIdoyUGMImRdCQ';

const headers = {
    headers: {
        'X-Zeta-AuthToken' : `${userToken}`
    }
};
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
}