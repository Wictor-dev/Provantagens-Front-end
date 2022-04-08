import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../contexts/authContexts";
import AppRoutes from "./app.routes";
import Tabs from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes(){
    const {isSigned, isLoading} = useAuth()
    if (isLoading){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        )
    }

    return isSigned ? <AppRoutes /> : <AuthRoutes />

}