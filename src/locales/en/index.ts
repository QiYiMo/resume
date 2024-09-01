export default {
    download: 'Download PDF',
    anchor: {
        a1: 'Education',
        a2: 'Professional',
        a3: 'Experience',
        a4: 'Project',
    },
    avatar: {
        p1: 'Explore the infinite possibilities of programming ...',
        p2: 'Scaling the heights of programming prowess, ...',
    },
    baseinfo: {
        title: 'Basic information',
        r1: 'Name',
        r1v: 'DuanFei',
        r2: 'Education',
        r2v: 'Digital Media Technology',
        r3: 'Experience',
        r3v: '1 years',
        r4: 'location',
        r4v: 'Haidian District, Beijing',
        r5: 'Job intention',
        r5v: 'Front-end engineer',
    },
    contact: {
        title: 'Contact',
        r1: 'Telphone',
        r2: 'Email',
    },
    hobbies: 'Hobbies',
    education: {
        title: 'Education',
        r1: 'Shanxi Media College / Digital Media Technology',
        r1v: '2020.09——2022.06',
        verify: 'Verifify ChSi',
        alt: 'Online code',
        p1: '1. Inspection of verification report -> ',
        p2: '2. Use App to scan the QR code',
        check: 'View screenshot',
        updated: '(Updated on March 24, 2024)'
    },
    skill: {
        title: 'Professional skills',

        p1: 'Proficient in HTML, CSS, JS, <b>ES6</b>, and <b>TS</b> syntax, with a solid understanding of related <b>HTTP</b> knowledge and information;',

        p2: 'Familiar with the <b>Vue</b> ecosystem, including ElementUI, iView, and NaiveUI, as well as familiar with new features in <b>Vue3</b> and the <b>Composition API</b>;',

        p3: 'Skilled in using <b>vite</b>, <b>uni-app</b>, <b>vue-cli</b>, and <b>create-react-app</b> scaffolding tools, and experienced in enhancing project usability by adding plugins on top of these frameworks;',

        p4: `Experienced in <b>Responsive Design</b>, and adept at utilizing responsive layouts to develop mobile applications and mini-program projects;`,

        p5: 'Familiar with <b>Node.js</b> and capable of performing basic server-side development tasks using <b>Node.js</b>.',
    },
    work: 'Work Experience',
    responsibilities: 'Job content and responsibilities',
    wskp: {
        name: 'Letv Technology (Beijing) Co., Ltd.',
        time: 'March 2023 - present',
        d1: 'Responsible for the front-end development of project mini-programs, backends, and official websites, completing product and customer needs and functions;',
        d2: 'Organize product requirement documents and write front-end development documents;',
        d3: 'Cooperate with designers to carry out front-end development and complete product and customer needs and functions;',
        d4: 'At the same time, participate in the development of project back-end ports;',
        d5: 'Complete the development, self-testing, and Code Review of project-related requirements, and promptly feedback test-related issues;'
    },
    stack: 'Technology',
    contributions: 'Contributions',
    hard: 'Difficulties',
    proAdmin: {
        name: 'Ledong Tianxia Backend Management System',
        description:
            `Comprehensive management system that supports the company's intelligent fitness equipment, providing smart fitness services and enabling subsequent business expansion. By generating corresponding host activation codes and displaying relevant information, I am the sole frontend lead, responsible for enabling users to manage their devices, while also taking on part-time backend interface work.`,

        c1: 'Led the <b>frontend architecture</b> for this project, including enhancements to foundational modules and utilities.',

        c2: 'Implemented backend login and login state validation using tokens, and devised a custom localStorage method to automatically delete expired tokens.',

        c3: 'Employed Echarts and scale attributes to achieve adaptive data dashboards, ensuring all charts display correctly across various screen ratios.',

        c4: 'Wrapped up API requests and business components, significantly <b>boosting development efficiency</b>.',

        c5: 'Utilized dynamic routing to dynamically display which modules are visible to each user, along with creating custom permission directives.',

        c6: 'Customized page functionality and implemented import/export capabilities with Excel (custom question bank).',

        c7: 'Managed the <b>private deployment</b> solution for this B2B project and oversaw related performance optimizations.'
    },
    proWeixin: {
        name: 'LeSports World WeChat Mini Program',
        description:
            'As a functional tool serving as the client interface for the company, the mini program mainly focuses on presenting user information and realizing related functionalities, while binding with the client-side information.',

        c1: `Standardized obtaining <b>user authorization information</b>, leveraging the latest methods provided by WeChat to fetch the user's profile picture and nickname.`,

        c2: '<b>Optimized the WeChat payment process</b>, resolving the issue where the subsequent workflow could not proceed until the payment was explicitly confirmed.',

        c3: 'Enabled <b>direct uploading of frontend images to Tencent Cloud</b> through the use of Tencent Cloud cos-js-sdk-v5, facilitating storage and retrieval.',

        c4: 'Implemented <b>split package loading</b> within the project, optimizing the project size to enhance user experience by speeding up loading times.',

        c5: `<b>Enhanced the scanning experience within the mini program</b>, fixing the problem where scanning via WeChat would fail if the mini program process wasn't closed beforehand.`,

        c6: 'Mounted <b>APIs onto Vue</b> to streamline usage and improve developer convenience within the project.'
    },
    proWeixinAdmin: {
        name: 'LeSports Assistant WeChat Mini Program',
        description:
            'A mini program specifically designed for merchants, powered by the LeSports backend management system. It provides several visual charts to help store managers better understand usage information and manage store-related information, ultimately facilitating easy store management.',

        d1: '<b>Implemented persistent login using tokens</b>',

        d2: 'Addressed the issue of slow loading due to a large number of orders by implementing pull-down loading',

        d3: 'Generated equipment QR codes directly in the mini program using equipment IDs',

        d4: `In the store selection feature, displayed the store list in sequence based on the user's latitude and longitude, from nearest to farthest.`,
    },
    team: {
        name: 'Prison Exercise Management Backend System',
        wskpuiDesc: 'This project is a dedicated fitness management backend system tailored for prison administrators, specifically designed to manage the exercise records of individual inmates and the usage status of their corresponding fitness wristbands.',

        d1: '<b>Implemented persistent login using tokens</b>',

        d2: 'Supports data entry and export in spreadsheet formats such as csv, xlsx, and xls',

        d3: 'Converted static pages into loading states, optimizing initial screen loading',

        d4: 'Implemented page caching and clearing using keep-alive and vuex',

        d5: 'Mounted axios requests onto vue, streamlining and expediting API calls.',
    },
    thanks: {
        title: 'Acknowledgments',
        p1: 'Thank you for taking the time to read my resume. I am Duàn Fēi, and I hope you enjoy my portfolio. I am a front-end engineer who enjoys sports, anime, and music.',
        p2: 'I look forward to the opportunity to join your team! Once again, thank you for your attention and trust!'
    },
}
