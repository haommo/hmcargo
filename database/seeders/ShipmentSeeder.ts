import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Shipment from 'App/Models/Shipment'

export default class ShipmentSeeder extends BaseSeeder {
  public async run () {
    await Shipment.createMany([
      {
        "shipmentId": 114503,
        "orderDate": "2023-02-12",
        "senderName": "Phylys Billes",
        "senderAddress": "3300 Main Alley",
        "receiverName": "Hyacinth Gerrard",
        "receiverAddress": "240 Crest Line Hill",
        "receiverPhone": "6753322356"
      }, {
        "shipmentId": 212112,
        "orderDate": "2022-12-01",
        "senderName": "Jonathan Suart",
        "senderAddress": "88 Birchwood Terrace",
        "receiverName": "Kameko Klain",
        "receiverAddress": "1 Namekagon Avenue",
        "receiverPhone": "5718869758"
      }, {
        "shipmentId": 487566,
        "orderDate": "2023-05-13",
        "senderName": "Ediva Berns",
        "senderAddress": "94034 Milwaukee Drive",
        "receiverName": "Ware Dowbiggin",
        "receiverAddress": "95 Larry Hill",
        "receiverPhone": "9082586845"
      }, {
        "shipmentId": 329433,
        "orderDate": "2022-12-28",
        "senderName": "Bert McKyrrelly",
        "senderAddress": "393 Butterfield Lane",
        "receiverName": "Rahal Cossar",
        "receiverAddress": "7993 Chinook Avenue",
        "receiverPhone": "8981355427"
      }, {
        "shipmentId": 809796,
        "orderDate": "2022-09-22",
        "senderName": "Nollie Waleworke",
        "senderAddress": "6491 Kensington Pass",
        "receiverName": "Atlanta Diment",
        "receiverAddress": "21 Melody Point",
        "receiverPhone": "3042578463"
      }, {
        "shipmentId": 455091,
        "orderDate": "2023-03-20",
        "senderName": "Christiano Mallard",
        "senderAddress": "52 Cottonwood Street",
        "receiverName": "Lenka Vahl",
        "receiverAddress": "18 7th Plaza",
        "receiverPhone": "4955128700"
      }, {
        "shipmentId": 794810,
        "orderDate": "2022-08-20",
        "senderName": "Kingsley Griniov",
        "senderAddress": "936 Hanover Pass",
        "receiverName": "Farah Blissitt",
        "receiverAddress": "0 Transport Place",
        "receiverPhone": "5075866409"
      }, {
        "shipmentId": 483438,
        "orderDate": "2023-05-18",
        "senderName": "Tuckie Seedman",
        "senderAddress": "19 Norway Maple Alley",
        "receiverName": "Zarah Esslement",
        "receiverAddress": "94 Garrison Plaza",
        "receiverPhone": "8962823954"
      }, {
        "shipmentId": 810592,
        "orderDate": "2023-05-03",
        "senderName": "Pietrek Cunah",
        "senderAddress": "9416 Kropf Street",
        "receiverName": "Denver Lantoph",
        "receiverAddress": "07 Tennyson Court",
        "receiverPhone": "9564896169"
      }, {
        "shipmentId": 899953,
        "orderDate": "2022-09-17",
        "senderName": "Pam Matthews",
        "senderAddress": "53 Manley Lane",
        "receiverName": "Gabbi Larchier",
        "receiverAddress": "2 John Wall Drive",
        "receiverPhone": "4666624119"
      }, {
        "shipmentId": 278154,
        "orderDate": "2023-02-19",
        "senderName": "Madelle Cheyenne",
        "senderAddress": "6 Rowland Circle",
        "receiverName": "Iolanthe Battson",
        "receiverAddress": "896 Bultman Lane",
        "receiverPhone": "6839738396"
      }, {
        "shipmentId": 685921,
        "orderDate": "2022-12-09",
        "senderName": "Saba Kidney",
        "senderAddress": "3467 Northfield Parkway",
        "receiverName": "Simone Colafate",
        "receiverAddress": "215 Clyde Gallagher Alley",
        "receiverPhone": "6913077737"
      }, {
        "shipmentId": 287075,
        "orderDate": "2022-10-09",
        "senderName": "Delano Pickerin",
        "senderAddress": "55 Fairview Way",
        "receiverName": "Martyn Wakes",
        "receiverAddress": "1706 Farragut Point",
        "receiverPhone": "9436026458"
      }, {
        "shipmentId": 745687,
        "orderDate": "2022-08-18",
        "senderName": "Hunt Sloam",
        "senderAddress": "9 Northridge Street",
        "receiverName": "Elfrida Beesey",
        "receiverAddress": "7587 Cambridge Alley",
        "receiverPhone": "3619563536"
      }, {
        "shipmentId": 691789,
        "orderDate": "2022-10-12",
        "senderName": "Courtenay Piser",
        "senderAddress": "1 Lake View Parkway",
        "receiverName": "Gery Frazier",
        "receiverAddress": "2 Del Mar Street",
        "receiverPhone": "6276948044"
      }, {
        "shipmentId": 756753,
        "orderDate": "2023-02-17",
        "senderName": "Anne-marie Reinbach",
        "senderAddress": "9 Merrick Trail",
        "receiverName": "Morris Crichmere",
        "receiverAddress": "163 Meadow Valley Trail",
        "receiverPhone": "8539738114"
      }, {
        "shipmentId": 840551,
        "orderDate": "2022-11-25",
        "senderName": "Carrissa Nunnery",
        "senderAddress": "2688 Cambridge Alley",
        "receiverName": "Cord Weavers",
        "receiverAddress": "78 Fieldstone Lane",
        "receiverPhone": "4995694162"
      }, {
        "shipmentId": 860836,
        "orderDate": "2023-04-05",
        "senderName": "Carry Howarth",
        "senderAddress": "4847 Kingsford Circle",
        "receiverName": "Domingo Grayer",
        "receiverAddress": "2 Mcbride Junction",
        "receiverPhone": "9531311384"
      }, {
        "shipmentId": 792249,
        "orderDate": "2023-05-05",
        "senderName": "Dulci Sturridge",
        "senderAddress": "207 Memorial Center",
        "receiverName": "Cord Tamburi",
        "receiverAddress": "309 Dawn Place",
        "receiverPhone": "9208269704"
      }, {
        "shipmentId": 624873,
        "orderDate": "2023-02-01",
        "senderName": "Caldwell Camois",
        "senderAddress": "4 Marcy Point",
        "receiverName": "Rikki Hryskiewicz",
        "receiverAddress": "0 Maywood Avenue",
        "receiverPhone": "6582097669"
      }, {
        "shipmentId": 628898,
        "orderDate": "2023-01-26",
        "senderName": "Hurley Yuryev",
        "senderAddress": "8224 Ryan Plaza",
        "receiverName": "Cordy Colleck",
        "receiverAddress": "8 Macpherson Circle",
        "receiverPhone": "5257482981"
      }, {
        "shipmentId": 323723,
        "orderDate": "2022-10-08",
        "senderName": "Mead Woodall",
        "senderAddress": "9368 Sutteridge Terrace",
        "receiverName": "Karly Tarzey",
        "receiverAddress": "8 Sage Junction",
        "receiverPhone": "4463845590"
      }, {
        "shipmentId": 893969,
        "orderDate": "2023-03-12",
        "senderName": "Danni Chatwood",
        "senderAddress": "1789 Duke Circle",
        "receiverName": "Rhett Kimmince",
        "receiverAddress": "0 Victoria Junction",
        "receiverPhone": "3368165391"
      }, {
        "shipmentId": 252736,
        "orderDate": "2022-09-14",
        "senderName": "Oran Keenor",
        "senderAddress": "1521 Nobel Alley",
        "receiverName": "Loraine Varns",
        "receiverAddress": "4182 Paget Street",
        "receiverPhone": "5923839191"
      }, {
        "shipmentId": 709996,
        "orderDate": "2023-07-13",
        "senderName": "Kyle Sheddan",
        "senderAddress": "4 Sullivan Road",
        "receiverName": "Raven Berceros",
        "receiverAddress": "0 Harbort Drive",
        "receiverPhone": "6923535037"
      }, {
        "shipmentId": 143216,
        "orderDate": "2022-08-20",
        "senderName": "Phillida Eastam",
        "senderAddress": "75966 Pankratz Hill",
        "receiverName": "Jeanette Cowperthwaite",
        "receiverAddress": "390 Continental Center",
        "receiverPhone": "9849004836"
      }, {
        "shipmentId": 604793,
        "orderDate": "2022-09-06",
        "senderName": "Charmain McCullogh",
        "senderAddress": "586 Rigney Road",
        "receiverName": "Isidora Reede",
        "receiverAddress": "12 New Castle Place",
        "receiverPhone": "8517673798"
      }, {
        "shipmentId": 257594,
        "orderDate": "2023-03-18",
        "senderName": "Korie Avraham",
        "senderAddress": "3237 Old Shore Lane",
        "receiverName": "Cicily Simenet",
        "receiverAddress": "3 Aberg Lane",
        "receiverPhone": "3871821953"
      }, {
        "shipmentId": 822032,
        "orderDate": "2023-03-09",
        "senderName": "Hatti Chislett",
        "senderAddress": "9028 Sachs Place",
        "receiverName": "Worthington Pummell",
        "receiverAddress": "4869 Carberry Center",
        "receiverPhone": "6435785452"
      }, {
        "shipmentId": 514117,
        "orderDate": "2022-08-10",
        "senderName": "Quintina McWard",
        "senderAddress": "1 Monument Lane",
        "receiverName": "Ferdy Lamzed",
        "receiverAddress": "9 Cody Circle",
        "receiverPhone": "7873798561"
      }, {
        "shipmentId": 467038,
        "orderDate": "2022-12-30",
        "senderName": "Eula Nevinson",
        "senderAddress": "42 Sugar Alley",
        "receiverName": "Deni Routham",
        "receiverAddress": "85289 Mandrake Center",
        "receiverPhone": "1064933601"
      }, {
        "shipmentId": 887788,
        "orderDate": "2023-03-05",
        "senderName": "Sydney Tesdale",
        "senderAddress": "372 Pepper Wood Way",
        "receiverName": "Merle Yurinov",
        "receiverAddress": "8587 School Circle",
        "receiverPhone": "9633379322"
      }, {
        "shipmentId": 791545,
        "orderDate": "2022-10-25",
        "senderName": "Xylina McComish",
        "senderAddress": "3 Blue Bill Park Lane",
        "receiverName": "Brooke Sonner",
        "receiverAddress": "5819 Mitchell Circle",
        "receiverPhone": "3676632092"
      }, {
        "shipmentId": 566686,
        "orderDate": "2023-01-06",
        "senderName": "Ezra Sainsberry",
        "senderAddress": "7 Goodland Hill",
        "receiverName": "Stephana Argabrite",
        "receiverAddress": "90 Onsgard Hill",
        "receiverPhone": "3158604267"
      }, {
        "shipmentId": 790001,
        "orderDate": "2023-05-07",
        "senderName": "Tome Pardy",
        "senderAddress": "81 Veith Plaza",
        "receiverName": "Dill Jeafferson",
        "receiverAddress": "86404 Quincy Parkway",
        "receiverPhone": "9967238727"
      }, {
        "shipmentId": 547806,
        "orderDate": "2022-12-20",
        "senderName": "Rafferty Valens-Smith",
        "senderAddress": "2770 Dahle Center",
        "receiverName": "Alwyn Churn",
        "receiverAddress": "65989 Division Hill",
        "receiverPhone": "8081411713"
      }, {
        "shipmentId": 788494,
        "orderDate": "2023-02-10",
        "senderName": "Eleni O'Spellissey",
        "senderAddress": "9663 Larry Hill",
        "receiverName": "Lindsay Cardoso",
        "receiverAddress": "11 Kim Crossing",
        "receiverPhone": "2048766352"
      }, {
        "shipmentId": 644475,
        "orderDate": "2022-12-05",
        "senderName": "Hannis Eburah",
        "senderAddress": "502 David Parkway",
        "receiverName": "Flinn Clemmen",
        "receiverAddress": "27934 Delaware Trail",
        "receiverPhone": "2403799747"
      }, {
        "shipmentId": 829001,
        "orderDate": "2023-07-24",
        "senderName": "Cristine Byllam",
        "senderAddress": "813 Corben Lane",
        "receiverName": "Viviene Perrins",
        "receiverAddress": "55941 South Parkway",
        "receiverPhone": "6032337408"
      }, {
        "shipmentId": 577870,
        "orderDate": "2023-03-26",
        "senderName": "Henderson Parlatt",
        "senderAddress": "1 Pawling Plaza",
        "receiverName": "Raynell Sprulls",
        "receiverAddress": "238 Starling Court",
        "receiverPhone": "9421885056"
      }, {
        "shipmentId": 596161,
        "orderDate": "2022-12-31",
        "senderName": "Giacopo Geoghegan",
        "senderAddress": "82327 Hollow Ridge Crossing",
        "receiverName": "Ailsun Anfonsi",
        "receiverAddress": "3 Forster Court",
        "receiverPhone": "8857058757"
      }, {
        "shipmentId": 360083,
        "orderDate": "2022-11-16",
        "senderName": "Gusella Woodburne",
        "senderAddress": "5986 Service Plaza",
        "receiverName": "Elyssa Halbard",
        "receiverAddress": "1208 Clove Pass",
        "receiverPhone": "3951761486"
      }, {
        "shipmentId": 447016,
        "orderDate": "2023-03-28",
        "senderName": "Auroora Petrashkov",
        "senderAddress": "367 Sullivan Plaza",
        "receiverName": "Galven Dupree",
        "receiverAddress": "44711 Homewood Circle",
        "receiverPhone": "5164548119"
      }, {
        "shipmentId": 361792,
        "orderDate": "2023-01-15",
        "senderName": "Timmi Brunnen",
        "senderAddress": "809 Mandrake Junction",
        "receiverName": "Ericka Voak",
        "receiverAddress": "8 Florence Trail",
        "receiverPhone": "1919928559"
      }, {
        "shipmentId": 801290,
        "orderDate": "2022-10-01",
        "senderName": "Patton Fullwood",
        "senderAddress": "0 Golf Course Hill",
        "receiverName": "Jan Grindley",
        "receiverAddress": "21717 Schlimgen Lane",
        "receiverPhone": "6698662122"
      }, {
        "shipmentId": 274847,
        "orderDate": "2023-04-17",
        "senderName": "Hubey O'Doghesty",
        "senderAddress": "836 Killdeer Terrace",
        "receiverName": "Roderigo Youles",
        "receiverAddress": "1 Trailsway Road",
        "receiverPhone": "3513565239"
      }, {
        "shipmentId": 160851,
        "orderDate": "2022-09-29",
        "senderName": "Christye Dallicott",
        "senderAddress": "91087 Marquette Drive",
        "receiverName": "Laurie Robelet",
        "receiverAddress": "32 Washington Street",
        "receiverPhone": "1441178820"
      }, {
        "shipmentId": 263083,
        "orderDate": "2023-04-17",
        "senderName": "Koressa Mayne",
        "senderAddress": "3 Banding Place",
        "receiverName": "Ruddy Sabates",
        "receiverAddress": "8553 Meadow Valley Place",
        "receiverPhone": "6655695272"
      }, {
        "shipmentId": 676418,
        "orderDate": "2023-07-09",
        "senderName": "Helenelizabeth Fenn",
        "senderAddress": "6828 Corscot Lane",
        "receiverName": "Asa Satteford",
        "receiverAddress": "976 Texas Place",
        "receiverPhone": "4749525551"
      }, {
        "shipmentId": 683630,
        "orderDate": "2023-01-08",
        "senderName": "Glynnis Boomes",
        "senderAddress": "5 Spaight Crossing",
        "receiverName": "Nicko Dowle",
        "receiverAddress": "39 Aberg Park",
        "receiverPhone": "2849018297"
      }
    ])
  }
}
