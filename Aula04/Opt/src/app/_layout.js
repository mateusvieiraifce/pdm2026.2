import { Stack } from "expo-router"

export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title:"Tela Inicial",
                headerBackVisible:false,
                headerVisible:false,
                headerShown: false,
            }}>
                
            </Stack.Screen>

              <Stack.Screen name="Logado" options={{
                headerShown: false,
                headerVisible:false,
                title:"",
                headerStyle:{backgroundColor:"#5427F5"},
                headerTintColor:"#fff",
                headerTitleStyle:{fontWeight:"bold"},
                headerBackVisible:false,
                
            }}> </Stack.Screen>
          </Stack>
    )}