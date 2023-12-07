import React, {useState} from 'react';
import {Tab, TabBar, TabView, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import LogInInputs from './LogInInputs';
import CreateAccount from './CreateAccount';

interface Props{
  setShowBtn:any
}
const NavBarEmail = ({setShowBtn}:Props): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      style={{width:"90%"}}
      tabBarStyle={{backgroundColor:"#00000000"}}
      indicatorStyle={{backgroundColor:"#FFFF", height:1}}
      >
      <Tab onPressIn={() => setShowBtn(false)} title={() => <Text style={styles.text}>Ingresar correo</Text>}>
        <Layout style={styles.tabContainer}>
          <LogInInputs></LogInInputs>
        </Layout>
      </Tab>
      <Tab onPressIn={() => setShowBtn(true)}  title={() => <Text style={styles.text}>Crea tu cuenta</Text>}>
        <Layout style={styles.tabContainer}>
          <CreateAccount></CreateAccount>
        </Layout>
      </Tab>
    </TabView>
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00000000"
  },
  text:{
    color:"#FFFF",
    fontWeight:"300",
    fontFamily: 'Roboto-Light',
  }
});

export default NavBarEmail;
