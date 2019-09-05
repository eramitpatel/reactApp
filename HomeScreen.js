import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import Sidebar from 'react-native-sidebar';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  
} from 'react-native';

import { MonoText } from '../components/StyledText';

/*export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.getStartedText}>This is a image of Amit Patel.</Text>*/

        {/* <Sidebar
                leftSidebar={ this.renderLeftSidebar() }
                rightSidebar={ this.renderRightSidebar() }
                style={{ flex: 1, backgroundColor: 'black' }}>
            { this.renderContent() }
        </Sidebar>  */}

      {/* <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/ap_img.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
         

          <Text style={styles.getStartedText}>This is a image of Amit Patel.</Text>
          <Text style={styles.getStartedText}>Works as software developer in CIS since May 2016</Text>

         
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              For more info navigate through bottom menu.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView> */}

      {/* <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View> */}
  /*  </View>
  );
}
*/

import Carousel from 'react-native-snap-carousel';
 
export default class HomeScreen extends Component {

constructor(props){
    super();
    const screenWidth = Math.round(Dimensions.get('window').width);

    this.state = {
      errors: [],
      windowWidth : screenWidth,
    }
    this.props = props;
    this._carousel = {};
    this.init();
  }



init(){
  this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          thumbnail: require("../images/placeholderimage.png"),
          title: "Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.",
          SectionTitle: "Fashion",
          SecionText : "Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.",
        }, 
          {
          id: "sNPnbI1arSE",
          thumbnail: require("../images/placeholderimage.png"),
          title: "Eminem - My Name Is",
          SectionTitle: "Culturel",
          SecionText : "Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.",
        }, {
          id: "VOgFZfRVaww",
          thumbnail: require("../images/placeholderimage.png"),
          title: "yo yo honey singh",
          SecionText : "Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.Loreum ipsum dolor sit amet.",
        }
      ]
    };

}
 
   
  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (        
            <View>              
              <Image source={item.thumbnail}  style={{width: 1500, height: 250, maxWidth:'100%'}} />
            </View>
        
    );
  }


 _renderSecondItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (        
            <View>              
              <Image source={item.thumbnail}  style={{width: 1500, height: 250, maxWidth:'100%'}} />
              <Text style={{marginTop:5,marginBottom:5, textAlign:'center', fontWeight:'bold', fontSize:20}}>{item.SectionTitle}</Text>
              <Text style={{marginTop:5,marginBottom:5, textAlign:'center',}}>{item.SecionText}</Text>
            </View>
        
    );
  }
  // const imageObject = (

  //   <View>              
  //     <Image source={require('../images/placeholderimage.png')}  style={{width: 1500, height: 250, maxWidth:'100%'}} />
  //   </View>
  //   <View>              
  //     <Image source={require('../images/placeholderimage.png')}  style={{width: 1500, height: 250, maxWidth:'100%'}} />
  //   </View>
  //   <View>              
  //     <Image source={require('../images/placeholderimage.png')}  style={{width: 1500, height: 250, maxWidth:'100%'}} />
  //   </View>

  // );


    render () {

      const screenWidth = Math.round(Dimensions.get('window').width);
        return (
          <View>
            <ScrollView>
                    <Carousel
                      ref={(c) => { this._carousel = c; }}
                      data={this.state.videos}
                      renderItem={this._renderItem.bind(this)}
                      sliderWidth={screenWidth}
                      itemWidth={screenWidth}
                      autoplay={true}
                      autoplayDelay={1000}
                      autoplayInterval={3000}
                      loop={true}

                    />

                  <Text style={{textAlign:'center', fontWeight:'bold', fontSize:30, marginTop:10,marginBottom:10}}> Section title here </Text>

                  <View style={{width:screenWidth,padding:10}}>
                    <Carousel
                      ref={(c) => { this._carousel = c; }}
                      data={this.state.videos}
                      renderItem={this._renderSecondItem.bind(this)}
                      sliderWidth={screenWidth-20}
                      itemWidth={screenWidth-20}
                      // autoplay={true}
                      // autoplayDelay={1000}
                      // autoplayInterval={3000}
                      // loop={true}                      

                    />
                  </View>





            </ScrollView>
          </View>
        );
    }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: "100%",
    height: 150,
    resizeMode: 'cover',
    marginTop: 3,
    //marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
