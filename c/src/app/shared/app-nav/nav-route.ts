export const NAV_ROUTE: Array<any> = [
    {
        routeLink: '/dashboard',
        routeTitle: 'dashboard',
        routeIcon: 'dashboard',
        divider: '0',
        hidden: false,
        submenu: []
    },
    {
        routeLink: '/conso',
        routeTitle: 'Conso',
        routeIcon: 'show_chart',
        divider: '0',
        hidden: false,
        submenu: [

        ]
    },
    {
        routeLink: '',
        routeTitle: 'lampadaire',
        routeIcon: 'wb_incandescent',
        divider: '0',
        hidden: false,
        submenu: [
            {
                routeLink: '/addlampadaire',
                routeTitle: 'add',
                routeIcon: 'add',
                divider: '0',
                hidden: false,
                submenu: []
            },
            {
                routeLink: '/listlampadaire',
                routeTitle: 'List',
                routeIcon: 'list_alt',
                divider: '0',
                hidden: false,
                submenu: []
            },
            {
                routeLink: '/lampmap',
                routeTitle: 'lamp map',
                routeIcon: 'list_alt',
                divider: '0',
                hidden: false,
                submenu: []
            }

        ]
    },

    {
        routeLink: '',
        routeTitle: 'lampe',
        routeIcon: 'wb_sunny',
        divider: '0',
        hidden: false,
        submenu: [
            {
                routeLink: '/addlampe',
                routeTitle: 'add',
                routeIcon: 'add',
                divider: '0',
                hidden: false,
                submenu: []
            },
            {
            routeLink: '/listlampe',
            routeTitle: 'List',
            routeIcon: 'list_alt',
            divider: '0',
            hidden: false,
            submenu: []
        }

        ]
    },
    {
        routeLink: '',
        routeTitle: 'capteur',
        routeIcon: 'graphic_eq',
        divider: '0',
        hidden: false,
        submenu: [
            {
                routeLink: '/addcapteur',
                routeTitle: 'add',
                routeIcon: 'add',
                divider: '0',
                hidden: false,
                submenu: []
            },
            {
                routeLink: '/listcapteur',
                routeTitle: 'List',
                routeIcon: 'list_alt',
                divider: '0',
                hidden: false,
                submenu: []
            }

        ]
    },
    {
        routeLink: '',
        routeTitle: 'User',
        routeIcon: 'graphic_eq',
        divider: '0',
        hidden: false,
        submenu: [
            {
                routeLink: '/adduser',
                routeTitle: 'add',
                routeIcon: 'add',
                divider: '0',
                hidden: false,
                submenu: []
            },
            {
                routeLink: '/listuser',
                routeTitle: 'List',
                routeIcon: 'list_alt',
                divider: '0',
                hidden: false,
                submenu: []
            }

        ]
    },
    {
        routeLink: '',
        routeTitle: 'Alert Panne',
        routeIcon: 'graphic_eq',
        divider: '0',
        hidden: false,
        submenu: [
            {
                routeLink: '/listpanne',
                routeTitle: 'Consulter',
                routeIcon: 'list_alt',
                divider: '0',
                hidden: false,
                submenu: []
            }

        ]
    }


];
