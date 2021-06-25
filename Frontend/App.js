import React, { useState,useEffect } from "react";
import { Picker, SafeAreaView, StatusBar, StyleSheet, Text, TextInput,Button} from "react-native";
import { set } from "react-native-reanimated";

import Accounts from './components/integration/Accounts';
import Transaction from './components/integration/Transaction';

export default function App() {

  const [senderAccountTitle, setSenderAccountTitle] = useState('');  
  const [receiverAccountTitle, setReceiverAccountTitle] = useState(''); 
  const [accounts,setAccounts] = useState([]);
  const [etherValue, setEtherValue] = React.useState(null);
  const [selectedSender, setSelectedSender] = useState("");
  const [selectedReceiver, setSelectedReceiver] = useState("");

  useEffect(() => {
    async function fetchData() {
    const result = await Accounts();
    let index = 0;
   setSelectedSender(result[0]);
   setSelectedReceiver(result[0]);
    let accountItems =  result.accounts.map((acc) =>{
       index = index+1;
      return(
        <Picker.Item label={acc} value={acc} key={acc}/>
        )     
  
      });
      setAccounts(accountItems);
      
    }
    fetchData();
    setSenderAccountTitle('Sender Account');
    setReceiverAccountTitle('Receiver Account');
  }, []);
  
  

  return (

    <SafeAreaView style={styles.container}>
     <Text style={styles.titleText}>
       {senderAccountTitle}</Text>
       <Picker
        selectedValue={selectedSender}
        style={{ height: 50, width: 400 }}
        onValueChange={(itemValue, itemIndex) => setSelectedSender(itemValue)}
      >
     {accounts}
      </Picker>
      <Text style={styles.titleText}>
       {receiverAccountTitle}</Text>
       <Picker
        selectedValue={selectedReceiver}
        style={{ height: 50, width: 400 }}
        onValueChange={(itemValue, itemIndex) => setSelectedReceiver(itemValue)}
      >
        {accounts}
      </Picker>
      <TextInput
        style={styles.input}
        onChangeText={setEtherValue}
        value={etherValue}
      />
      <Button
        title="Send Ethereum"
        onPress={() => {

          Transaction(selectedSender,selectedReceiver,etherValue);

        }}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 14,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});
