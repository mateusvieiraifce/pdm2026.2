import { Stack } from "expo-router"

export default function Layout(){
    return (
        <Stack>

            <Stack.Screen name="Home" title="Home" options={{
                title:"Home",
                headerStyle:{backgroundColor:"#5427F5"},
                headerTintColor:"#fff",
                headerTitleStyle:{fontWeight:"bold"},
                headerBackVisible:false,
            }}>
            </Stack.Screen>
            <Stack.Screen name="Profile" options={{
                title:"Perfil",
                headerStyle:{backgroundColor:"#5427F5"},
                headerTintColor:"#fff",
                headerTitleStyle:{fontWeight:"bold"},
            }}>
            </Stack.Screen>
            <Stack.Screen name="Produtos" options={{
                title:"Produtos",
                headerStyle:{backgroundColor:"#5427F5"},
                headerTintColor:"#fff",
                headerTitleStyle:{fontWeight:"bold"},
            }}>
            </Stack.Screen>
          </Stack>
    )}