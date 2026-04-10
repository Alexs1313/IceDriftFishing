import type {ImageSourcePropType} from 'react-native';

export type DrrftfishnguiddeCategory = 'glaciers' | 'fishing' | 'atmospheric';

export type DrrftfishnguiddePlace = {
  id: string;
  category: DrrftfishnguiddeCategory;
  title: string;
  coordinates: {lat: number; lng: number};
  description: string;
  image: ImageSourcePropType;
};

export const DRRFTFISHNGUIDDE_SAVED_KEY = 'drrftfishnguidde_saved_places_v1';

export const drrftfishnguiddeCategoryLabel: Record<
  DrrftfishnguiddeCategory,
  string
> = {
  glaciers: 'GLACIER',
  fishing: 'FISHING',
  atmospheric: 'ATMOSPHERIC',
};

export const drrftfishnguiddeCategoryBtnLabel: Record<
  DrrftfishnguiddeCategory,
  string
> = {
  glaciers: 'Glaciers',
  fishing: 'Fishing',
  atmospheric: 'Atmospheric places',
};

export const drrftfishnguiddePlaces: DrrftfishnguiddePlace[] = [
  {
    id: 'glaciers_1',
    category: 'glaciers',
    title: 'Lake Baikal Ice, Mongolia Border Region',
    image: require('../../assets/i/drrftfishnguiddeloc1.png'),
    coordinates: {lat: 51.5, lng: 105.0},
    description:
      'This frozen region near Lake Baikal is known for its incredibly clear ice and deep waters. During winter, the surface transforms into a vast прозрачный landscape with visible cracks and bubbles trapped beneath. It is a unique location for ice fishing, offering both beauty and challenge due to changing ice conditions.',
  },
  {
    id: 'glaciers_2',
    category: 'glaciers',
    title: 'Lake Inari, Finland',
    image: require('../../assets/i/drrftfishnguiddeloc2.png'),
    coordinates: {lat: 68.906, lng: 27.028},
    description:
      'Lake Inari is one of the largest lakes in Finland, surrounded by Arctic wilderness. In winter, it becomes a perfect destination for ice fishing, with hundreds of islands and quiet, remote spots. The calm environment and stable ice make it ideal for long, peaceful sessions.',
  },
  {
    id: 'glaciers_3',
    category: 'glaciers',
    title: 'Lake Vänern, Sweden',
    image: require('../../assets/i/drrftfishnguiddeloc3.png'),
    coordinates: {lat: 58.999, lng: 13.5},
    description:
      'Lake Vänern is the largest lake in Sweden and offers diverse ice fishing conditions. Its wide open пространства and deep waters attract experienced anglers. The landscape combines frozen shores, forests, and distant horizons, creating a powerful natural atmosphere.',
  },
  {
    id: 'glaciers_4',
    category: 'glaciers',
    title: 'Lake Peipus, Estonia',
    image: require('../../assets/i/drrftfishnguiddeloc4.png'),
    coordinates: {lat: 58.57, lng: 27.5},
    description:
      'Lake Peipus is a massive shallow lake known for its excellent winter fishing. The frozen surface stretches endlessly, allowing easy movement between spots. It is a popular destination for both beginners and professionals.',
  },
  {
    id: 'glaciers_5',
    category: 'glaciers',
    title: 'Great Slave Lake, Canada',
    image: require('../../assets/i/drrftfishnguiddeloc5.png'),
    coordinates: {lat: 61.666, lng: -114.352},
    description:
      'One of the deepest lakes in North America, Great Slave Lake offers extreme ice fishing conditions. Thick ice, cold temperatures, and deep waters create a challenging but rewarding experience. It is known for large catches and remote wilderness.',
  },
  {
    id: 'glaciers_6',
    category: 'glaciers',
    title: 'Lake Saimaa, Finland',
    image: require('../../assets/i/drrftfishnguiddeloc6.png'),
    coordinates: {lat: 61.2, lng: 28.0},
    description:
      'Lake Saimaa is a labyrinth of frozen channels and islands. Its unique geography creates countless fishing spots with varying depths and conditions. The peaceful environment and scenic views make it one of the most атмосферных locations in Europe.',
  },
  {
    id: 'glaciers_7',
    category: 'glaciers',
    title: 'Lake Torneträsk, Sweden',
    image: require('../../assets/i/drrftfishnguiddeloc7.png'),
    coordinates: {lat: 68.35, lng: 19.0},
    description:
      'Located above the Arctic Circle, Lake Torneträsk offers a true northern experience. The frozen lake is surrounded by mountains and often illuminated by the northern lights. It is perfect for those seeking both fishing and a unique atmosphere.',
  },
  {
    id: 'glaciers_8',
    category: 'glaciers',
    title: 'Lake Michigan Ice Zone, USA',
    image: require('../../assets/i/drrftfishnguiddeloc8.png'),
    coordinates: {lat: 44.0, lng: -87.0},
    description:
      'During harsh winters, parts of Lake Michigan freeze, creating temporary ice fishing zones. These areas provide access to large fish species and dynamic conditions influenced by wind and temperature.',
  },
  {
    id: 'glaciers_9',
    category: 'glaciers',
    title: 'Lake Tekapo, New Zealand',
    image: require('../../assets/i/drrftfishnguiddeloc9.png'),
    coordinates: {lat: -44.0, lng: 170.48},
    description:
      'Although known for its turquoise waters, Lake Tekapo occasionally freezes in winter. Surrounded by mountains, it offers a rare and visually stunning ice fishing experience in the southern hemisphere.',
  },
  {
    id: 'glaciers_10',
    category: 'glaciers',
    title: 'Lake Sevan, Armenia',
    image: require('../../assets/i/drrftfishnguiddeloc10.png'),
    coordinates: {lat: 40.4, lng: 44.9},
    description:
      'Lake Sevan is one of the largest high-altitude lakes in the world. In winter, parts of it freeze, creating unique fishing conditions. The combination of altitude, cold air, and open landscapes makes it a distinctive destination.',
  },

  {
    id: 'fishing_1',
    category: 'fishing',
    title: 'Lake Geneva, Switzerland/France',
    image: require('../../assets/i/drrftfishnguiddeloc11.png'),
    coordinates: {lat: 46.454, lng: 6.56},
    description:
      'Lake Geneva is one of the largest lakes in Western Europe, surrounded by mountains and scenic towns. In winter, parts of the lake develop icy zones suitable for controlled fishing. The combination of alpine views and calm waters creates a unique and relaxing experience. The changing weather and depth variations make it important to choose spots carefully.',
  },
  {
    id: 'fishing_2',
    category: 'fishing',
    title: 'Lake Oulujärvi, Finland',
    image: require('../../assets/i/drrftfishnguiddeloc12.png'),
    coordinates: {lat: 64.3, lng: 27.5},
    description:
      'Lake Oulujärvi is known as the "Sea of Kainuu" due to its vast size. During winter, it freezes into a wide open ice field with numerous fishing spots. The lake offers stable conditions and a peaceful environment, making it ideal for both beginners and experienced anglers.',
  },
  {
    id: 'fishing_3',
    category: 'fishing',
    title: 'Lake Siljan, Sweden',
    image: require('../../assets/i/drrftfishnguiddeloc13.png'),
    coordinates: {lat: 60.9, lng: 14.6},
    description:
      'Lake Siljan is a historic lake formed by a meteor impact. In winter, it becomes a quiet and scenic fishing destination. The surrounding forests and small villages add to its charm. Ice fishing here is calm and steady, with a focus on patience and technique.',
  },
  {
    id: 'fishing_4',
    category: 'fishing',
    title: 'Lake Pielinen, Finland',
    image: require('../../assets/i/drrftfishnguiddeloc14.png'),
    coordinates: {lat: 63.3, lng: 29.8},
    description:
      'Lake Pielinen is famous for its natural beauty and wide frozen landscapes. The lake provides many remote fishing areas with minimal disturbance. Its clean waters and stable ice conditions make it a great place for long fishing sessions in a peaceful setting.',
  },
  {
    id: 'fishing_5',
    category: 'fishing',
    title: 'Lake Champlain, USA/Canada',
    image: require('../../assets/i/drrftfishnguiddeloc15.png'),
    coordinates: {lat: 44.5, lng: -73.3},
    description:
      'Lake Champlain stretches across the border of the USA and Canada. In winter, it offers excellent ice fishing opportunities, especially in its bays. The lake is known for diverse fish species and changing conditions, making each trip different and engaging.',
  },
  {
    id: 'fishing_6',
    category: 'fishing',
    title: 'Lake Päijänne, Finland',
    image: require('../../assets/i/drrftfishnguiddeloc16.png'),
    coordinates: {lat: 61.5, lng: 25.4},
    description:
      'Lake Päijänne is one of Finland’s deepest and cleanest lakes. During winter, it transforms into a large frozen area with clear ice and stunning views. The depth variations create interesting fishing conditions, requiring attention and strategy.',
  },
  {
    id: 'fishing_7',
    category: 'fishing',
    title: 'Lake Constance, Germany/Switzerland/Austria',
    image: require('../../assets/i/drrftfishnguiddeloc17.png'),
    coordinates: {lat: 47.6, lng: 9.3},
    description:
      'Lake Constance is a large and culturally rich lake in Central Europe. While it rarely freezes completely, certain winters create partial ice zones. These areas offer unique and rare fishing opportunities combined with scenic surroundings.',
  },
  {
    id: 'fishing_8',
    category: 'fishing',
    title: 'Lake St. Clair, USA/Canada',
    image: require('../../assets/i/drrftfishnguiddeloc18.png'),
    coordinates: {lat: 42.4, lng: -82.8},
    description:
      'Lake St. Clair is a shallow lake that freezes quickly in winter. It is popular for ice fishing due to its accessibility and consistent fish activity. The flat landscape and easy navigation make it a comfortable location for all skill levels.',
  },
  {
    id: 'fishing_9',
    category: 'fishing',
    title: 'Lake Wakatipu, New Zealand',
    image: require('../../assets/i/drrftfishnguiddeloc19.png'),
    coordinates: {lat: -45.0, lng: 168.6},
    description:
      'Lake Wakatipu is surrounded by dramatic mountains and offers a rare winter fishing experience in the southern hemisphere. Although it freezes only in certain conditions, it provides a visually stunning and unique environment.',
  },
  {
    id: 'fishing_10',
    category: 'fishing',
    title: 'Lake Balaton, Hungary',
    image: require('../../assets/i/drrftfishnguiddeloc20.png'),
    coordinates: {lat: 46.8, lng: 17.7},
    description:
      'Lake Balaton is the largest lake in Central Europe. During cold winters, it freezes and becomes a popular destination for ice activities. The shallow depth and wide surface create accessible fishing conditions, perfect for relaxed sessions.',
  },

  {
    id: 'atmospheric_1',
    category: 'atmospheric',
    title: 'Abisko Lake, Sweden',
    image: require('../../assets/i/drrftfishnguiddeloc21.png'),
    coordinates: {lat: 68.35, lng: 18.83},
    description:
      'Abisko Lake is located above the Arctic Circle and is famous for its clear skies and northern lights. In winter, the lake freezes into a vast icy surface surrounded by mountains. The cold, dry air creates perfect visibility, making it an ideal place for both fishing and enjoying the atmosphere. The silence and remoteness give a strong sense of isolation and focus.',
  },
  {
    id: 'atmospheric_2',
    category: 'atmospheric',
    title: 'Lake Bled, Slovenia',
    image: require('../../assets/i/drrftfishnguiddeloc22.png'),
    coordinates: {lat: 46.363, lng: 14.093},
    description:
      'Lake Bled is known for its small island and mountain backdrop. During colder winters, parts of the lake freeze, creating a unique and picturesque environment. The surrounding Alps reflect on the ice, and the calm atmosphere makes it a peaceful destination for winter exploration.',
  },
  {
    id: 'atmospheric_3',
    category: 'atmospheric',
    title: 'Lake Louise, Canada',
    image: require('../../assets/i/drrftfishnguiddeloc23.png'),
    coordinates: {lat: 51.4167, lng: -116.2167},
    description:
      'Lake Louise is surrounded by towering mountains and glaciers. In winter, the lake turns into a frozen expanse with a smooth icy surface. The bright snow and blue ice create a striking visual contrast. The area offers a strong sense of scale and natural power.',
  },
  {
    id: 'atmospheric_4',
    category: 'atmospheric',
    title: 'Lake Bohinj, Slovenia',
    image: require('../../assets/i/drrftfishnguiddeloc24.png'),
    coordinates: {lat: 46.276, lng: 13.888},
    description:
      'Lake Bohinj is a quiet alpine lake hidden in a national park. In winter, it becomes calm and less crowded, offering a peaceful environment. The frozen surface and surrounding forests create a balanced and immersive natural setting.',
  },
  {
    id: 'atmospheric_5',
    category: 'atmospheric',
    title: 'Jokulsarlon Glacier Lagoon, Iceland',
    image: require('../../assets/i/drrftfishnguiddeloc25.png'),
    coordinates: {lat: 64.048, lng: -16.179},
    description:
      'This glacier lagoon is filled with floating ice formations. Although it does not fully freeze, the surrounding areas create a dramatic icy landscape. The shifting ice and deep blue tones give it a unique and constantly changing appearance.',
  },
  {
    id: 'atmospheric_6',
    category: 'atmospheric',
    title: 'Lake Eibsee, Germany',
    image: require('../../assets/i/drrftfishnguiddeloc26.png'),
    coordinates: {lat: 47.458, lng: 10.984},
    description:
      'Located near the Zugspitze mountain, Lake Eibsee offers stunning winter views. The frozen water, combined with clear skies and mountain reflections, creates a clean and minimalistic landscape. The calm conditions make it ideal for quiet exploration.',
  },
  {
    id: 'atmospheric_7',
    category: 'atmospheric',
    title: 'Lake Jökulsá, Iceland Highlands',
    image: require('../../assets/i/drrftfishnguiddeloc27.png'),
    coordinates: {lat: 64.7, lng: -17.5},
    description:
      'This remote highland lake is surrounded by volcanic terrain and glaciers. In winter, it becomes an isolated and extreme environment. The icy surface and strong winds create a raw and powerful atmosphere.',
  },
  {
    id: 'atmospheric_8',
    category: 'atmospheric',
    title: 'Lake Zell, Austria',
    image: require('../../assets/i/drrftfishnguiddeloc28.png'),
    coordinates: {lat: 47.323, lng: 12.796},
    description:
      'Lake Zell is surrounded by alpine towns and mountains. During cold winters, it partially freezes, creating a scenic and accessible winter landscape. The reflections of lights and snow create a cozy yet expansive feeling.',
  },
  {
    id: 'atmospheric_9',
    category: 'atmospheric',
    title: 'Lake Misurina, Italy',
    image: require('../../assets/i/drrftfishnguiddeloc29.png'),
    coordinates: {lat: 46.583, lng: 12.252},
    description:
      'Lake Misurina lies in the Dolomites and is known for its clear water and mountain reflections. In winter, it becomes a frozen mirror surrounded by dramatic peaks. The location offers a balanced mix of beauty and calm.',
  },
  {
    id: 'atmospheric_10',
    category: 'atmospheric',
    title: 'Thingvallavatn Lake, Iceland',
    image: require('../../assets/i/drrftfishnguiddeloc30.png'),
    coordinates: {lat: 64.255, lng: -21.129},
    description:
      'Thingvallavatn is the largest natural lake in Iceland, located in a rift valley. In winter, parts of it freeze, revealing deep, clear water beneath the ice. The geological formations and cold atmosphere create a unique and immersive environment.',
  },
];

export function drrftfishnguiddeCoordsText(coords: {lat: number; lng: number}) {
  return `${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`;
}

