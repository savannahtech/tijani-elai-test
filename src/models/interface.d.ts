export interface Props {
  children: React.ReactNode;
}

export interface BannerProps {
  _id: string;
  btn_text: string;
  btn_url: string;
  description: string;
  image: string;
  title: string;
  bg_color: string;
  color: string;
  position: number;
}

interface Link {
  id: number;
  title?: string;
  icon?: JSX.Element;
  link: string;
}

export type InputChangeProps = React.ChangeEvent<HTMLInputElement>;
