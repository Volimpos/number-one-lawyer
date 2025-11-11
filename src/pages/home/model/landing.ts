import type { Product } from "~/src/entities/product";

export interface LandingInterface {
  heroImage1: string;
  heroImage2: string;
  heroText1: string;
  heroText2: string;
  categoryImageRings: string;
  categoryImageBracelets: string;
  categoryImageNecklace: string;
  categoryImageEarrings: string;
  brandHistoryImage1: string;
  brandHistoryImage2: string;
  brandHistoryImage3: string;
  brandHistoryTitle1: string;
  brandHistoryText1: string;
  brandHistoryTitle2: string;
  brandHistoryText2: string;
  brandHistoryTitle3: string;
  brandHistoryText3: string;
  brandHistoryTitle4: string;
  brandHistoryText4: string;
  advantagesTitle: string;
  advantagesDescription: string;
  advantagesImage1: string;
  advantagesImage2: string;
  advantagesBlock1Title: string;
  advantagesBlock1Text: string;
  advantagesBlock2Title: string;
  advantagesBlock2Text: string;
  ctaText: string;
  ctaImage: string;
  bestsellers: Product[];
}

export type LandingFields = keyof LandingInterface;
