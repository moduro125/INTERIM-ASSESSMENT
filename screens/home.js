import React, {useState}  from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { State, TextInput } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable"

export default function Home({navigation}) {
  
    const [defaultRating, setdefaultRating] = useState(2)
    const [maxRating, setmaxRating] =useState([1,2,3,4,5])
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner= 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
   
    const CustomRatingBar =() => {
        return(
            
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return(
                                <TouchableOpacity 
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRating(item)}
                                >
                                    <Image
                                    style={styles.starImgStyle}
                                    source={item <= defaultRating
                                    ?{uri: starImgFilled}
                                : {uri: starImgCorner}}
                                    >
    
                                    </Image>
    
                                </TouchableOpacity>
                                
                        )
                    })
                }
                <View>
                 
                </View>
            </View>
        );
    }

    return (

          
           
        <View style={{flex: 1, backgroundColor: "white",}}>
         
         <View style={{height:80, backgroundColor:"#c45653", justifyContent:"center", paddingHorizontal:5,}}>

        <Animatable.View animation="slideInRight" duration={500} style={{height: 50, backgroundColor:"white", flexDirection:"row", padding: 5, alignItems:"center"}}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder="Search"
        style={{fontSize:24, marginLeft:15}}
        >

        </TextInput>
        </Animatable.View>

         
         </View>

                   


            
         <ScrollView style={styles.contentContainer}>
                    
                
                            <View style={styles.box}>
                            <Text style={styles.heads}>Fashion</Text>
                                <View style={styles.inner}>
                                       
                                    
                                      
                                       
                                       <Image 
                                       
                                        style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/clothing/onim3r6lerl.jpg")}>

                                    </Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Tops for Ladies
                                    </Text>
                                    <Text style={styles.text}>Different colours in stock</Text>
                                    <Text style={styles.text}>Different sizes available</Text>
                                    
                                    {/* <CustomRatingBar/> */}
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'blue',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                   
                                </View>
                                
                            </View>

Sammy, [11/17/2021 10:02 PM]
<View style={styles.box}>
                            
                                <View style={styles.inner}>
                                    
                                    
                                      
                                       
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/clothing/louis_red.jpg")}>

                                    </Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("bags")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>

Sammy, [11/17/2021 10:02 PM]
<View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

                                    </Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                   
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/couch/cream_couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                   
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/couch/dark_yellow_couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>

                            <Text style={styles.heads}>Furniture</Text>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    {/* <CustomRatingBar/> */}
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                   
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                   
                                </View>
                                
                            </View>

                                            <Text style={styles.heads}>Electronics</Text>

                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                   
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                   
                                        
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                    
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                  
                                </View>
                                
                            </View>

                                            <Text style={styles.heads}>Kitchen Wares</Text>

                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image  style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                   
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                   
                                </View>
                                
                            </View>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    
                                       <Image 
                                       
                                        style={{
                                            borderTopLeftRadius:30, 
                                            borderBottomLeftRadius:30, 
                                            borderBottomRightRadius:30,
                                           marginTop:18,
                                           borderTopRightRadius:30,
                                    height:"70%",
                                    width:140,
                                    backgroundColor: "#D7CFCD"
                                }} source={require("../assets/furniture/couch.jpg")}>

Sammy, [11/17/2021 10:02 PM]
</Image>
                                    
                                    <View style={styles.textview}>
                                    <Text style={styles.text}>
                                      Clothing for purchase: 
                                    </Text>
                                    <Text style={styles.text}>purchase from the best:</Text>
                                    
                                    
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("cloths")
                                    }}
                                    style={{backgroundColor:'#ebaf0c',
                                        padding:10,
                                    paddingHorizontal:30,
                                    flexDirection:'row',
                                    marginTop:40,
                                    marginRight:10,
                                    width:150,
                                    height:40,
                                    borderTopRightRadius:30, 
                                    borderTopLeftRadius:30, 
                                    borderBottomLeftRadius:30, 
                                    borderBottomRightRadius:30,
                                    alignContent:'center'
                                                }}
                                    >
                                                <Text style={{fontSize:16, marginLeft:20}}>Buy</Text>
                                    </TouchableOpacity>
                                    </View>

                                   

                                    

                                   
                                </View>
                                
                            </View>
                            
                           
                           

                          
                           
                            
                   
                </ScrollView>
           
           
            

          <View style={{flex:0.1, backgroundColor:"yellow", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
        
        <TouchableOpacity  onPress={() => {navigation.navigate("Prod")}}>
        <Ionicons name="settings" size={24} color="black" style={{marginLeft:12}} /> 
        </TouchableOpacity>
          
                 <TouchableOpacity onPress={() => {navigation.navigate("Cart")}}>
          <Feather name="shopping-cart" size={24} color="black" style={{marginRight:12}} />
          </TouchableOpacity>               
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {

      width : '100%',
      height : '85%',
      padding : 5,
     
      flex: 7,
    
      paddingBottom:30
  },

 
 
  inner: {
    flex:1,
    backgroundColor: '#edf2ef',    
    borderTopRightRadius:30, 
    borderTopLeftRadius:30, 
    borderBottomLeftRadius:30, 
    borderBottomRightRadius:30,
    flexDirection: 'row',
    borderColor:'red'

   
},
  
box: {
    width: '103%',
    height: '39%',
    padding: 10,
   borderColor: 'red'
   
    
},


  contentContainer:{
      width : '100%',
      height : '85%',
      padding : 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 7,
      flexDirection:'row',
      flexWrap:'wrap',
      alignContent:'center'
  },

  heads:{
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic',
    marginLeft:40,
    textDecorationLine:'underline'
  },
  customRatingBarStyle:{
    justifyContent:'center',
    flexDirection:'row',
   

},

starImgStyle:{
    width:40,
    height:40,
    resizeMode:'cover',

    
},

text:{
    fontSize:20,
    fontWeight:'900',
    fontStyle:'normal',
    margin:2
},
textview:{
    flexDirection:'column'
    
}
 
})


import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Prod from "./screens/Prod";
import bike from "./products/bike";
import cloths from "./products/cloths";
import bags from "./products/bags";
import Itemcard from "./screens/Itemcard";
import {CartProvider} from "react-use-cart"







export default function App() {
  const MainNavigator = createStackNavigator();

  return (
   <View style={{flex: 1}}>
     <NavigationContainer>
       <MainNavigator.Navigator screenListeners={{headerShown: false}} initialRouteName="Login">
         <MainNavigator.Screen name="Home" component={Home}></MainNavigator.Screen>
         <MainNavigator.Screen name="Login" component={Login}></MainNavigator.Screen>
         <MainNavigator.Screen name="Cart" component={Cart}></MainNavigator.Screen>
         <MainNavigator.Screen name="Prod" component={Prod}></MainNavigator.Screen>
         <MainNavigator.Screen name="bike" component={bike}></MainNavigator.Screen>
         <MainNavigator.Screen name="cloths" component={cloths}></MainNavigator.Screen>
         <MainNavigator.Screen name="bags" component={bags}></MainNavigator.Screen>
         <MainNavigator.Screen name="Itemcard" component={Itemcard}></MainNavigator.Screen>
         <MainNavigator.Screen name="CartProvider" component={CartProvider}></MainNavigator.Screen>
        
        
         
        
        
        
        
         
       </MainNavigator.Navigator>
     </NavigationContainer>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});