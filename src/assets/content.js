import heroHomeImg from './hero.jpg';
import heroStoryImg from './hero_story.jpg';
import heroMenuImg from './hero_menu.jpg';

// Home Page
const menuItems = [
  {
    id: 1,
    title: 'Cupcakes',
    image: 'https://source.unsplash.com/nXKWLn8y9qE/',
  },
  {
    id: 2,
    title: 'Donuts',
    image: 'https://source.unsplash.com/qZ6uvJHLHFc/',
  },
  {
    id: 3,
    title: 'Cookies',
    image: 'https://source.unsplash.com/bzLhhI3MpYY/',
  },
];

const homeHeroContent = {
  title: 'Treat Yourself',
  subTitle: 'Cupcakes, Donuts, Cookies, and more!',
  ctaPrimary: 'Shop',
  ctaPrimaryLink: '/our-menu',
  ctaSecondary: 'More',
  ctaSecondaryLink: '/#about_us',
  image: heroHomeImg
}

// Story Page
const storyHeroContent = {
  title: 'Our Story',
  subTitle: 'How it all began, and where we\'re going...',
  image: heroStoryImg
}
const storyContent = {
  images: [
    {
      id: 1,
      image: 'https://source.unsplash.com/4jq0kcF5oDI/',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/1yJl8mKDf6Q/',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/rx_GNopVlFs/',
    },
  ],
  text: [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, maiores! Libero, nesciunt commodi sequi nobis minus ullam? Optio odio est sapiente aspernatur! Fugiat maiores possimus ut odio! Omnis, odio neque. Repellendus, reiciendis ducimus suscipit totam natus quam itaque numquam nesciunt saepe labore, magnam dignissimos. Corporis eum debitis libero officiis laborum consequuntur perspiciatis, doloremque voluptas eos veritatis eius provident maxime nihil!', 
    'Quae hic sapiente temporibus sequi quaerat ipsa. Dignissimos unde magnam repellendus provident totam. Corporis, voluptate? Molestias at, aliquid numquam, suscipit iure dolore exercitationem aspernatur ducimus ut libero et, ipsam quidem? Possimus corrupti fugit soluta ducimus, odit accusamus, neque sed animi quae perspiciatis rem. Et ducimus, accusamus dolor quis natus nisi nam quasi, earum vel vitae blanditiis sequi consequuntur suscipit sint? Amet iure voluptas odio animi, sed tempora sit voluptatum. Architecto, impedit unde? Rerum molestias explicabo quibusdam ipsam incidunt porro et voluptates officiis, aspernatur ea ad adipisci soluta animi vero magnam. Suscipit nemo voluptatum iste, ipsa et illum incidunt distinctio magni velit expedita sapiente saepe harum voluptates cum accusamus labore explicabo eligendi quibusdam culpa ducimus corrupti consequuntur quisquam aperiam minus. Quis.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, unde fuga excepturi consequatur ea, corporis itaque temporibus fugiat eos fugit optio nesciunt distinctio dolorum. Molestias pariatur officiis eum expedita repellendus. Ex maiores eius quae dignissimos? Numquam at molestias delectus, perferendis illo sit harum quam odio corrupti excepturi sequi nobis eos consequatur commodi reiciendis consequuntur non earum eum! Necessitatibus, enim laborum. Ullam, modi earum! Nostrum temporibus ipsum reiciendis sit sequi ut dolorum sapiente quos libero quis! Unde, repellat reprehenderit voluptas quae doloribus laborum saepe hic quam accusamus ab molestiae tenetur a.', 
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, et? Ex suscipit soluta consequuntur vel, eligendi minima ducimus laudantium, illum placeat, beatae nemo quisquam maiores dolorem. Mollitia, amet? Fugit, maiores? Quibusdam alias odit modi animi quo tempore ab? Eligendi modi veritatis quo soluta, optio dicta, animi cumque ut, quaerat doloribus nostrum reprehenderit ipsa. Illo consequatur odit ratione ut possimus veniam. Et placeat in fugit distinctio omnis! Tempora nostrum, nemo non quaerat accusamus minima et voluptate vel cum veniam! Repellendus architecto eveniet dolorum ipsa consequuntur explicabo, quaerat esse quae perspiciatis fugit? Maiores dicta sapiente itaque excepturi doloribus omnis reiciendis quos, vitae dignissimos culpa, ullam incidunt odit vero? Laborum aliquid fuga sed ut! Quis odit beatae explicabo nobis magnam dolor? Necessitatibus, aspernatur! Numquam in cumque magni provident, officia laudantium, libero pariatur, exercitationem ab soluta architecto ut quod? Ipsum eligendi nulla a odio quo itaque reiciendis maxime. Corporis molestiae non saepe nulla magni?'
  ],
  team: [
    {
      id: 1,
      name: 'Mallory',
      image: 'https://source.unsplash.com/dnL6ZIpht2s/',
      bio: 'Laborum aliquid fuga sed ut! Quis odit beatae explicabo nobis magnam dolor? Necessitatibus, aspernatur! Numquam in cumque magni provident, officia laudantium, libero pariatur, exercitationem ab soluta architecto ut quod? Ipsum eligendi nulla a odio quo itaque reiciendis maxime. Corporis molestiae non saepe nulla magni?',
      city: 'Seattle, WA',
      email: 'mallory@email.com',
      img_position: 'center'
    },
    {
      id: 2,
      name: 'Daria',
      image: 'https://source.unsplash.com/oTweoxMKdkA/',
      bio: 'Laborum aliquid fuga sed ut! Quis odit beatae explicabo nobis magnam dolor? Necessitatibus, aspernatur! Numquam in cumque magni provident, officia laudantium, libero pariatur, exercitationem ab soluta architecto ut quod? Ipsum eligendi nulla a odio quo itaque reiciendis maxime. Corporis molestiae non saepe nulla magni?',
      city: 'Cleveland, OH',
      email: 'daria@email.com',
      img_position: 'center'
    },
    {
      id: 3,
      name: 'Orville',
      image: 'https://source.unsplash.com/zaItO-b0afs/',
      bio: 'Laborum aliquid fuga sed ut! Quis odit beatae explicabo nobis magnam dolor? Necessitatibus, aspernatur! Numquam in cumque magni provident, officia laudantium, libero pariatur, exercitationem ab soluta architecto ut quod? Ipsum eligendi nulla a odio quo itaque reiciendis maxime. Corporis molestiae non saepe nulla magni?',
      city: 'Las Vegas, NV',
      email: 'orville@email.com',
      img_position: 'top'
    }
  ]
}

