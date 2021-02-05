import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Platform} from 'react-native'
import Home from "../screens/Home/Home";
import HouseCladding from "../screens/Things/HouseCladding";
import PreciousStone from "../screens/Things/PreciousStone";
import ThingsTheory from "../screens/Things/ThingsTheory";
import {THEME} from '../theme'


const PostNavigator = createStackNavigator(
    {
        Home: Home,
        ThingsTheory: ThingsTheory,
        HouseCladding: HouseCladding,
        PreciousStone: PreciousStone,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
        }
    }
)

export const AppNavigation = createAppContainer(PostNavigator)