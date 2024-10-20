const cars = [
  {
    id: 10,
    model: 'Tesla Model S',
    color: 'Red',
    year: 2021,
    price: 79999,
    quantity: 5,
    images: [
      //'https://uploads.onlyusedtesla.com/wp-content/uploads/2022/10/13213748/featured_01A1EC3FE97E9C83C2DD2AA7174FE9.jpg',
      'https://cdn.vox-cdn.com/thumbor/Jb7tU-6i-1fWUYK7Yjt1sIMnRXQ=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn1.vox-cdn.com/uploads/chorus_asset/file/9097613/twarren_08202017_1939_0003.jpg',
    ],
  },
  {
    id: 12,
    model: 'Toyota Camry',
    color: 'Blue',
    year: 2020,
    price: 24999,
    quantity: 10,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kqUwm_oatpY_4JauGEImRFupCbjBnCYdLg&s',
      'https://i.redd.it/wx0w78g1hyi91.jpg',
    ],
  },
  {
    id: 32,
    model: 'Ford Mustang',
    color: 'Black',
    year: 2022,
    price: 55999,
    quantity: 3,
    images: [
      //'https://i.ebayimg.com/images/g/wRcAAOSwxExgg7BW/s-l1200.jpg',
      'https://autoartmodels.de/wp-content/uploads/2020/04/72934a-scaled.jpg',
    ],
  },
  {
    id: 41,
    model: 'Chevrolet Malibu',
    color: 'White',
    year: 2019,
    price: 23999,
    quantity: 8,
    images: [
      //'https://avatars.mds.yandex.net/get-autoru-vos/5499592/ec78e809156f22a31815dad977e50323/456x342',
      'https://i.ytimg.com/vi/T9umCuWvibk/maxresdefault.jpg',
    ],
  },
  {
    id: 15,
    model: 'Honda Civic',
    color: 'Silver',
    year: 2018,
    price: 20999,
    quantity: 12,
    images: [
      //'https://di-uploads-pod44.dealerinspire.com/hondaofmiddleburgheights/uploads/2024/02/2024-Honda-Civic-Lunar-Silver-Metallic.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsgrXfw39dwMhYQzWfnM_-rRVkSLMpx4eLWqs1kJiB_beZzI6g49sjU01GmuZIo93c_o&usqp=CAU',
    ],
  },
  {
    id: 3,
    model: 'BMW 3 Series',
    color: 'Gray',
    year: 2020,
    price: 41999,
    quantity: 6,
    images: [
      //'https://vehicle-images.dealerinspire.com/c2b1-110004847/3MW69FF09P8D64862/820eb4553cebe4478b54811ad75093ea.jpg',
      'https://cdn.dicklovett.co.uk/uploads/used_stock_image/1_1465500_e.jpg?v=1709649678',
    ],
  },
  {
    id: 6,
    model: 'Audi A4',
    color: 'Black',
    year: 2021,
    price: 42999,
    quantity: 4,
    images: [
      'https://bluesky.cdn.imgeng.in/cogstock-images/autoimg-a609a6176ecb05fdcc8b2bd419df61e22f83e45b.jpg?imgeng=/w_652/',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPvn2XbcitPfWaub75spaCUlz8c3ArbR2ZQ&s',
    ],
  },
  {
    id: 8,
    model: 'Mercedes-Benz C-Class',
    color: 'Blue',
    year: 2022,
    price: 49999,
    quantity: 7,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAlfTy0vuUKDo0B2NH1pJN1wXQxX8lt37Fw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6aIt5jAP5RF2vXjxmAMncYDnn1KHnSTL3A&s',
    ],
  },
  {
    id: 9,
    model: 'Hyundai Sonata',
    color: 'White',
    year: 2020,
    price: 27999,
    quantity: 9,
    images: [
      //'https://cdn.arstechnica.net/wp-content/uploads/2020/02/2020-Sonata-Hybrid-1.jpg',
      'https://octane.rent/wp-content/uploads/2024/02/hyundai-sonata-white-2.jpg',
    ],
  },
  {
    id: 1,
    model: 'Kia Optima',
    color: 'Red',
    year: 2021,
    price: 25999,
    quantity: 11,
    images: [
      //'https://di-uploads-pod14.dealerinspire.com/fergusonkia/uploads/2019/12/2020_Kia_Optima_Special_Edition.jpg',
      'https://i.redd.it/ipp88n3yn6551.jpg',
    ],
  },
];


function myCars(car) {
car.map((data) => {
  const container = document.querySelector('.container')
  const card = document.createElement('div')
  const box = document.createElement('div')
  const carImg = document.createElement('img')
  const carTitle = document.createElement('h3')
  const carColor = document.createElement('p')
  const carYear = document.createElement('p')
  const carPrice = document.createElement('p')
  const carQuantity = document.createElement('p')
  
  carImg.src = data.images;
  carTitle.textContent = `Nomi: ${data.model}`;
  carColor.textContent = `Ranggi: ${data.color}`;
  carYear.textContent = `Ishlab chiqarilgan yili: ${data.year}`;
  carPrice.textContent = `Narxi: ${data.price}`;
  carQuantity.textContent = `Zavoddagi soni:${data.quantity}`;
  
  container.appendChild(card);
  card.appendChild(carImg);
  card.appendChild(box);
  box.appendChild(carTitle);
  box.appendChild(carColor);
  box.appendChild(carYear);
  box.appendChild(carPrice);
  box.appendChild(carQuantity);
})

}

myCars(cars)