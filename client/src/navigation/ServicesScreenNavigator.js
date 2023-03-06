import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

import ServicesScreen from "../screens/AppScreen/ServicesScreen";
import AmbulanceTypeInfoScreen from "../screens/AppScreen/ServicesScreen/AmbulanceTypeInfoScreen";

const Stack = createStackNavigator()

export default ScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={routes.SERVICESAPPSCREEN} component={ServicesScreen} options={{ headerShown: false }} />
            <Stack.Screen name={routes.AMBULANCETYPEINFO} component={AmbulanceTypeInfoScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        </Stack.Navigator>
    )
}

