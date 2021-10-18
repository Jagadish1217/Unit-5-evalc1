const data = {
    products: [
{
  "id": 1,
  "name": "Turkey - Breast, Double",
  "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
  "description": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
  "is_available": true,
  "price": 987
}, {
  "id": 2,
  "name": "Bread - Burger",
  "image": "http://dummyimage.com/200x200.png/dddddd/000000",
  "description": "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
  "is_available": false,
  "price": 763
}, {
  "id": 3,
  "name": "Beans - Kidney White",
  "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi",
  "is_available": true,
  "price": 231
}, {
  "id": 4,
  "name": "Wine - Piper Heidsieck Brut",
  "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper",
  "is_available": true,
  "price": 970
}, {
  "id": 5,
  "name": "Lemonade - Strawberry, 591 Ml",
  "image": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "description": "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet",
  "is_available": false,
  "price": 427
}, {
  "id": 6,
  "name": "Bread - Dark Rye",
  "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
  "is_available": false,
  "price": 847
}, /* {
  "id": 7,
  "name": "Turnip - White, Organic",
  "image": "http://dummyimage.com/200x200.bmp/5fa2dd/ffffff",
  "description": "dolor vel est donec odio justo sollicitudin ut suscipit a feugiat",
  "is_available": true,
  "price": 781
}, {
  "id": 8,
  "name": "Truffle - Peelings",
  "image": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "description": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
  "is_available": false,
  "price": 505
}, {
  "id": 9,
  "name": "Lotus Leaves",
  "image": "http://dummyimage.com/200x200.png/dddddd/000000",
  "description": "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
  "is_available": true,
  "price": 252
}, {
  "id": 10,
  "name": "Table Cloth 72x144 White",
  "image": "http://dummyimage.com/200x200.bmp/cc0000/ffffff",
  "description": "pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu",
  "is_available": false,
  "price": 662
},  {
  "id": 11,
  "name": "Soup - Campbells Beef Strogonoff",
  "image": "http://dummyimage.com/200x200.bmp/dddddd/000000",
  "description": "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
  "is_available": true,
  "price": 207
}, {
  "id": 12,
  "name": "Yoplait Drink",
  "image": "http://dummyimage.com/200x200.bmp/cc0000/ffffff",
  "description": "duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
  "is_available": false,
  "price": 319
}, {
  "id": 13,
  "name": "Capicola - Hot",
  "image": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
  "description": "pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
  "is_available": false,
  "price": 526
}, {
  "id": 14,
  "name": "Flour - All Purpose",
  "image": "http://dummyimage.com/200x200.bmp/5fa2dd/ffffff",
  "description": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
  "is_available": false,
  "price": 988
}, {
  "id": 15,
  "name": "Juice - Grapefruit, 341 Ml",
  "image": "http://dummyimage.com/200x200.jpg/dddddd/000000",
  "description": "justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
  "is_available": true,
  "price": 193
}, {
  "id": 16,
  "name": "Cheese - Victor Et Berthold",
  "image": "http://dummyimage.com/200x200.png/dddddd/000000",
  "description": "lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
  "is_available": true,
  "price": 358
}, {
  "id": 17,
  "name": "Tequila Rose Cream Liquor",
  "image": "http://dummyimage.com/200x200.bmp/ff4444/ffffff",
  "description": "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
  "is_available": false,
  "price": 990
}, {
  "id": 18,
  "name": "Muffin - Zero Transfat",
  "image": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "description": "maecenas leo odio condimentum id luctus nec molestie sed justo",
  "is_available": true,
  "price": 331
}, {
  "id": 19,
  "name": "Shiratamako - Rice Flour",
  "image": "http://dummyimage.com/200x200.png/ff4444/ffffff",
  "description": "in est risus auctor sed tristique in tempus sit amet",
  "is_available": true,
  "price": 361
}, {
  "id": 20,
  "name": "Pepper - Roasted Red",
  "image": "http://dummyimage.com/200x200.bmp/5fa2dd/ffffff",
  "description": "justo eu massa donec dapibus duis at velit eu est congue elementum in",
  "is_available": false,
  "price": 942
}, {
  "id": 21,
  "name": "Wine - Magnotta - Bel Paese White",
  "image": "http://dummyimage.com/200x200.bmp/cc0000/ffffff",
  "description": "tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
  "is_available": false,
  "price": 770
}, {
  "id": 22,
  "name": "Cheese - Mascarpone",
  "image": "http://dummyimage.com/200x200.jpg/5fa2dd/ffffff",
  "description": "vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis",
  "is_available": false,
  "price": 447
}, {
  "id": 23,
  "name": "Fish - Artic Char, Cold Smoked",
  "image": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
  "description": "proin at turpis a pede posuere nonummy integer non velit donec diam",
  "is_available": false,
  "price": 182
}, {
  "id": 24,
  "name": "Table Cloth 62x120 Colour",
  "image": "http://dummyimage.com/200x200.png/cc0000/ffffff",
  "description": "at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante",
  "is_available": false,
  "price": 551
}, {
  "id": 25,
  "name": "Pepper - Gypsy Pepper",
  "image": "http://dummyimage.com/200x200.bmp/ff4444/ffffff",
  "description": "libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu pede",
  "is_available": false,
  "price": 638
}, */
],
};
export default data;