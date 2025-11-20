
export const flowersData = [
  { id: 1, name: 'Spray Carnation', price: 5, img: 'assets/flowers/1.jpg' },
  { id: 2, name: 'Pink Expression Rose', price: 8, img: 'assets/flowers/2.jpg' },
  { id: 3, name: 'French Rose', price: 6, img: 'assets/flowers/3.jpg' },
  { id: 4, name: 'Pink Rose', price: 6, img: 'assets/flowers/4.jpg' },
  { id: 5, name: 'Asian Buttercup', price: 5, img: 'assets/flowers/5.jpg' },
  { id: 6, name: 'Carnation', price: 4, img: 'assets/flowers/6.jpg' },
  { id: 7, name: 'White Chrysanthemum', price: 4, img: 'assets/flowers/7.jpg' },
  { id: 8, name: 'Dianthus Carnation', price: 7, img: 'assets/flowers/8.jpg' },
  { id: 9, name: 'Peony-like Chrysanthemum', price: 7, img: 'assets/flowers/9.jpg' },
  { id: 10, name: 'Black Rose', price: 3, img: 'assets/flowers/10.jpg' },
  { id: 11, name: 'Rainbow Rose', price: 3, img: 'assets/flowers/11.jpg' },
  { id: 12, name: 'Garden Rose', price: 3, img: 'assets/flowers/12.jpg' },
  { id: 13, name: 'Red Rose', price: 10, img: 'assets/flowers/13.jpg' },
  { id: 14, name: 'Orange Rose', price: 10, img: 'assets/flowers/14.jpg' },
  { id: 15, name: 'Pink Mondial Rose', price: 9, img: 'assets/flowers/15.jpg' },
  { id: 16, name: 'Explorer Rose', price: 2, img: 'assets/flowers/16.jpg' },
  { id: 17, name: 'Peony-like Chrysanthemum', price: 2, img: 'assets/flowers/17.jpg' },
  { id: 18, name: 'Ecuador Rose', price: 8, img: 'assets/flowers/18.jpg' },
  { id: 19, name: 'Yellow Rose', price: 8, img: 'assets/flowers/19.jpg' },
  { id: 20, name: 'Burgundy Chrysanthemum', price: 8, img: 'assets/flowers/20.jpg' },
  { id: 21, name: 'Blue Rose', price: 8, img: 'assets/flowers/21.jpg' },
];


export const bouquetsData = [
  {name: "White Hydrangea Bouquet", price: 50, img: "assets/bouquets/Букет из белой Гортензии.jpg"},
  {name: "White Hydrangea & Peony-like Spray Roses Bouquet", price: 55, img: "assets/bouquets/Букет из белых Гортензий и пионовидных кустовых роз.jpg"},
  {name: "Hydrangea & Spray Roses Bouquet", price: 60, img: "assets/bouquets/Букет из гортензии, кустовых роз.jpg"},
  {name: "Powder Chrysanthemum Bouquet", price: 45, img: "assets/bouquets/Букет из кустовых хризантем пудрового цвета.jpg"},
  {name: "Lavender Hydrangea Bouquet", price: 50, img: "assets/bouquets/Букет из лавандовых Гортензий.jpg"},
  {name: "Pink & White Hydrangea Bouquet", price: 55, img: "assets/bouquets/Букет из розовой и белой Гортензий.jpg"},
  {name: "Pink French Rose & Pink Chrysanthemum Bouquet", price: 60, img: "assets/bouquets/Букет из розовых французских роз и розовой хризантемы.jpg"},
  {name: "French Rose & Hydrangea Bouquet", price: 65, img: "assets/bouquets/Букет из французских роз и гортензии.jpg"},
  {name: "Orange Song Bouquet", price: 55, img: "assets/bouquets/Букет Оранжевая песня.jpg"},
  {name: "Peony-like Roses & Eustoma Bouquet", price: 60, img: "assets/bouquets/Букет пионовидных роз, и эустомы.jpg"},
  {name: "Sweet November Bouquet", price: 70, img: "assets/bouquets/Букет Сладкий Ноябрь.jpg"},
  {name: "Airy Kiss Bouquet", price: 50, img: "assets/bouquets/Воздушный поцелуй.jpg"},
  {name: "Hydrangea with Peony-like Roses Bouquet", price: 65, img: "assets/bouquets/Гортензия с пионовидными розами.jpg"},
  {name: "Bombastic Spray Roses Bouquet", price: 55, img: "assets/bouquets/Кустовые розы Бомбастик,.jpg"},
  {name: "Mansfield Park Spray Roses Bouquet", price: 60, img: "assets/bouquets/Кустовые розы Мэнсфилд Парк.jpg"},
  {name: "Spray Roses, Matthiola, Dianthus Bouquet", price: 58, img: "assets/bouquets/Кустовые розы, маттиола, диантусы.jpg"},
  {name: "Lavender Dreams Bouquet", price: 52, img: "assets/bouquets/Лавандовые сны.jpg"},
  {name: "Summer Rose Bouquet", price: 55, img: "assets/bouquets/летний букет из роз.jpg"},
  {name: "Peony-like Rose Bouquet", price: 50, img: "assets/bouquets/пионовидная роза.jpg"},
  {name: "Chrysanthemum, Antirrhinum, Alstroemeria & Roses Bouquet", price: 60, img: "assets/bouquets/Хризантема, Антирринум, Альстромерия и розы.jpg"},
  {name: "Bright Peony-like Spray Roses Bouquet", price: 65, img: "assets/bouquets/Яркий букет из пионовидных кустовых роз.jpg"}
];


export async function fetchFlowers() {
  return flowersData;
}

export async function fetchBouquets() {
  return bouquetsData;
}
