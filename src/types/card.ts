export type CardTypes = {
  title: string;
  description: string;
  image: string;
  alt: string;
  link?: {
    web?: string;
    github?: string;
  };
  tags?: string[];
  category?: string;
  className?: string;
};
