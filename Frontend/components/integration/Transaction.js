import React from 'react';
import axios from 'axios';


export default async function Transactions(sender,receiver,ether) {
  let res = await axios({
    url: 'http://192.168.82.2:3000/transaction',
    method: 'post',
    timeout: 8000,
    data: {
        sender: sender,
        receiver: receiver,
        ether: ether
     }
   
})
if(res.status == 200){
    console.log(res.status)
}    
return res.data

}