// Menu Page
const menuHeroContent = {
  title: 'Our Menu',
  ctaPrimary: 'View Cart',
  ctaPrimaryLink: '/cart',
  ctaSecondary: 'Specials',
  ctaSecondaryLink: '#specials',
  image: heroMenuImg,
}

const cupcakeOptions = [
  {
    id: 1,
    title: 'Chocolate Supreme',
    price: 499,
    image: 'https://source.unsplash.com/zk-fclJdGas/'
  },
  {
    id: 2,
    title: 'Mint Rainbow',
    price: 499,
    image: 'https://source.unsplash.com/pGM4sjt_BdQ/'
  },
  {
    id: 3,
    title: 'Red Velvet',
    price: 599,
    image: 'https://source.unsplash.com/RQYAbzjCK6k/'
  },
  {
    id: 4,
    title: 'Rainbow Sparkle',
    price: 399,
    image: 'https://source.unsplash.com/o3TP2wb0aTc/'
  },
];

const cookieOptions = [
  {
    id: 1,
    title: 'Chocolate Chip',
    price: 199,
    image: 'https://source.unsplash.com/YUUaapeq5Zo/'
  },
  {
    id: 2,
    title: 'Macaroons',
    price: 299,
    image: 'https://source.unsplash.com/5B-CcdKM9LA/'
  },
  {
    id: 3,
    title: 'Minty Goodness',
    price: 299,
    image: 'https://source.unsplash.com/GbBQH_RQFcc/'
  },
  {
    id: 4,
    title: 'Super Fudge',
    price: 199,
    image: 'https://source.unsplash.com/x6VuEH2npHw/'
  },
];

const brownieOptions = [
  {
    id: 1,
    title: 'Raspberry Delight',
    price: 299,
    image: 'https://source.unsplash.com/uG1jwfpCRhg/'
  },
  {
    id: 2,
    title: 'Walnut Surprise',
    price: 399,
    image: 'https://source.unsplash.com/WPRuXYLNY68/'
  },
  {
    id: 3,
    title: 'Peanut Buttery',
    price: 299,
    image: 'https://source.unsplash.com/405IIp6oMl4/'
  },
  {
    id: 4,
    title: 'Gluten Free',
    price: 499,
    image: 'https://source.unsplash.com/yRI0fojBUv8/'
  },
];

const donutOptions = [
  {
    id: 1,
    title: 'Mmm, Donut',
    price: 99,
    image: 'https://source.unsplash.com/EumgKI11Hns/'
  },
  {
    id: 2,
    title: 'Maple Powered',
    price: 159,
    image: 'https://source.unsplash.com/PSuWs98GZHA/'
  },
  {
    id: 3,
    title: 'Oreo Special',
    price: 299,
    image: 'https://source.unsplash.com/1qubXlkKnSM/'
  },
  {
    id: 4,
    title: 'Mint Donut',
    price: 159,
    image: 'https://source.unsplash.com/PIjUQFsg9Ms/'
  },
];

const cakeOptions = [
  {
    id: 1,
    title: 'Pumpkin Spice',
    price: 2199,
    image: 'https://source.unsplash.com/Nl8Oa6ZuNcA/'
  },
  {
    id: 2,
    title: 'Chocolate Heaven',
    price: 1999,
    image: 'https://source.unsplash.com/wp4ZYmUuJBk/'
  },
  {
    id: 3,
    title: 'Banana & Vanilla',
    price: 1599,
    image: 'https://source.unsplash.com/8LtrMQfeDkQ/'
  },
  {
    id: 4,
    title: 'Mint Cake',
    price: 1899,
    image: 'https://source.unsplash.com/mlcm6qi9Bu8/'
  },
];

export { 
  menuItems, 
  homeHeroContent, 
  storyHeroContent, 
  storyContent, 
  menuHeroContent, 
  cupcakeOptions,
  cookieOptions,
  brownieOptions,
  donutOptions,
  cakeOptions
}
