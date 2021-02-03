import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Platform} from 'react-native'
import Home from "../screens/Home/Home";
import Task1 from "../screens/Tasks/Task1";
import {THEME} from '../theme'

const PostNavigator = createStackNavigator(
    {
        Home: Home,
        Task1: Task1,
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