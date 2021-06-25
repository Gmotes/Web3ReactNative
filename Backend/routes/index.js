var express = require('express');
var router = express.Router();
let Web3 = require('web3')
let web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:7545'))

// Variables definition
const privKey =
 '0x9d06eb164155b0e7d00757758dfced8c746f0a8f3940701c3e2bea4b69f9e216'; // Genesis private key

/* GET home page. */
router.get('/accounts', function(req, res, next) {
  web3.eth.getAccounts().then((accounts)=> {
  
    res.json({ accounts: accounts });

  }
  );
});

router.post('/transaction', function(req, res, next) {
  console.log(req.body.ether);
  web3.eth.sendTransaction({
    from:req.body.sender,
    to: req.body.receiver, 
    value: web3.utils.toWei(req.body.ether, "ether"), 
}, function(err, transactionHash) {
    if (err) { 
        console.log(err); 
    } else {
        console.log(transactionHash);
    }
});

});

module.exports = router;
