import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Consola } from '../models/consola.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsolaService {
  private con: Consola[] = [
    {
      id: 1,
      nombre: 'Playstation 4',
      fechaLanzamiento: '15 de noviembre de 2013',
      foto: 'https://m.media-amazon.com/images/I/51ROi4d4puL._SL1280_.jpg',
      catalogo: [
        {
          id: 1,
          nombre: 'God of War 4',
          fecha: '20 de abril de 2018',
          genero: 'Acción y aventura',
          foto: 'https://pm1.narvii.com/6840/33c75441ffbb065eb7df69488b250ab95b2862b2v2_hq.jpg',
        },
        {
          id: 2,
          nombre: 'Uncharted 4',
          fecha: '10 de mayo 2016',
          genero: 'Acción y aventura',
          foto: 'https://picfiles.alphacoders.com/199/thumb-199320.jpg',
        },
        {
          id: 3,
          nombre: 'Elden Ring',
          fecha: '25 de febrero de 2022',
          genero: 'Rol de Accion en tercera persona',
          foto: 'https://uvejuegos.com/img/caratulas/62850/1_pc.jpg',
        },
        {
          id: 4,
          nombre: 'Red Dead Redemption II',
          fecha: '24 de octubre de 2018',
          genero: 'Mundo abierto',
          foto: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
        },
        {
          id: 5,
          nombre: 'Horizon Zero Dawn',
          fecha: '28 de febrero de 2017',
          genero: 'Mundo abierto, acción, aventura',
          foto: 'https://1.bp.blogspot.com/-1nzqgs8_vaE/Xy4UIiNcodI/AAAAAAAAThg/gwz6tELY9t0g8ENjx8WQH-6bCLc9KFYwQCLcBGAsYHQ/s1600/Horizon%2BZero%2BDawn%2BPC%2BCover%2BCaratula-www.juegosparawindows.com.jpg',
        },
        {
          id: 6,
          nombre: 'Stray',
          fecha: '19 de julio de 2022',
          genero: 'Aventura',
          foto: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Nintendo Switch',
      fechaLanzamiento: '03 de marzo de 2017',
      foto: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one',
      catalogo: [
        {
          id: 1,
          nombre: 'The Legend of Zelda: Breath of the Wild',
          fecha: '03 de marzo de 2017',
          genero: 'Acción y aventura',
          foto: 'https://static.posters.cz/image/750/pinturas-sobre-lienzo-the-legend-of-zelda-breath-of-the-wild-sunset-i111061.jpg',
        },
        {
          id: 2,
          nombre: 'Super Mario Odyssey',
          fecha: '27 de octubre de 2017',
          genero: 'Plataformas',
          foto: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg',
        },
        {
          id: 3,
          nombre: 'Super Smash Bros. Ultimate',
          fecha: '7 de diciembre de 2018',
          genero: 'Pelea y Plataformas',
          foto: 'https://i.pinimg.com/originals/1c/40/68/1c4068993d62d54d4aabe9fbda74a92c.jpg',
        },
        {
          id: 4,
          nombre: 'Super Mario Maker 2',
          fecha: '28 de junio de 2019',
          genero: 'Plataformas',
          foto: 'https://i.pinimg.com/originals/8d/cc/e3/8dcce3a3ce9bfc1159e4a31f5776b70d.jpg',
        },
        {
          id: 5,
          nombre: "The Legend of Zelda: Link's Awakening",
          fecha: '20 de septiembre de 2019',
          genero: 'aventura',
          foto: 'https://static.posters.cz/image/750/posters/the-legend-of-zelda-links-awakening-i76695.jpg',
        },
        {
          id: 6,
          nombre: 'Splatoon 2',
          fecha: '21 de julio de 2017',
          genero: 'Disparos en tercera persona',
          foto: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2017/02/splatoon-2-caratula.jpg?itok=26eSYE4A',
        },
      ],
    },
    {
      id: 3,
      nombre: 'Xbox One',
      fechaLanzamiento: '22 de noviembre de 2013',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/41-9v1OV%2B5L._SX300_SY300_QL70_ML2_.jpg',
      catalogo: [
        {
          id: 1,
          nombre: 'Gears of war 4',
          fecha: '11 de Octubre de 2016',
          genero: 'Acción y aventura',
          foto: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/04/581132-gears-war-4-fecha-lanzamiento-portada.jpg?itok=31Tsk0CO',
        },
        {
          id: 2,
          nombre: 'Killer Instinct',
          fecha: '22 de noviembre de 2013',
          genero: 'Peleas',
          foto: 'https://media.vandal.net/m/21298/killer-instinct-2013111414346_1.jpg',
        },
        {
          id: 3,
          nombre: 'Gears 5',
          fecha: '6 de septiembre de 2019',
          genero: 'Acción y aventura',
          foto: 'https://as01.epimg.net/meristation/imagenes/2019/08/20/cover/364320561566326940.jpg',
        },
      ],
    },
    {
      id: 4,
      nombre: 'Playstation 2',
      fechaLanzamiento: '04 de marzo de 2000',
      foto: 'https://m.media-amazon.com/images/I/61pETE6v4vL._SL1500_.jpg',
      catalogo: [
        {
          id: 1,
          nombre: 'Grand theft Auto: San Andreas',
          fecha: '26 octubre de 2004',
          genero: 'Acción y aventura',
          foto: 'https://m.media-amazon.com/images/I/51SV62HXM1L._SY445_.jpg',
        },
        {
          id: 2,
          nombre: 'Shadow of the collosus',
          fecha: '18 de octubre de 2005',
          genero: 'Aventura',
          foto: 'https://media.vandal.net/m/1903/20051224193432_1.jpg',
        },
        {
          id: 3,
          nombre: 'Resident Evil 4',
          fecha: '26 octubre de 2005',
          genero: 'Terror',
          foto: 'https://m.media-amazon.com/images/I/81nuHUOENtL._SL1500_.jpg',
        },
      ],
    },
    {
      id: 5,
      nombre: 'Nintendo Wii',
      fechaLanzamiento: '22 de noviembre de 2013',
      foto: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/support_9/H2x1_NintendoWii_support_no_logo_image800w.jpg',
      catalogo: [
        {
          id: 1,
          nombre: 'WIi Sports',
          fecha: '19 de noviembre de 2006',
          genero: 'Deportes',
          foto: 'https://mx.static.webuy.com/product_images/Juegos/Wii%20Juegos/045496362119_l.jpg',
        },
        {
          id: 2,
          nombre: 'New Super Mario Bros Wii',
          fecha: '12 de noviembre del 2009',
          genero: 'Plataformas',
          foto: 'https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/n/e/new-super-mario-wii.jpg',
        },
        {
          id: 3,
          nombre: 'Mario Kart Wii',
          fecha: '10 de abril de 2008',
          genero: 'Carreras',
          foto: 'https://i5.walmartimages.com/asr/0b35a2d5-8992-4500-905c-b365540626da.2e82c86cfccf9d7f1219939ab6f28070.jpeg',
        },
      ],
    },
    {
      id: 6,
      nombre: 'Playstation 3',
      fechaLanzamiento: '22 de noviembre de 2013',
      foto: 'https://m.media-amazon.com/images/I/41+7ijf43jL._SX466_.jpg',
      catalogo: [
        {
          id: 1,
          nombre: 'The last of us',
          fecha: '14 de junio de 2013',
          genero: 'Acción y aventura',
          foto: 'https://i.pinimg.com/originals/48/14/61/48146110938f316d252062fcad7d95e6.jpg',
        },
        {
          id: 2,
          nombre: 'God of war 3',
          fecha: '16 de marzo de 2010',
          genero: 'Hack and Slash',
          foto: 'https://m.media-amazon.com/images/I/51sCy1tVjfS._SX425_.jpg',
        },
        {
          id: 3,
          nombre: 'The Evil Within',
          fecha: 'Octubre de 2014',
          genero: 'Terror',
          foto: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/oW8ShmeCKapjXbHxjHUlmqB1.png',
        },
      ],
    },
  ];

  listadoConsola(): Consola[] {
    return this.con;
  }

  obtenerUno(id: number): Consola {
    return <Consola>this.con.find((item) => item.id === id);
  }
  constructor() {}
}
