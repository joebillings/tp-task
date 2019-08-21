/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar, View, AppRegistry, Text} from 'react-native';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Ellipse,
} from 'react-native-svg';

export default class Load extends Component {
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
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Svg
              width="217px"
              height="224px"
              viewBox="0 0 217 224"
              version="1.1">
              <Defs>
                <LinearGradient
                  x1="18.7451482%"
                  y1="90.7329063%"
                  x2="89.8981821%"
                  y2="79.2680093%"
                  id="linearGradient-1">
                  <Stop stopColor="#FF6D42" offset="0%" />
                  <Stop stopColor="#CD0086" offset="40.3489718%" />
                  <Stop stopColor="#2648B2" offset="100%" />
                </LinearGradient>
              </Defs>
              <G
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd">
                <G
                  id="0"
                  transform="translate(-79.000000, -294.000000)"
                  fill="url(#linearGradient-1)">
                  <Path
                    d="M177.874974,517.505562 C144.729325,517.806761 111.69818,502.545312 92.4009138,470.943551 C73.1495195,439.41691 75.8787799,402.183367 92.7048696,372.80987 C109.564884,343.37715 140.578629,294 177.814496,294 C214.775644,294 246.027624,343.570221 263.264006,372.929216 C280.721672,402.665128 308.001913,452.288993 288.073547,483.009486 C268.298676,513.49336 210.92971,517.20519 177.874974,517.505562 L177.874974,517.505562 Z M177.644166,511.549669 C208.653263,511.266723 239.769188,496.48825 258.320263,467.935086 C277.015334,439.16029 274.12605,403.98111 257.748776,376.128536 C241.579093,348.629007 212.261186,328.271523 177.587431,328.271523 C142.655958,328.271523 113.561544,348.448164 97.7449353,376.016748 C81.9601521,403.529861 118.724952,415.564842 136.784946,445.094729 C154.887974,474.694978 146.549783,511.830193 177.644166,511.549669 L177.644166,511.549669 Z"
                    id="Combined-Shape"
                  />
                </G>
              </G>
            </Svg>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('TrustPower_Login', () => Load);
