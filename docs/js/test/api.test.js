const flowersData = [
  { id: 1, name: 'Bush Carnation', price: 5, img: 'assets/flowers/1.jpg' },
  { id: 2, name: 'Pink Expression Rose', price: 8, img: 'assets/flowers/2.jpg' },
  { id: 3, name: 'French Rose', price: 6, img: 'assets/flowers/3.jpg' },
  { id: 4, name: 'Pink Rose', price: 6, img: 'assets/flowers/4.jpg' },
  { id: 5, name: 'Asian Buttercup', price: 5, img: 'assets/flowers/5.jpg' },
  { id: 6, name: 'Carnation', price: 4, img: 'assets/flowers/6.jpg' },
  { id: 7, name: 'White Chrysanthemum', price: 4, img: 'assets/flowers/7.jpg' },
  { id: 8, name: 'Dianthus Carnation', price: 7, img: 'assets/flowers/8.jpg' },
  { id: 9, name: 'Peony-like Chrysanthemum', price: 7, img: 'assets/flowers/9.jpg' },
  { id: 10, name: 'Black Rose', price: 3, img: 'assets/flowers/10.jpg' }
  // …добавь остальные цветы аналогично
];

const bouquetsData = [
  {name: "White Hydrangea Bouquet", price: 50, img: "assets/bouquets/White Hydrangea.jpg"},
  {name: "Hydrangea & Peony-like Rose Bouquet", price: 55, img: "assets/bouquets/Hydrangea & Peony-like Rose.jpg"},
  {name: "Hydrangea & Rose Bouquet", price: 60, img: "assets/bouquets/Hydrangea & Rose.jpg"}
  // …добавь остальные букеты
];

// ---------- FILTER FLOWERS ----------
function filterFlowers(flowers, search = '', color = '', sortBy = 'name') {
  let result = flowers.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) &&
    (color ? f.color?.toLowerCase() === color.toLowerCase() : true)
  );

  if (sortBy === 'price') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

// ---------- PAGINATE FLOWERS ----------
function paginateFlowers(flowers, page = 1, perPage = 10) {
  const start = (page - 1) * perPage;
  return flowers.slice(start, start + perPage);
}

module.exports = {
  flowersData,
  bouquetsData,
  filterFlowers,
  paginateFlowers
};
