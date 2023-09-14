import * as React from "react";
import TabNavigator from "./TabNavigator";
import Perfil from "../screens/Profile";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.screen name="inicial" component={TabNavigator}/>
            <Drawer.screen name="perfil" component={Perfil}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;