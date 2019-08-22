import React, {Component} from 'react';
import {
  StatusBar,
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Ellipse,
} from 'react-native-svg';
import SplashScreen from 'react-native-splash-screen';
import CheckBox from 'react-native-check-box';

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 45,
    marginRight: 100,
    marginTop: 40,
  },
  heading: {
    fontSize: 40,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  subheading: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginLeft: 80,
    marginRight: 80,
    lineHeight: 32,
    color: 'white',
  },
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    marginTop: 14,
    marginLeft: 65,
    marginRight: 65,
    marginBottom: 10,
    color: 'white',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 14,
    height: 54,
    borderRadius: 99,
    paddingLeft: 28,
    paddingRight: 28,
  },
  note: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#999',
  },

  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  cta: {
    backgroundColor: 'rgb(255, 0, 133)',
    borderRadius: 99,
    padding: 10,
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 50,
  },
  ctaText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  privacyHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 32,
    color: '#001f27',
    marginTop: 20,
  },
  privacySubheading: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    color: '#001f27',
  },
  privacy: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    color: '#001f27',
    marginTop: 28,
  },
});

export default class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', isCheck: false, ppVisible: false};
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  setPPVisible(visible) {
    this.setState({ppVisible: visible});
  }

  render() {
    // let pic = {
    //   uri: './resources/background.svg',
    // };
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View
          style={{backgroundColor: '#001f27', width: '100%', height: '100%'}}>
          <Svg
            style={{
              position: 'absolute',
              left: 90,
            }}
            width="100%"
            height="100%"
            viewBox="0 0 232 812">
            <Defs>
              <LinearGradient id="lingrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <Stop stopColor="#2648B2" offset="0" />
                <Stop stopColor="#632EA2" offset="1" />
              </LinearGradient>
            </Defs>
            <G
              id="0"
              transform="translate(-143.000000, 0.000000)"
              fill="url(#lingrad)">
              <Path
                d="M140.00007,-1.99996188 L374.5952,-1.99996188 L374.5952,813.000038 L172.80144,813.000038 C293.821845,731.233083 374.5952,583.79643 374.5952,415.500038 C374.5952,232.417866 279.005605,74.0217305 140,-2 Z"
                id="Combined-Shape"
              />
            </G>
          </Svg>
          <View style={styles.welcomeContainer}>
            <Text style={styles.heading}>Log in</Text>
            <Text style={styles.subheading}>
              Please log in with your email and password.
            </Text>
          </View>
          <View style={styles.leftContainer}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="johnsmith@gmail.com"
              onChange={username => this.setState({username})}
              value={this.state.username}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="•••••••••"
              textContentType="password"
              secureTextEntry
              onChange={password => this.setState({password})}
              value={this.state.password}
            />
            <Text style={styles.note}>Forgot your password?</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <View>
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  this.setState({
                    isChecked: !this.state.isChecked,
                  });
                }}
                isChecked={this.state.isChecked}
                checkBoxColor={'white'}
              />
            </View>
            <View>
              <Text style={styles.checkboxText}>
                You acknowledge that you have read the{' '}
                <Text
                  style={{color: 'rgb(255, 0, 133)'}}
                  onPress={() => {
                    this.setPPVisible(true);
                  }}>
                  Privacy Policy
                </Text>{' '}
                and that you agree to the{' '}
                <Text style={{color: 'rgb(255, 0, 133)'}}>
                  Terms & Conditions
                </Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.ppVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{backgroundColor: '#001f27'}}>
            <View
              style={{
                height: 120,
                marginRight: 30,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <TouchableHighlight
                onPress={() => {
                  this.setPPVisible(!this.state.ppVisible);
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 30,
                  }}>
                  X
                </Text>
              </TouchableHighlight>
            </View>
            <View
              style={{
                marginTop: 30,
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
              }}>
              <Text style={styles.privacyHeading}>Privacy Policy</Text>
              <Text style={styles.privacySubheading}>
                Last updated 15 May 2019
              </Text>
              <Text style={styles.privacy}>
                Loop respects your privacy and is commited to protecting your
                personal data.
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

AppRegistry.registerComponent('TrustPower_Login', () => Load);
