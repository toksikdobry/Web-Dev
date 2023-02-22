export interface Product {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Galaxy A13',
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
    image: '/assets/images/a13.jpg',
    description: 'A great phone for its price',
    rating: 5
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 10c',
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
    image: '/assets/images/xr10c.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5
  },
  {
    id: 3,
    name: 'Apple iPhone 11',
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    image: '/assets/images/iph11.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5
  },
  {
    id: 4,
    name: 'Apple iPhone 14',
    url: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item",
    image: '/assets/images/iph14.jpg',
    description: 'Be on trend with Iphone 14',
    rating: 5
  },
  {
    id: 5,
    name: 'Apple MacBook Air 13',
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: '/assets/images/mcbook13.jpg',
    description: 'Do you want to sit cool at Starbucks? Then this Apple MacBook Air 13 is definitely for you!',
    rating: 5
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13 MGN63',
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: '/assets/images/mbook.jpg',
    description: 'The new M1 chip makes the 13‑inch MacBook Pro more capable than ever.',
    rating: 5
  },
  {
    id: 7,
    name: 'Google Pixel 6a',
    url: "https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-zelenyi-106250320/?c=750000000#!/item",
    image: '/assets/images/pixel6a.jpg',
    description: "Full speed ahead.",
    rating: 5
  },
  {
    id: 8,
    name: 'NuPhy Air75',
    url: "https://kaspi.kz/shop/p/nuphy-air75-korichnevyi-108704424/?c=750000000#!/item",
    image: '/assets/images/nuphy.jpg',
    description: 'NuPhy Air75 is an innovative 75% ultra-slim wireless mechanical keyboard.',
    rating: 5
  },
  {
    id: 9,
    name: 'Dyson HD07 1600W',
    url: "https://kaspi.kz/shop/p/dyson-hd07-fen-1600-w-102625842/?c=750000000#!/item",
    image: '/assets/images/dyson.jpg',
    description: "Powerful digitally controlled Dyson V9 engine.",
    rating: 5
  },
  {
    id: 10,
    name: "Logitech Pro X Superlight",
    url: "https://kaspi.kz/shop/p/logitech-pro-x-superlight-chernyi-101948870/?c=750000000#!/item",
    image: '/assets/images/logitech.jpg',
    description: 'Less than 63 grams. Advanced low-latency LIGHTSPEED wireless.',
    rating: 5
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/