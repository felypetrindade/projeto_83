import * as React from "react";
import {View,
    Text,
    StyleSheet,
    SafeAreaView,
    DropDownPicker,
    Image} from "react-native";

export default class CreatePost extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image sorce={require("../assets/logo.png")} style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Novo Post</Text>
                    </View>    
                </View>
                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <Image 
                            source={preview_images[this.state.previewImage]}
                            style={styles.previewImage}
                        ></Image>
                        <View style={{height:
                        RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker
                                items={[
                                    {label:"Image 1", value:"Image_1"},
                                    {label:"Image 2", value:"Image_2"},
                                    {label:"Image 3", value:"Image_3"},
                                    {label:"Image 4", value:"Image_4"},
                                    {label:"Image 5", value:"Image_5"},
                                    {label:"Image 6", value:"Image_6"},
                                    {label:"Image 7", value:"Image_7"}
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    height:40,
                                    borderRadius:20,
                                    marginBottom:10
                                }}
                                onOpen={()=>{
                                    this.setState({dropdownHeight: 170})
                                }}
                                onClose={()=>{
                                    this.setState({dropdownHeight: 40})
                                }}
                                style={{backgroundColor:"transparent"}}
                                itemStyle={{
                                    justifyContent:"flex-start"
                                }}
                                dropDownStyle={{backgroundColor:"#2a2a2a"}}
                                labelStyle={{
                                    color:"white"
                                }}
                                arrowStyle={{
                                    color:"white"
                                }}
                                onChnageItem={item=>
                                    this.setState({
                                        previewImage:item.value
                                    })}
                            >
                                
                            </DropDownPicker>
                        </View>
                            <TextInput
                                style={styles.inputFont}
                                onChangeText={caption =>this.setState({caption})}
                                placeholder={"legenda"}
                                placeholderTextColor="white"
                            />
                    </ScrollView>
                </View> 
            </View>
        );
    };
};

const styles = StyleSheet.create({
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