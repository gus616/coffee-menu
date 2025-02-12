export type MenuItem = {
  id: number;
  title: string;
  description: string;
};
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: 'Affogato',
    description: 'A shot of espresso poured over a scoop of vanilla ice cream.',
  },
  {
    id: 2,
    title: 'Americano',
    description: 'Espresso shots topped with hot water, creating a light layer of crema.',
  },
  {
    id: 3,
    title: 'Cappuccino',
    description: 'A shot of espresso with equal parts steamed milk and milk foam.',
  },
  {
    id: 4,
    title: 'Cold Brew',
    description: 'Coffee brewed with cold water for 12-24 hours.',
  },
  {
    id: 5,
    title: 'Cortado',
    description: 'A shot of espresso "cut" with an equal part of steamed milk.',
  },
  {
    id: 6,
    title: 'Espresso',
    description: 'Finely ground coffee, water, and pressure.',
  },
  {
    id: 7,
    title: 'Flat White',
    description: 'A shot of espresso with two parts steamed milk, topped with a thin layer of microfoam.',
  },
  {
    id: 8,
    title: 'Latte',
    description: 'A shot of espresso with steamed milk and a light layer of foam.',    
  },
  {
    id: 9,
    title: 'Macchiato',
    description: 'A shot of espresso with a dollop of steamed milk and foam.',
  },
  {
    id: 10,
    title: 'Mocha',
    description: 'A shot of espresso with steamed milk, cocoa powder, and chocolate'
  }
];
