import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "@rneui/themed"
import { StatusBar } from "expo-status-bar"
import Account from "../screens/Profile/Account"
import Agenda from "../screens/Agenda/Agenda"
import Club from "../screens/Club/Club"
import { theme } from "../utils/theme"

const Tab = createBottomTabNavigator()

const AppStack = () => {
   return (
      <>
         <StatusBar style="dark" />
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarIcon: ({ focused }) => {
                  let iconName: string = ""

                  switch (route.name) {
                     case "Agenda":
                        iconName = "calendar-today"
                        break
                     case "Club":
                        iconName = "groups"
                        break
                     case "Account":
                        iconName = "account-circle"
                        break
                  }

                  return (
                     <Icon
                        name={iconName}
                        color={focused ? theme.colors.primary : theme.colors.darksecondary}
                        size={32}
                     />
                  )
               },
               tabBarLabel: route.name,
               tabBarLabelStyle: { fontSize: 12, color: theme.colors.black },
            })}
         >
            <Tab.Screen name="Agenda" component={Agenda} />
            <Tab.Screen name="Club" component={Club} />
            <Tab.Screen name="Account" component={Account} />
         </Tab.Navigator>
      </>
   )
}

export default AppStack
