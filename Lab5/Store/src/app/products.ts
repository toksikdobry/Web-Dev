export interface Product {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
  rating: number;
  category: string;
  likes: number;
  liked: boolean;
  trash: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Galaxy A13',
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
    image: '/assets/images/a13.jpg',
    description: 'A great phone for its price',
    rating: 5,
    category: "Смартфоны",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 10c',
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
    image: '/assets/images/xr10c.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5,
    category: "Смартфоны",
    likes: 0,
    liked: false,
    trash: false  
  },
  {
    id: 3,
    name: 'Apple iPhone 11',
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
    image: '/assets/images/iph11.jpg',
    description: 'A large phone with one of the best screens',
    rating: 5,
    category: "Смартфоны",
    likes: 0,
    liked: false,
    trash: false  
  },
  {
    id: 4,
    name: 'Apple iPhone 14',
    url: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item",
    image: '/assets/images/iph14.jpg',
    description: 'Be on trend with Iphone 14',
    rating: 5,
    category: "Смартфоны",
    likes: 0,
    liked: false,
    trash: false  
  },
  {
    id: 5,
    name: 'Apple MacBook Air 13',
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    image: '/assets/images/mcbook13.jpg',
    description: 'Do you want to sit cool at Starbucks? Then this Apple MacBook Air 13 is definitely for you!',
    rating: 5,
    category: "Компьютеры и ноутбуки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 6,
    name: 'Xiaomi Poco C40',
    url: "https://kaspi.kz/shop/p/xiaomi-poco-c40-4-gb-64-gb-chernyi-106054027/?c=750000000#!/item",
    image: '/assets/images/pococ40.jpg',
    description: 'A top-of-the-range gaming smartphone for its money!',
    rating: 5,
    category: "Смартфоны",
    likes: 0,
    liked: false,
    trash: false  
  },
  {
    id: 7,
    name: 'Google Pixel 6a',
    url: "https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-zelenyi-106250320/?c=750000000#!/item",
    image: '/assets/images/pixel6a.jpg',
    description: "Google's super newfangled smartphone",
    rating: 5,
    category: "Смартфоны",
    likes: 0,
    liked: false,
    trash: false  
    },
  {
    id: 8,
    name: 'Sony PlayStation 5',
    url: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-geimpad-chernyi-101868190/?c=750000000#!/item",
    image: '/assets/images/ps5.jpg',
    description: 'A next-generation gaming station supporting thousands of games and exclusives not just for one, but also for playing in company',
    rating: 5,
    category: "Игровые приставки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 9,
    name: 'Acer Nitro 5 AN515-45',
    url: "https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item",
    image: '/assets/images/nitro5.jpg',
    description: "Everyone's favourite, time-honoured gaming laptop",
    rating: 5,
    category: "Компьютеры и ноутбуки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 10,
    name: "God of War Ragnarök",
    url: "https://kaspi.kz/shop/p/god-of-war-ragnar-k-ps5-106671793/?c=750000000#!/item",
    image: '/assets/images/gow5.jpg',
    description: 'A new game for a new generation',
    rating: 5,
    category: "Игровые приставки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 11,
    name: "ASUS TUF FX706HE-HX010 90NR0713-M00990",
    url: "https://kaspi.kz/shop/p/asus-tuf-fx706he-hx010-90nr0713-m00990-seryi-102789330/?c=750000000#!/item",
    image: '/assets/images/asus-tuf.jpg',
    description: 'Powerful Notebook',
    rating: 5,
    category: "Компьютеры и ноутбуки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 12,
    name: "HP Victus 16-e0008ur 489H1EA",
    url: "https://kaspi.kz/shop/p/hp-victus-16-e0008ur-489h1ea-temno-seryi-107706136/?c=750000000#!/item",
    image: '/assets/images/hp-victus.jpg',
    description: 'Nice notebook from hp',
    rating: 5,
    category: "Компьютеры и ноутбуки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 13,
    name: "Lenovo Legion 5",
    url: "https://kaspi.kz/shop/p/lenovo-legion-5-17ach6-82k000acrk-temno-sinii-107130212/?c=750000000#!/item",
    image: '/assets/images/lenovo-legion.jpg',
    description: 'Lenovo\'s Hitman',
    rating: 5,
    category: "Компьютеры и ноутбуки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 14,
    name: "Sup Game Box",
    url: "https://kaspi.kz/shop/p/sup-game-box-geimpad-krasnyi-102509665/?c=750000000#!/item",
    image: '/assets/images/game-box.jpg',
    description: 'Sup Game Box + Gamepad red',
    rating: 5,
    category: "Игровые приставки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 15,
    name: "Xbox Series X",
    url: "https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000#!/item",
    image: '/assets/images/xbox.jpg',
    description: 'Refrigerator at your disposal',
    rating: 5,
    category: "Игровые приставки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 16,
    name: "Dendy Sup",
    url: "https://kaspi.kz/shop/p/dendy-sup-620-igr-seryi-102222229/?c=750000000#!/item",
    image: '/assets/images/dendy.jpg',
    description: 'The legendary console of its time',
    rating: 5,
    category: "Игровые приставки",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 17,
    name: "Бирюса 210KX 200л",
    url: "https://kaspi.kz/shop/p/birjusa-210kx-200-l-belyi-2800630/?c=750000000#!/item",
    image: '/assets/images/birusa.jpg',
    description: 'Will freeze even a corpse!',
    rating: 5,
    category: "Бытовая техника",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 18,
    name: "Artel HD 345RN Steel",
    url: "https://kaspi.kz/shop/p/artel-hd-345rn-steel-seryi-100531318/?c=750000000#!/item",
    image: '/assets/images/fridge.jpg',
    description: 'Will freeze anything',
    rating: 5,
    category: "Бытовая техника",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 19,
    name: "LG F2M5HS6S",
    url: "https://kaspi.kz/shop/p/lg-f2m5hs6s-serebristyi-3601448/?c=750000000#!/item",
    image: '/assets/images/lg.jpg',
    description: 'Be on-trend with LG\'s fashionable washing machine',
    rating: 5,
    category: "Бытовая техника",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 20,
    name: "Artel VCC 0220",
    url: "https://kaspi.kz/shop/p/artel-vcc-0220-seryi-3701268/?c=750000000#!/item",
    image: '/assets/images/vacuum.jpg',
    description: 'Sucking up anything',
    rating: 5,
    category: "Бытовая техника",
    likes: 0,
    liked: false,
    trash: false
  },
  {
    id: 21,
    name: "Vitek VT-8304",
    url: "https://kaspi.kz/shop/p/vitek-vt-8304-chernyi-3800548/?c=750000000#!/item",
    image: '/assets/images/iron.jpg',
    description: 'You don\'t need to know how to iron',
    rating: 5,
    category: "Бытовая техника",
    likes: 0,
    liked: false,
    trash: false
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/