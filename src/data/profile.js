export const profile = {
  firstName: 'Talda',
  fullName: 'Talda NZOUSSI',
  role: 'Développeuse web',
  intro:
    "Je suis Talda NZOUSSI, étudiante en Bachelor Informatique à Orléans, passionnée par le développement web, l'administration système et les réseaux informatiques. Rigoureuse, curieuse et organisée, j'aime relever des défis techniques et apprendre de nouvelles technologies.",
  heroTags: ['Python / FastAPI', 'PHP / MySQL', 'Linux / Nginx', 'Vue.js'],
  interests: [
    {
      name: 'Gymnastique',
      title: 'Ancienne athlète de haut niveau',
      description:
        "Ancienne membre de l'équipe nationale du Congo, j'ai remporté plusieurs médailles d'or en championnat. La gymnastique m'a appris la discipline, la persévérance et le dépassement de soi, des valeurs que j'applique aussi dans mes projets informatiques.",
      image: require('@/assets/interests/gym.png'),
      imageAlt: 'Gymnastique',
      color: 'teal',
    },
    {
      name: 'Montage vidéo',
      title: 'Raconter des histoires en images',
      description:
        "Passionnée par la création vidéo, j'aime assembler des images, des sons et des effets pour raconter une histoire. Ce sens du détail et de l'esthétique se retrouve aussi dans ma façon de concevoir des interfaces web.",
      image: require('@/assets/interests/video.png'),
      imageAlt: 'Montage vidéo',
      color: 'purple',
      reverse: true,
    },
    {
      name: 'Photographie',
      title: "Capturer l'instant",
      description:
        "J'aime capturer des moments uniques et jouer avec la lumière et les perspectives. La photographie m'a appris à observer le monde différemment et à chercher la meilleure façon de présenter les choses.",
      image: require('@/assets/interests/photo.jpeg'),
      imageAlt: 'Photographie',
      color: 'coral',
    },
  ],
  aboutCards: [
    {
      image: require('@/assets/tech.jpg'),
      imageAlt: 'Passion technologie',
      description:
        "Passionnée par les nouvelles technologies, je consacre mon temps libre à explorer de nouveaux outils et frameworks pour enrichir mes compétences. Chaque projet est pour moi une opportunité d'apprendre et de progresser.",
    },
    {
      image: require('@/assets/drive.jpg'),
      imageAlt: 'Auchan Drive',
      description:
        "En parallèle de mes études, je travaille comme préparatrice de commandes chez Auchan Drive, une expérience qui renforce mon sens de l'organisation, ma rigueur et mon esprit d'équipe au quotidien.",
    },
  ],
  languages: [
    { name: 'Français', level: 'Natif', color: 'teal' },
    { name: 'Anglais', level: 'Courant', color: 'purple' },
  ],
}
