export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'Nintendo',
    price: 8000,
    description:
      'Cuenta con una pantalla OLED de 7 pulgadas (17.78 cm) que muestra vibrantes colores. Más información. Nintendo Switch. Totalmente equipada',
    stock: 10,
  },
  {
    id: 2,
    name: 'X-Box',
    price: 10000,
    description:
      'La consola Xbox Series S, totalmente digital, ofrece juegos de próxima generación a un precio accesible. Experimenta la velocidad y el rendimiento',
    stock: 12,
  },
  {
    id: 3,
    name: 'Samsung Galaxy',
    price: 5000,
    description:
      'Explora la línea completa de Galaxy Serie A y descubre nuestros celulares potentes y económicos. ¡Aprovecha las ofertas y encuentra el modelo ideal para ti!',
    stock: 30,
  },
  {
    id: 4,
    name: 'OPPO',
    price: 6000,
    description:
      'OPPO, fabricantes lideres e innovadores de dispositivos inteligentes del mundo, elevando la vida a través del arte tecnológico',
    stock: 30,
  },
  {
    id: 5,
    name: 'Motorola',
    price: 4500,
    description:
      'Motorola Solutions es líder global en productos, servicios y soluciones para comunicaciones de misión crítica. Descubra cómo podemos ayudar a su comunidad',
    stock: 30,
  },
  {
    id: 6,
    name: 'iPhone X',
    price: 10000,
    description:
      'Cámara delantera de 7Mpx. Procesador Apple A11 Bionic de 2.39GHz con 3GB de RAM. Batería de 2716mAh con carga inalámbrica. Memoria interna de 64GB',
    stock: 30,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
