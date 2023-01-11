import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare
} from "@iconscout/react-unicons";

import cardVisa from "../images/cardVisa.png";
import cardMaster from "../images/cardMaster.png";

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilChart,
        heading: "Analyses"
    },
    {
        icon: UilSignOutAlt,
        heading: "Produits"
    },
];

export const CardsData = [
    {
        title: "Transactions",
        color: {
            backGround: "#13203b",
            boxShadow: "1px 1px 5px #0e172a"
        },
        barValue: 75,
        value: "25,769",
        png: UilUsdSquare,
        series: [
            {
                name: "Transactions",
                data: [31, 40, 23, 11, 187, 156]
            }
        ]
    },
    {
        title: "Cards",
        color: {
            backGround: "#13203b",
            boxShadow: "1px 1px 5px #0e172a"
        },
        barValue: 75,
        value: "25,769",
        png: UilUsdSquare,
        series: [
            {
                name: "Cards",
                data: [31, 40, 23, 11, 187, 156]
            }
        ]
    },
    {
        title: "Solde",
        color: {
            backGround: "#13203b",
            boxShadow: "1px 1px 5px #0e172a"
        },
        barValue: 75,
        value: "25,769",
        png: UilUsdSquare,
        series: [
            {
                name: "Solde",
                data: [31, 40, 23, 11, 187, 156]
            }
        ]
    }
]

export const UpdatesData = [
    {
        img: cardVisa,
        wallet: "Visa",
        notif: "Je suis innoverce je... transfère mes data part",
        data: "Last 24 heures"
    },
    {
        img: cardMaster,
        wallet: "Master Card",
        notif: "Je suis innoverce je... transfère mes data part",
        data: "Last 24 heures"
    },
    {
        img: cardMaster,
        wallet: "Innoverce",
        notif: "Je suis innoverce je... transfère mes data part",
        data: "Last 24 heures"
    }
]