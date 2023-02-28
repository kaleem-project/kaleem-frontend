const friends = [
  {
    id: '0',
    profile: '0.jpg',
    firstName: 'Garcia',
    surName: 'Martin',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '1:22 PM',
  },

  {
    id: '1',
    profile: '1.jpg',
    firstName: 'Jeanne',
    surName: 'Abelard',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '3:43 AM',
  },
  {
    id: '2',
    profile: '2.jpg',
    firstName: 'Adrian',
    surName: 'Alessandro',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '5:38 PM',
  },
  {
    id: '3',
    profile: '3.jpg',
    firstName: 'Roisin',
    surName: 'Benito',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '10:35 AM',
  },
  {
    id: '4',
    profile: '4.jpg',
    firstName: 'Cillian',
    surName: 'Rodriguez',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '7:35 PM',
  },
  {
    id: '5',
    profile: '5.jpg',
    firstName: 'Adele',
    surName: 'Cyrilo',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '8:14 AM',
  },
  {
    id: '6',
    profile: '6.jpg',
    firstName: 'Davide',
    surName: 'Fernandez',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '9:24 PM',
  },
  {
    id: '7',
    profile: '7.jpg',
    firstName: 'Emma',
    surName: 'Dax',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '6:13 AM',
  },

  {
    id: '8',
    profile: '8.jpg',
    firstName: 'Diego',
    surName: 'Lopez',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '4:56 PM',
  },
  {
    id: '9',
    profile: '9.jpg',
    firstName: 'Robin',
    surName: 'Elias',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '11:18 AM',
  },
  {
    id: '10',
    profile: '10.jpg',
    firstName: 'Emanuel',
    surName: 'Gomez',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '12:05 AM',
  },
  {
    id: '11',
    profile: '11.jpg',
    firstName: 'Flavia',
    surName: 'Enrique',
    lastMsg:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestia hic atque consectetur in quidem officia, minima libero ipsum necessitatibus enim ea perferendis nobis, quod mollitia evenietbeatae. Rem, quisquam reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore vero consectetur magnam unde placeat earum libero blanditiis, vel iste maxime corrupti non repellendus doloremque officia reprehenderit rerum quo quos.',
    timeLastMsg: '10:49 PM',
  },
];

export function getFriends() {
  return friends;
}
