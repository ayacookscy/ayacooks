export interface MenuItem {
  name?: string;
  price?: number;
  bottlePrice?: number;
  allergens?: number[];
  description?: string;
  regularName?: string;
  descriptionBold?: string;
  lunch?: boolean;
}

export interface MenuSection {
  name: string;
  items: MenuItem[];
}

export interface Allergen {
  id: number;
  name: string;
}
