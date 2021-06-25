
import React from 'react';
import axios from 'axios';


export default async function Accounts() {
  let res = await axios({
    url: 'http://192.168.82.2:3000/accounts',
    method: 'get',
    timeout: 8000
   
})
if(res.status == 200){
    console.log(res.status)
}    
return res.data

}