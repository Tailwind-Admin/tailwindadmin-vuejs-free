// project imports

import type {
  notificationType,
  profileType,
  languageType,
  appsLinkType,
  quickLinksType,
  searchType,
  messageType,
} from "../types/HeaderTypes";
//
// Notification
//
import user1 from "../assets/images/profile/user-1.jpg";
import user2 from "../assets/images/profile/user-2.jpg";
import user3 from "../assets/images/profile/user-3.jpg";
import user5 from "../assets/images/profile/user-5.jpg";
import user6 from "../assets/images/profile/user-6.jpg";
import user7 from "../assets/images/profile/user-7.jpg";

const notifications: notificationType[] = [
  {

    title: "Roman Joined the Team!",
    subtitle: "Congratulate him",
  },
  {

    title: "New message received",
    subtitle: "Salma sent you new message",
  },
  {

    title: "New Payment received",
    subtitle: "Check your earnings",
  },
  {

    title: "Jolly completed tasks",
    subtitle: "Assign her new tasks",
  },
  {

    title: "Roman Joined the Team!",
    subtitle: "$230 deducted from account",
  },
];

const messages: messageType[] = [
  {
    avatar: user1,
    title: "Michell Flintoff",
    subtitle: "Just see the my new admin!",
    time: "just now",
  },
  {
    avatar: user2,
    title: "Bianca Anderson",
    subtitle: "Just a reminder that you have event",
    time: "5 mins ago",
  },
  {
    avatar: user3,
    title: "Andrew Johnson",
    subtitle: "You can customize this template as you ...",
    time: "10 mins ago",
  },
  {
    avatar: user5,
    title: "Miyra Strokes",
    subtitle: "Just see the my new admin!",
    time: "5 days ago",
  },
  {
    avatar: user6,
    title: "Jolly Cummins",
    subtitle: "Just a reminder that you have event",
    time: "Years ago",
  },
  {
    avatar: user7,
    title: "Eliga Rush",
    subtitle: "You can customize this template as you ...",
    time: "15 days ago",
  },
];

//
// Profile
//



const profileDD: profileType[] = [
  {
    title: "My Profile",
    subtitle: "Account settings",
    url: "/theme-pages/account-settings",
    img: "tabler:user",
  },
  {
    title: "My Account",
    subtitle: "My Daily Notes",
    url: "/",
    img: "tabler:mail",
  },
  {
    title: "My Tasks",
    subtitle: "To-do and Daily tasks",
    url: "/",
    img: "tabler:list-check",
  },
];

//
// Language
//
import flag1 from "../assets/images/flag/icon-flag-en.svg";
import flag2 from "../assets/images/flag/icon-flag-fr.svg";
import flag3 from "../assets/images/flag/icon-flag-sa.svg";
import flag4 from "../assets/images/flag/icon-flag-cn.svg";
const languageDD: languageType[] = [
  { title: "English", subtext: "UK", value: "en", avatar: flag1 },
  { title: "français", subtext: "French", value: "fr", avatar: flag2 },
  { title: "عربي", subtext: "Arbic", value: "ro", avatar: flag3 },
  { title: "中国人", subtext: "Chinese", value: "zh", avatar: flag4 },
];

//
// AppsLink
//
import img1 from "../assets/images/svgs/icon-dd-chat.svg";
import img2 from "../assets/images/svgs/icon-dd-cart.svg";
import img3 from "../assets/images/svgs/icon-dd-invoice.svg";
import img4 from "../assets/images/svgs/icon-dd-date.svg";
import img5 from "../assets/images/svgs/icon-dd-mobile.svg";
import img6 from "../assets/images/svgs/icon-dd-lifebuoy.svg";
import img7 from "../assets/images/svgs/icon-dd-message-box.svg";
import img8 from "../assets/images/svgs/icon-dd-application.svg";
const appsLink: appsLinkType[] = [
  {
    avatar: img1,
    title: "Chat Application",
    subtext: "New messages arrived",
    href: "/apps/chats",
  },
  {
    avatar: img2,
    title: "eCommerce App",
    subtext: "learn more information",
    href: "/apps/ecommerce/shop",
  },
  {
    avatar: img3,
    title: "User Profile App",
    subtext: "Get profile details",
    href: "/apps/user-profile/profile",
  },
  {
    avatar: img4,
    title: "Calendar App",
    subtext: "Get dates",
    href: "/apps/calendar",
  },
  {
    avatar: img5,
    title: "Contact Application",
    subtext: "2 Unsaved Contacts",
    href: "/apps/contacts",
  },
  {
    avatar: img6,
    title: "Account Setting App",
    subtext: "Account settings",
    href: "/theme-pages/account-settings",
  },
  {
    avatar: img7,
    title: "Email App",
    subtext: "Get new emails",
    href: "/apps/email",
  },
  {
    avatar: img8,
    title: "Notes Application",
    subtext: "To-do and Daily tasks",
    href: "/apps/notes",
  },
];

//
// Quick Links
//
const quickLink: quickLinksType[] = [
  {
    title: "Pricing Page",
    href: "/theme-pages/pricing",
  },
  {
    title: "Authentication Design",
    href: "/auth/auth1/login",
  },
  {
    title: "Register Now",
    href: "/auth/auth1/register",
  },
  {
    title: "404 Error Page",
    href: "/404",
  },
  {
    title: "Notes App",
    href: "/apps/notes",
  },
  {
    title: "User Application",
    href: "/apps/user-profile/profile",
  },
  {
    title: "Blog Design",
    href: "/apps/blog/post",
  },
  {
    title: "Shopping Cart",
    href: "/apps/ecommerce/checkout",
  },
];

//
// Search Data
//
const searchSugg: searchType[] = [
  {
    title: "Modern",
    href: "/",
  },
  {
    title: "eCommerce",
    href: "/dashboards/eCommerce",
  },
  {
    title: "General",
    href: "/dashboards/general",
  },
  {
    title: "Crypto",
    href: "/dashboards/crypto",
  },
  {
    title: "NFT",
    href: "/dashboards/nft",
  },
];

export {
  notifications,
  profileDD,
  languageDD,
  appsLink,
  quickLink,
  searchSugg,
  messages,
};
