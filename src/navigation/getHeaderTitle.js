import Routes from './Routes';

export default function GetHeaderTitle(route) {
    const routeName = route.name;
    
    switch (routeName) {

        case Routes.Home:
            return 'Home';

        case Routes.DebitCardStack:
            return 'Debit Card';

        case Routes.Payments:
            return 'Payments';

        case Routes.Credit:
            return 'Credit';

        case Routes.Profile:
            return 'Profile';

        default:
            return '';
    }
}