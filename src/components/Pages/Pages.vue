<template>
    <div>
        <welcome />
        <divider from="center" to="left" />
        <about-me
            :educations="educations"
            :work-experience="workExperience"
            :languages="languages"
            :frameworks="frameworks"
        />
        <divider from="left" to="right" />
        <projects />
        <divider from="right" to="center" />
        <contact />
    </div>
</template>

<script>
import Divider from './Divider';
import Welcome from './Welcome/Welcome';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default {
    name: 'pages',
    components: { Divider, Welcome, AboutMe, Projects, Contact },
    data: function() {
        return {
            educations: [
                {
                    name: 'Hogeschool Utrecht',
                    description: 'HBO-ICT Software & Information Engineering',
                    city: 'Utrecht',
                    from: 2016,
                    to: 2019
                },
                {
                    name: 'ROC A12',
                    description: 'MBO Niveau 4 Applicatieontwikkelaar',
                    city: 'Ede',
                    from: 2013,
                    to: 2016
                }
            ],
            workExperience: [
                {
                    name: 'Het Klokhuis (NTR)',
                    city: 'Hilversum',
                    from: 2019,
                    to: 2019,
                    duties: ['Freelance ZZP Ontwikkelaar'],
                    activities: ['Gamestudio']
                },
                {
                    name: 'Minox',
                    city: 'Veenendaal',
                    from: 2018,
                    to: 2019,
                    activities: [
                        'Stageopdracht gemaakt waarbij het mogelijk is om bestaande grootboekrekeningen te koppelen aan RGS (Referentie Grootboek Schema) codes. Het probleem hiervoor was dat grootboekrekeningen nooit een standaard hadden en dus niet met elkaar gedeeld konden worden, ook was het niet mogelijk om deze grootboekrekeningen te gebruiken voor een standaard dashboard. RGS lost deze problemen op. Voor deze opdracht heb ik twee sterren ontvangen op mijn diploma. Deze opdracht is gemaakt met een Node.JS back-end en als front-end React.JS. Verder heb ik hierbij testen moeten schrijven in Selenium (UX) en Jest (Unit). Door deze opdracht heeft Minox als eerste een RGS-ready certificaat ontvangen (https://www.hu.nl/student-hu-helpt-bedrijf-tijdens-stage-aan-belangrijke-certificering).',
                        'Nieuw login systeem gemaakt met een Load balancer zodat het mogelijk was om meerdere servers te hebben.',
                        'Vervolg op de RGS opdracht waarbij ik ook een toepassing heb gemaakt voor deze opdracht. Dit was het RGS-analyzer dashboard waarbij een accountant makkelijk inzicht kan krijgen over een administratie. Dit overzicht is vervolgens te delen omdat alles is opgebouwd op basis van RGS codes (Denk aan excel formules).'
                    ],
                    duties: ['Stagiar', 'Software Ontwikkelaar'],
                    techniques: ['Node.JS', 'React.JS', 'Javascript ES6']
                },
                {
                    name: 'Astecom Business Software',
                    city: 'Buren',
                    from: 2016,
                    to: 2018,
                    duties: ['Stagiar', 'Software Ontwikkelaar'],
                    activities: [
                        'Gewerkt met een onbekende taal PxPlus tijdens mijn stage en bijbaan. Hierdoor veel ervaring opgedaan hoe ik zelfstandig problemen kon oplossen, zonder de hulp van google/stackoverflow.',
                        'Laatste jaar vooral veel gedaan met Laravel en React.JS voor verschillende web apps. Onder andere een Webshop, Agenda app en een Dashboard voor een douane bedrijf.'
                    ],
                    techniques: ['PxPlus', 'Laravel', 'PHP']
                },
                {
                    name: 'TWS Media',
                    city: 'Veenendaal',
                    from: 2015,
                    to: 2015,
                    duties: ['Stagiar'],
                    activities: ['Eerste stage als software ontwikkelaar, vooral veel basis ervaring van dit vak. Vooral gewerkt met een PHP framework (Drupal) met JQuery/HTML5 en CSS3.'],
                    techniques: ['HTML', 'CSS', 'Javascript', 'PHP', 'Drupal', 'Symfony', 'JQuery']
                }
            ],
            languages: [
                { img: 'languages/javascript_512.png', name: 'Javascript (ES6)' },
                { img: 'languages/html_512.png', name: 'HTML5' },
                { img: 'languages/css_512.png', name: 'CSS3' },
                { img: 'languages/sass_512.png', name: 'SASS' },
                { img: 'languages/java_512.png', name: 'Java' },
                { img: 'languages/json_512.png', name: 'JSON' },
                { img: 'languages/node_512.png', name: 'NODE.JS' },
                { img: 'languages/php_512.png', name: 'PHP' },
                { img: 'languages/ruby_512.png', name: 'Ruby' },
                { img: 'languages/csharp_net_512.png', name: 'C# .Net' }
            ],
            frameworks: [
                { img: 'frameworks/react_512.png', name: 'React.JS' },
                { img: 'frameworks/vue_512.png', name: 'Vue.JS' },
                { img: 'frameworks/docker_512.png', name: 'Docker' },
                { img: 'frameworks/express_512.png', name: 'Express JS' },
                { img: 'frameworks/laravel_512.png', name: 'Laravel' },
                { img: 'frameworks/spring_512.png', name: 'Spring Framework' },
                { img: 'frameworks/xamarin_512.png', name: 'Xamarin' },
                { img: 'frameworks/bootstrap_512.png', name: 'Bootstrap' },
                { img: 'frameworks/bulma_512.png', name: 'Bulma' },
                { img: 'frameworks/ruby_on_rails_512.png', name: 'Ruby on Rails' }
            ]
        };
    }
};
</script>