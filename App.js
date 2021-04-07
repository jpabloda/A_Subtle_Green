import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//import { ScaledSheet } from 'react-native-size-matters';

export default function App() {

return (
<View style={styles.container}>
<View style={styles.header}>
{/***** header *****/}
<View style={styles.headTextContainer}>
<Text style={styles.headText}>A Subtle Green</Text>
<Text style={styles.subHead}>A design by Bryant Smith</Text>
</View> 
</View>

<View style={styles.nav}>
{/***** nav ******/}
<LinearGradient 
colors={['#daeff1', '#93c2cc']} 
style={styles.navBG}>

<ScrollView 
horizontal={true} 
showsHorizontalScrollIndicator={false} >
<Text style={styles.navButton}>Home</Text>
<Text style={styles.navButton}>About</Text>
<Text style={styles.navButton}>Portfolio</Text>
<Text style={styles.navButton}>Service</Text>
<Text style={styles.navButton}>Contact</Text>
</ScrollView>

</LinearGradient>
</View>

<View style={styles.body}>
{/***** body ******/}
<ScrollView>
<Text style={styles.bodyHead}>The Article Title</Text>

<Text style={styles.content}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy `smile`</Text> 
<Text style={styles.content}> 
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>

<View style={styles.links}>
<Text style={styles.linkButton}>Links:</Text>
<Text style={styles.linkButton}>Web Design</Text> 
<Text style={styles.linkButton}>Templates</Text>
<Text style={styles.linkButton}>Marketing</Text>
<Text style={styles.linkButton}>SEO</Text>
<Text style={styles.linkButton}>Programming</Text>
<Text style={styles.linkButton}>Consulting</Text>
</View>

<Text style={styles.content}>
Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
</Text>
</ScrollView>
</View>

</View>


);
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    },
    
    header:{
    backgroundColor: '#93c2cc',
    width: '100%', 
    padding :20, 
    },
    headTextContainer:{
    marginTop: 30,
    },
    headText:{
    color: '#252F33',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    fontSize: 40,
    
    marginLeft: 25, 
    },
    
    subHead:{
    color: '#daeff1',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    fontSize: 19,
    marginLeft: 80, 
    },
    
    navBG: {
    flex: 1,
    flexDirection: "row",
    position: 'absolute',
    left: '0@s',
    right: '0@s',
    top: '0@s',
    height: "100%"
    },
    
    nav:{
    flex: 0.09,
    flexDirection: "row",
    backgroundColor: '#cef',
    justifyContent: "center",
    width: '100%',
    
    shadowColor: '#161a1c',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {width:2, height:1},
    justifyContent: 'center'
    },
    
    navButton:{
    marginHorizontal: 30,
    paddingTop: 12,
    fontFamily:'Helvetica',
    color: '#252F33',
    alignItems: "center",
    paddingLeft: '10@s',
    paddingRight: '10@s',
    paddingBottom: '25@s',
    fontSize: 20,
    fontWeight: "600",
    justifyContent: 'center',
    },
    
    body: {
    flex: 1,
    width: '100%',
    backgroundColor: '#869c81', 
    padding: 20, 
    
    },
    
    bodyHead:{
    fontFamily:'Verdana',
    color: '#2C4969',
    fontWeight: 'bold',
    fontSize: 30,
    },

    links: {
      flexDirection: 'column',

    },

    linkButton: {
        marginVertical: 10,
        paddingRight: '30%',
       flexWrap: 'wrap-reverse',
       fontWeight: '600',

    },

  
    
    content:{
    fontFamily: 'Arial',
    lineHeight: 27,
    marginBottom: 20,
    }
    
    
    });