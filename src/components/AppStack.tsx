import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "@rneui/themed"
import { StatusBar } from "expo-status-bar"
import { theme } from "../utils/theme"
import Account from "../screens/Profile/Account"
import Agenda from "../screens/Agenda/Agenda"
import Club from "../screens/Club/Club"

const Tab = createBottomTabNavigator()

const AppStack = () => {
   const TabScreenOptions: BottomTabNavigationOptions = {}

   return (
      <>
         <StatusBar style="light" />
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarStyle: { height: 60 },
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
               tabBarLabelStyle: {
                  fontSize: theme.fontSize.xs,
                  color: theme.colors.black,
                  marginBottom: theme.spacing.s,
               },
               headerStyle: { backgroundColor: theme.colors.darksecondary },
               headerTitleAlign: "center",
               headerTitleStyle: { color: theme.colors.white },
            })}
         >
            <Tab.Screen name="Agenda" component={Agenda} options={TabScreenOptions} />
            <Tab.Screen name="Club" component={Club} />
            <Tab.Screen name="Account" component={Account} />
         </Tab.Navigator>
      </>
   )
}

export default AppStack
