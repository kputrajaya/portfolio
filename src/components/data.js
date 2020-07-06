import SvgContactEmail from './svgr/contact-email';
import SvgContactGitHub from './svgr/contact-github';
import SvgContactInstagram from './svgr/contact-instagram';
import SvgContactLinkedIn from './svgr/contact-linkedin';
import SvgContactTwitter from './svgr/contact-twitter';

export const CONTACTS = [
  {
    title: 'Email',
    svg: <SvgContactEmail />,
    link: 'mailto:hi@kvn.pt?subject=Hi, Kevin!'
  },
  {
    title: 'GitHub',
    svg: <SvgContactGitHub />,
    link: 'https://github.com/kiloev'
  },
  {
    title: 'LinkedIn',
    svg: <SvgContactLinkedIn />,
    link: 'https://www.linkedin.com/in/kputrajaya/'
  },
  {
    title: 'Twitter',
    svg: <SvgContactTwitter />,
    link: 'https://twitter.com/kputrajaya'
  },
  {
    title: 'Instagram',
    svg: <SvgContactInstagram />,
    link: 'https://www.instagram.com/kputrajaya/'
  }
];

export const EXPERIENCES = [
  {
    company: 'Orami',
    link: 'https://www.orami.co.id',
    title: 'Head of Engineering',
    start: 2015,
    end: null,
    body: (
      <p>
        I&nbsp;started as Software&nbsp;Engineer, working on the then-<strong>new&nbsp;storefront</strong> built on top <strong>Phalcon&nbsp;PHP</strong>.
        I&nbsp;was then tasked to design and build a <strong>REST&nbsp;API</strong> to be consumed by <strong>mobile&nbsp;app</strong>.
        Later, I&nbsp;developed a service to manage category&nbsp;tree and campaigns using <strong>Django</strong>, deployed into <strong>serverless infrastructure</strong>.
        As Head&nbsp;of&nbsp;Engineering, I'm currently leading a system&nbsp;restructure, highlighting a <strong>flexible and scalable design</strong>
        in order to cater to future <strong>business&nbsp;needs and opportunities</strong>.
      </p>
    )
  },
  {
    company: 'SIJA Solutions',
    link: 'http://sijasolutions.com.au',
    title: 'Lead Software Engineer',
    start: 2013,
    end: 2015,
    body: (
      <p>
        I&nbsp;handled <strong>remote&nbsp;clients</strong> in Australia without close&nbsp;supervision.
        I've worked on an <strong>investment research</strong> website, <strong>data&nbsp;entry</strong> desktop&nbsp;app, and console&nbsp;apps, such as <strong>web&nbsp;scrapers</strong>.
        Working there, I&nbsp;learned about <strong>Microsoft&nbsp;stack</strong> and some good engineering&nbsp;practices.
        As Team&nbsp;Lead, I&nbsp;also learned non-technical skills like <strong>good&nbsp;communication</strong>, <strong>project&nbsp;estimation</strong>, and <strong>self-management</strong>.
      </p>
    )
  },
  {
    company: 'Institut Teknologi Bandung',
    link: 'https://www.itb.ac.id/',
    title: 'Bachelor of Engineering',
    start: 2009,
    end: 2013,
    body: (
      <p>
        Despite my interest and achievements in <strong>programming since high&nbsp;school</strong>, I&nbsp;chose to study <strong>Electrical&nbsp;Engineering</strong>
        with <strong>computer</strong> and <strong>control&nbsp;system</strong> as my depths.
        I&nbsp;also took part in several student groups, one of them being <strong>Divisi&nbsp;Komputer HME ITB</strong>
        in which I&nbsp;started to learn <strong>web&nbsp;development</strong>.
        In the last years, I&nbsp;started doing <strong>freelance&nbsp;jobs</strong> and <strong>tried to build a startup</strong>.
      </p>
    )
  }
];

export const SKILLS = [
  {
    title: 'Fullstack development',
    alts: [
      'Backend',
      'Frontend',
      'Website',
      'Web app',
      'Mobile app',
      'REST API'
    ],
    strong: true
  },
  {
    title: 'System architecture',
    alts: [
      'System design',
      'Software design',
      'Software architecture'
    ],
    strong: true
  },
  {
    title: 'Database design',
    alts: [
      'DB design',
      'Schema design'
    ]
  },
  {
    title: 'CI/CD',
    alts: [
      'Continuous',
      'Integration',
      'Delivery',
      'Deployment',
      'Linting',
      'Unit testing'
    ]
  },
  {
    title: 'Serverless',
    alts: [
      'Lambda',
      'Cloud Functions'
    ]
  },
  {
    title: 'Container',
    alts: [
      'Docker'
    ]
  },
  {
    title: 'SQL',
    alts: [
      'Relational database',
      'RDBMS',
      'PostgreSQL',
      'MySQL',
      'SQL Server'
    ]
  },
  {
    title: 'NoSQL',
    alts: [
      'Document database',
      'DynamoDB',
      'MongoDB'
    ]
  },
  {
    title: 'Caching',
    alts: [
      'Cache',
      'Redis'
    ]
  },
  {
    title: 'Queueing',
    alts: [
      'Celery',
      'SQS'
    ]
  },
  {
    title: 'Cloud infrastructure',
    alts: [
      'CloudFormation',
      'Amazon Web Services',
      'AWS',
      'Google Cloud Platform',
      'GCP'
    ],
    strong: true
  },
  {
    title: 'Tag Manager',
    alts: [
      'Google Tag Manager',
      'GTM'
    ]
  },
  {
    title: 'Analytics',
    alts: [
      'Google Analytics',
      'GA',
      'Universal Analytics',
      'UA'
    ]
  },
  {
    title: 'Python',
    alts: [
      'Flask',
      'Bottle',
      'Django'
    ],
    strong: true
  },
  {
    title: 'JavaScript',
    alts: [
      'JS',
      'ECMAScript',
      'ES',
      'Node.js',
      'NodeJS',
      'Vue.js',
      'VueJS',
      'React.js',
      'ReactJS',
      'Preact',
      'jQuery'
    ],
    strong: true
  },
  {
    title: 'C#',
    alts: [
      'ASP.NET MVC/LINQ/Entity Framework'
    ]
  },
  {
    title: 'PHP',
    alts: [
      'SlimPHP',
      'PhalconPHP',
      'CodeIgniter'
    ]
  },
  {
    title: 'Stylesheets',
    alts: [
      'CSS',
      'SCSS',
      'Sass',
      'LESS',
      'Stylus',
      'Grid system',
      'Flexbox',
      'Responsive',
      'Bootstrap',
      'UI/UX'
    ]
  },
  {
    title: 'Mobile App',
    alts: [
      'React Native',
      'Ionic'
    ]
  }
];
