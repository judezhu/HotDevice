import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  handleCreate = () => {
    console.log('Create happened');
  }

  handleSign = () => {
    console.log('Sign happened');
  }

  handleBroadcast = () => {
    console.log('Broadcast happened');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Enterprise Cold Wallet</Text>
        <Button   
          onPress={() =>
            navigate('WalletConfig')
          }
          title="Create Wallet"
          color="#841584"
          accessibilityLabel="Learn more about this purple button">Create Wallet</Button>
        <Button   
          onPress={() =>
            navigate('Transaction')
          }
          title="Sign Transaction"
          color="#841584"
          accessibilityLabel="Learn more about this purple button">Sign Message</Button>
        <Button   
          onPress={this.handleBroadcast}
          title="Broadcast"
          color="#841584"
          accessibilityLabel="Learn more about this purple button">Sign Message</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  }
});
