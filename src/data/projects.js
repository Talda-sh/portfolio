export const projects = [
  {
    id: 5,
    title: 'PathSense',
    description:
      "Application web de navigation intérieure pour personnes malvoyantes. Interface 100% accessible avec instructions vocales, cartes interactives et calcul d'itinéraires optimaux.",
    summary:
      "Application web de navigation intérieure pour personnes malvoyantes avec interface vocale, géolocalisation et calcul d'itinéraires optimaux.",
    thumbnail: require('@/assets/screenshots/pathsens/p1.png'),
    liveUrl: 'https://groupe-gamma-og4f.vercel.app/',
    techs: ['Angular', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Jest', 'Cypress'],
    color: 'purple',
    details: [
      "Développement d'une interface 100% accessible pour personnes malvoyantes",
      "Implémentation d'une interface vocale avec instructions détaillées",
      'Intégration de cartes interactives avec géolocalisation',
      "Calcul d'itinéraires optimaux pour navigation intérieure",
      'Tests automatisés avec Jest et Cypress',
    ],
    screenshots: [
      {
        src: require('@/assets/screenshots/pathsens/p1.png'),
        caption:
          "L'écran d'accueil propose un bouton micro pour que l'utilisateur dise directement où il veut aller.",
      },
      {
        src: require('@/assets/screenshots/pathsens/p2.png'),
        caption:
          "Cet écran montre un visuel animé indiquant que l'application écoute la voix de l'utilisateur pour comprendre la commande.",
      },
      {
        src: require('@/assets/screenshots/pathsens/p3.png'),
        caption:
          "La carte s'affiche avec le trajet prévu vers la destination, indiquant clairement le chemin à suivre.",
      },
      {
        src: require('@/assets/screenshots/pathsens/p4.png'),
        caption:
          "L'écran liste clairement chaque instruction du trajet (distance et action) pour guider l'utilisateur pas à pas.",
      },
    ],
  },
  {
    id: 1,
    title: 'Serveur Web Debian / Nginx',
    description:
      "Conception et sécurisation d'une infrastructure web complète sous Debian 12 pour un club de water-polo. Comparaison de 4 serveurs web, optimisation de Nginx, sécurisation SSH et automatisation des sauvegardes.",
    summary:
      "Installation et configuration d'un serveur Nginx sur Debian. Optimisation des performances, tests de charge et sécurisation (pare-feu, permissions, HTTPS).",
    thumbnail: require('@/assets/screenshots/nginx/nginx1.png'),
    techs: ['Linux', 'Debian 12', 'Nginx', 'SSH', 'Bash', 'VMware'],
    color: 'coral',
    details: [
      'Création de deux machines virtuelles Debian 12 (serveur et client) sous VMware',
      'Installation et comparaison de 4 serveurs web : Apache, Nginx, Lighttpd et Caddy',
      'Tests de performance avec Apache Benchmark, Nginx sélectionné avec 1075 requêtes/s',
      "Optimisation de Nginx : compression gzip, keepalive, logs d'accès",
      'Sécurisation SSH : connexion par clé uniquement, accès root désactivé',
      "Script d'archivage automatique des logs avec cron (exécution quotidienne)",
    ],
    screenshots: [
      {
        src: require('@/assets/screenshots/nginx/nginx1.png'),
        caption:
          'Test de communication réseau : ping réussi entre la VM client (192.168.75.129) et la VM serveur (192.168.75.130).',
      },
      {
        src: require('@/assets/screenshots/nginx/nginx2.png'),
        caption:
          'Comparaison des performances : Nginx gagne avec 1075 requêtes/s et le temps de réponse le plus bas (9.3 ms).',
      },
      {
        src: require('@/assets/screenshots/nginx/nginx3.png'),
        caption:
          'Page HTML personnalisée affichée dans le navigateur, confirmation que Nginx fonctionne correctement.',
      },
      {
        src: require('@/assets/screenshots/nginx/nginx4.png'),
        caption:
          "Script d'archivage automatique des logs Nginx exécuté chaque jour à 1h via cron.",
      },
      {
        src: require('@/assets/screenshots/nginx/nginx5.png'),
        caption:
          'Vérification des archives créées dans /archive, logs compressés au format .tar.gz.',
      },
    ],
  },
  {
    id: 2,
    title: 'Infrastructure Active Directory',
    description:
      "Mise en place d'une infrastructure Windows Server 2008 complète avec Active Directory pour gérer les utilisateurs, les politiques de sécurité et les profils itinérants dans un environnement virtualisé VMware.",
    summary:
      "Création d'un domaine Active Directory sous Windows Server, gestion des stratégies de groupe (GPO), profils itinérants et délégation d'administration.",
    thumbnail: require('@/assets/screenshots/active-directory/ad1.png'),
    techs: ['Windows Server 2008', 'Active Directory', 'GPO', 'VMware'],
    color: 'purple',
    details: [
      'Création du domaine talda.local et configuration du contrôleur de domaine',
      'Création de 3 utilisateurs dans une OU dédiée (Utilisateurs_Talda)',
      'Configuration des stratégies de mot de passe (longueur min 10 caractères, historique 5 mots de passe, verrouillage après 3 tentatives)',
      "Mise en place de la délégation de contrôle pour un utilisateur non-administrateur",
      'Configuration des profils itinérants vérifiés sur 2 machines clientes',
      'Sauvegarde complète du serveur (8.67 Go) vers un disque secondaire',
    ],
    screenshots: [
      {
        src: require('@/assets/screenshots/active-directory/ad1.png'),
        caption:
          "Structure Active Directory : domaine talda.local avec les utilisateurs créés dans l'OU Utilisateurs_Talda.",
      },
      {
        src: require('@/assets/screenshots/active-directory/ad2.png'),
        caption:
          'Stratégies de mot de passe : longueur minimale 10 caractères, historique 5 mots de passe, verrouillage après 3 tentatives.',
      },
      {
        src: require('@/assets/screenshots/active-directory/ad3.png'),
        caption:
          'Test de sécurité : mot de passe trop simple refusé par la politique du domaine.',
      },
      {
        src: require('@/assets/screenshots/active-directory/ad4.png'),
        caption:
          'Sauvegarde complète réussie : 8.67 Go transférés vers le disque secondaire.',
      },
      {
        src: require('@/assets/screenshots/active-directory/ad5.png'),
        caption:
          'Profils itinérants : le fichier test.txt créé sur Client-10 est retrouvé automatiquement sur Client-10B.',
      },
    ],
  },
  {
    id: 3,
    title: 'Site Web Dynamique',
    description:
      "Site web responsive multi-pages développé avec PHP et MySQL, avec une page d'administration sécurisée et un mode jour/nuit.",
    summary:
      "Site responsive multi-pages avec formulaire connecté à une base de données, page d'administration sécurisée et mode jour/nuit.",
    thumbnail: require('@/assets/screenshots/site-web/site1.png'),
    techs: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
    color: 'teal',
    details: [
      'Site responsive présentant plusieurs pages',
      'Formulaire connecté à une base de données MySQL',
      "Page d'administration sécurisée (affichage et suppression des données)",
      "Intégration d'un mode jour/nuit",
    ],
    screenshots: [],
  },
  {
    id: 4,
    title: 'Jeu du Pendu - Python',
    description:
      'Jeu du pendu en ligne de commande développé en Python avec gestion des vies, sélection aléatoire de mots et construction progressive du pendu.',
    summary:
      'Jeu du pendu en ligne de commande avec gestion des vies, sélection aléatoire de mots depuis un fichier texte et construction progressive du pendu.',
    techs: ['Python'],
    color: 'pink',
    details: [
      'Conception du jeu avec gestion des vies et des erreurs',
      "Sélection aléatoire de mots depuis un fichier texte",
      'Construction progressive du pendu à chaque mauvaise réponse',
      "Création automatique et remplissage d'un fichier de mots",
    ],
    screenshots: [],
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === Number(id))
}
