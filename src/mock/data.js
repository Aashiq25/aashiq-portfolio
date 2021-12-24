import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Muhamed Aashiq', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, this is',
  name: 'Muhamed Aashiq',
  subtitle: "I'm a Full Stack Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Currently pursuing Master's in Science in Computer Science and Engineering at University at Buffalo, The State University of New York.",
  paragraphTwo: 'Highly motivated in building scalable and reliable softwate systems',
  paragraphThree:
    'There are a lot of things I like to fill my time with. Some of these are the following: yoga, gardening, reading, cycling, and hiking. ',
  resume: 'https://buffalo.box.com/s/hazbboosh22hyynmlad0e4nnawqcr9rt', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Lamda - Twitter Search Engine',
    info: 'Search Engine Lamda was built to dissect twitter data to analyze government and public attitudes towards Covid and vaccines. Tweet data from the USA, India, and Mexico have been analyzed for three languages namely English, Hindi, and Spanish. Tweet data was presented in a visually appealing format with various analytics to gain key excerpts about the data retrieved.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=-z5HASjF3dQ',
    repo: 'https://github.com/Aashiq25/twitter-search-engine', // if no repo, the button will not show up
    btn: 'Demo',
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Real estate PubSub System',
    info: 'Built a distributed pub-sub model using docker containers for real-time notification using web sockets. Prototype model demonstrates horizontal scaling of the system by distributing the load to independent brokers running on a decentralized network connected to a Database',
    info2: '',
    url: 'https://buffalo.box.com/s/93kiv5ylc2c09z57zd50euarcce9y8sz',
    repo: 'https://github.com/Aashiq25/real_estate_pub_sub', // if no repo, the button will not show up
    btn: 'Demo',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would like to contact? Awesome!',
  btn: 'Mail me',
  email: 'muhamedaashiqtce@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/muhamedaashiq/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/muhamed-aashiq/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Aashiq25',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
