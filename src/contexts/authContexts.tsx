import React, { createContext, ReactComponentElement, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage'

type User = {
    nome: string,
    ativo?: boolean,
    matricula?: string,
    dataNascimento?: string,
    rg?: string,
    cpf?: string,
    telefone?: string,
    email: string
}
type AuthContextProps = {
    user: User | null,
    logIn: (name: string) => void
    logOut: () => void
    signUp: ({}:User) => void
    isLoading: boolean
    isSigned: boolean
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
    
export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function loadData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')

            console.log(storagedUser)
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (storagedUser){
                setUser(JSON.parse(storagedUser))
                setIsLoading(false)
            }

            if (user == null) {
                setIsLoading(false)
            }
        }

        loadData()
    },[])
    const passAlert = () => {
        Alert.alert('Usuário ou senha incorreta','tente novamente', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {text: 'OK', onPress: () => console.log('Ok Pressed')},
        ]);
    }

    async function logIn(name: string){
        try {
            const {data} = await api.get('/servidores')
    
            const userLogged = data.find( (user: User) => user.nome == name)
            console.log(name)
            setUser(userLogged)
            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(userLogged))
        } catch (e){
            passAlert()
        }

    }

    async function logOut(){
        await AsyncStorage.clear()
        setUser(null)
    }

    async function signUp({nome, email, matricula}:User){
        try {
            await api.post('/servidores', {nome, email, matricula: '123456', ativo: true, orgao: 1}).then(res => console.log(res))
            
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <AuthContext.Provider value={{isSigned: !!user,user, logIn, logOut, signUp, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    return context
}