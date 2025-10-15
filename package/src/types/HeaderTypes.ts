type notificationType = {

  title: string;
  subtitle: string;
};

type profileType = {
  title: string;

  subtitle: string;
  url: string;
  img: string;
};

type languageType = {
  avatar: string;
  title: string;
  subtext: string;
  value: string;
};

type appsLinkType = {
  avatar: string;
  title: string;
  subtext: string;
  href: string;
};

type quickLinksType = {
  title: string;
  href: string;
};

type searchType = {
  title: string;
  href: string;
};

type messageType = {
  title: string;
  subtitle: string;
  avatar: string;
  time: string;
};

export type {
  notificationType,
  profileType,
  languageType,
  appsLinkType,
  quickLinksType,
  searchType,
  messageType,
};
