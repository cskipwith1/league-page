import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
        {
        icon: 'sports_football',
        label: 'League Website',
        dest: 'https://extraordinarilyfreshffl.com/',
    },
    {
        icon: 'sports',
        label: 'Matchups',
        dest: '/matchups',
    },
    {
        icon: 'swap_horiz',
        label: 'Trades & Waivers',
        dest: '/transactions',
    },
    {
        icon: 'article',
        label: 'Blog',
        dest: '/blog',
    },
    {
        icon: 'view_comfy',
        label: 'League Info',
        nest: true,
        children: [
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
            },
            {
                icon: 'groups',
                label: 'Keeper Values',
                dest: 'https://football.fantasysports.yahoo.com/f1/draftanalysis?type=salcap',
            },
            {
                icon: 'local_fire_department',
                label: 'Rivalry',
                dest: '/rivalry',
            },
            {
                icon: 'leaderboard',
                label: 'Standings',
                dest: '/standings',
            },
            {
                icon: 'view_comfy',
                label: 'Drafts',
                dest: '/drafts',
            },
            {
                icon: 'emoji_events',
                label: 'Trophy Room',
                dest: '/awards',
            },
            {
                icon: 'military_tech',
                label: 'Records',
                dest: '/records',
            },
        ]
    },
    {
        icon: 'lightbulb',
        label: 'Go to Sleeper',
        dest: `https://sleeper.app/leagues/${leagueID}`,
    },
];
