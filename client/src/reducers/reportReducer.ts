const initialState = {
    statistics: [
        {
            icon: 'DolalrIcon',
            label: '+32.40%',
            incresed: true,
            value: '$10,243.00',
            type: 'Total Revenue',
            color: '#FFB572'
        },
        {
            icon: 'DishIcon',
            label: '-12.40%',
            incresed: false,
            value: '23,456',
            type: 'Total Dish Ordered',
            color: '#65B0F6'
        },
        {
            icon: 'CustomerIcon',
            label: '+2.40%',
            incresed: true,
            value: '1,234',
            type: 'Total Customer',
            color: '#65B0F6'
        }
    ],
    orderReports: {
        rows: [
            {
                name: 'Eren Jaeger',
                menu: 'Spicy seasoned seafood noodles',
                amount: '$125',
                status: 'COMPLETED',
                color: '#FFB572'
            },
            {
                name: 'Reiner Braunn',
                menu: 'Salted pasta with mushroom sauce',
                amount: '$145',
                status: 'PREPARING',
                color: '#FF7CA3'
            },
            {
                name: 'Levi Ackerman',
                menu: 'Beef dumpling in hot and sour soup',
                amount: '$105',
                status: 'PENDING',
                color: '#65B0F6'
            },
            {
                name: 'Historia Reiss',
                menu: 'Hot spicy fried rice',
                amount: '$45',
                status: 'COMPLETED',
                color: '#FFB572'
            },
            {
                name: 'Hanji Zoe',
                menu: 'Hot spicy fried rice with omlet',
                amount: '$245',
                status: 'COMPLETED',
                color: '#FF7CA3'
            },
            {
                name: 'Levi Ackerman',
                menu: 'Beef dumpling in hot and sour soup',
                amount: '$105',
                status: 'PENDING',
                color: '#65B0F6'
            },
            {
                name: 'Eren Jaeger',
                menu: 'Spicy seasoned seafood noodles',
                amount: '$125',
                status: 'COMPLETED',
                color: '#FF7CA3'
            },
            {
                name: 'Reiner Braunn',
                menu: 'Salted pasta with mushroom sauce',
                amount: '$145',
                status: 'PREPARING',
                color: '#65B0F6'
            },
            {
                name: 'Levi Ackerman',
                menu: 'Beef dumpling in hot and sour soup',
                amount: '$105',
                status: 'PENDING',
                color: '#FF7CA3'
            }
        ],
        columns: ['Customer', 'Menu', 'Total Payment', 'Status']
    },
    mostOrdered: [
        {
            name: 'Spicy seasoned seafood noodles',
            count: 200
        },
        {
            name: 'Salted pasta with mushroom sauce',
            count: 120
        },
        {
            name: 'Beef dumpling in hot and sour soup',
            count: 80
        }
    ]
}

const reportReducer = (state=initialState, payload: any) => {
    switch (payload.type) {
        default:
            return state
    }
}

export default reportReducer