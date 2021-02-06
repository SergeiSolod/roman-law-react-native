import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Platform} from 'react-native'
import {THEME} from '../theme'
import Home from "../screens/Home/Home";
import HouseCladding from "../screens/Things/HouseCladding";
import PreciousStone from "../screens/Things/PreciousStone";
import ThingsTheory from "../screens/Things/ThingsTheory";
import ContractOfSaleTheory from "../screens/ContractOfSale/ContractOfSaleTheory";
import ShipsInTheStorm from "../screens/ContractOfSale/ShipsInTheStorm";
import CookSlave from "../screens/ContractOfSale/CookSlave";
import AppleOrchard from "../screens/ContractOfSale/AppleOrchard";
import WorkAgreementTheory from "../screens/WorkAgreement/WorkAgreementTheory";
import Sculpture from "../screens/WorkAgreement/Sculpture";
import BurntNecklace from "../screens/WorkAgreement/BurntNecklace";
import BurnedOutShip from "../screens/WorkAgreement/BurnedOutShip";


const PostNavigator = createStackNavigator(
    {
        Home: Home,

        ThingsTheory: ThingsTheory,
        HouseCladding: HouseCladding,
        PreciousStone: PreciousStone,

        ContractOfSaleTheory: ContractOfSaleTheory,
        ShipsInTheStorm: ShipsInTheStorm,
        CookSlave: CookSlave,
        AppleOrchard: AppleOrchard,

        WorkAgreementTheory: WorkAgreementTheory,
        Sculpture: Sculpture,
        BurntNecklace: BurntNecklace,
        BurnedOutShip: BurnedOutShip,
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