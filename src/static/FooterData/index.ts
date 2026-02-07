import {
  FacebookImage,
  GithubImage,
  InstagramImage,
  TelegramImage,
} from "../../assets/icons";

interface SubTitleItem {
  title: string;
  link: string;
}

interface FooterSection {
  title: string;
  subTitle: SubTitleItem[];
}

interface FooterIconItem {
  link: string;
  icon: string;
}
interface footer {
  title: string;
  subTitle: {
    title: string;
    link: string;
  }[];
}

const FooterData: FooterSection[] = [
  {
    title: "Use Cases",
    subTitle: [
      { title: "Web-designers", link: "/webdesigners" },
      { title: "Marketers", link: "/marketers" },
      { title: "Small Business", link: "/smallbusiness" },
      { title: "Website Builder", link: "/websitebuilder" },
    ],
  },
  {
    title: "Company",
    subTitle: [
      { title: "About Us", link: "/aboutus" },
      { title: "Careers", link: "/careers" },
      { title: "FAQs", link: "/faqs" },
      { title: "Terms", link: "/terms" },
      { title: "Contact Us", link: "/contactus" },
    ],
  },
];

const FooterIcon: FooterIconItem[] = [
  { link: "https://www.facebook.com/profile.php?id=100077525400339", icon: FacebookImage },
  { link: "https://github.com/Sanju2056", icon: GithubImage },
  { link: "https://www.instagram.com/nbot__official/", icon: InstagramImage },
  { link: "https://www.linkedin.com/in/sanju-gurung-25a451284/", icon: TelegramImage },
];

const footer:footer[] = [
  {
    title: "About",
    subTitle: [
      { title: "Companies", link: "/companies" },
      {
        title: "Pricing",
        link: "/pricing",
      },
      {
        title: "Terms",
        link: "/terms",
      },
      {
        title: "Advice",
        link: "/advice",
      },
      {
        title: "Privacy Policy",
        link: "/privacy",
      },
    ],
  },
  {
    title: "Resources",
    subTitle: [
      { title: "Help Docs", link: "/helpdocs" },
      {
        title: "Guide",
        link: "/guide",
      },
      {
        title: "Updates",
        link: "/updates",
      },
      {
        title: "Contact Us",
        link: "/contactUs",
      },
    ],
  },
];
export { FooterData, FooterIcon,footer };
