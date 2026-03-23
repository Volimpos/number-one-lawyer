export interface SphereHeroCard {
  title: string;
  text: string;
}

export interface SphereHeroContent {
  title: string;
  subtitle: string;
  cards: SphereHeroCard[];
  titleMaxWidth?: string;
  subtitleMaxWidth?: string;
  alignLastCardRight?: boolean;
}
