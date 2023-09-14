import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatPost";
import Perfil from "../screens/Profile";
import createMaterialBottomTabNavigator from "@react-navigation/material-bottom";


const Tab=createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator 
            labeled={false}
            barStyle={StyleSheet.bottomTabStyle}
            ScreenOptions={({route})=>({
                tabBarIcon:({focused, color, size})=>{
                    let iconName
                    if(route.name==="feed"){
                        iconName=focused? "book":"book-outline";
                    }else if(route.name==="createPost"){
                        iconName=focused? "create":"create-outline";
                    }else if(route.name==="perfil"){
                        iconName=focused? "profile":"profile-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>

                },
            })} tabBarOptions={{activeTintColor:"white", inactiveTintColor:"gray"}}>
                <Tab.Screen name="createPost" component={CreatePost}/>
                <Tab.Screen name="perfil" component={Perfil}/>
                <Tab.Screen name="feed" component={Feed}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;

const stlyes = StylesSheet.create({
    container:{
        flex:1,
        backgroundColor: "black"
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? statusbar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon:{
        flex: 0.2, 
        justifyContent: "center", 
        alingItems: "center" 
    },
    iconImage:{
        width: "100%", 
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer:{ 
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color:"white",
        fontSize: RFValue(28)
    },
    cardContainer:{
        flex: 0.85
    }
})