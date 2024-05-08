import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [status, setStatus] = React.useState(' status is loading...');
  const url =
    'https://drope-staging-files.s3.ap-south-1.amazonaws.com/profile_pics/adcb0931-cf29-425c-9196-7e0e242e822f.jpg';
  const headers = {
    'If-Modified-Since': 'Tue, 23 Apr 2024 03:59:12 GMT',
    'If-None-Match': '2c845032f84e1139a41c639609406664›',
  };
  fetch(url, {
    method: 'GET',
    headers: headers,
  })
    .then(response => {
      console.log('Status is', response.status);
      setStatus(response.status.toString());
    })
    .then(data => {
      // Process fetched data here
      console.log(data);
    })
    .catch(error => {
      // Handle fetch error
      console.error('Fetch error:', error);
    });
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Text>{status}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
