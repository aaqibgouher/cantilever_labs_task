import theme from "../theme"


const initialState = {
    sidebar: [
        {
            icon: "StoreIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/',
            size: 56,
            height: '56px'
        },
        {
            icon: "HomeIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/',
            size: 30,
            height: '102px'
        },
        {
            icon: "ShareIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/order-tracking',
            size: 30,
            height: '102px'
        },
        {
            icon: "ChartIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/report',
            size: 30,
            height: '102px'
        },
        {
            icon: "MessageIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/',
            size: 30,
            height: '102px'
        },
        {
            icon: "NotificationIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/',
            size: 30,
            height: '102px'
        },
        {
            icon: "SettingIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/',
            size: 30,
            height: '102px'
        },
        {
            icon: "LogoutIcon",
            color: theme.palette.secondary.main,
            margin: "0.5rem",
            target: '/',
            size: 30,
            height: '102px'
        }
    ]
}

const helperReducer = (state=initialState, payload: any) => {
    switch (payload.type) {
        default:
            return state
    }
}

export default helperReducer