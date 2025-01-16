// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'PolyDocs',
	  favicon: '/PolyDocs.ico',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
		{
		label: 'Home',
		items: [
		{ 
			label: 'Overview',
			slug: 'home/overview'
		},
		{
			label: 'Books',
			slug: 'home/books'
		}
		]
		},
		{
			label: 'App Frameworks',
			collapsed: true,
			items: [
			  {
				label: 'Electron',
				badge: { text: 'WIP', variant: 'caution' },
				collapsed: true,
				autogenerate: { directory: 'App-Frameworks/Electron' },
			  },
			  {
				label: 'Flutter',
				badge: { text: 'WIP', variant: 'caution' },
				collapsed: true,
				autogenerate: { directory: 'App-Frameworks/Flutter' },
			  },
			  {
				label: 'Qt 6',
				collapsed: true,
				badge: { text: 'WIP', variant: 'caution' },
				autogenerate: { directory: 'App-Frameworks/Qt6' },
			  },
			  {
				label: 'JavaFX',
				badge: { text: 'WIP', variant: 'caution' },
				collapsed: true,
				autogenerate: { directory: 'App-Frameworks/JavaFX' },
			  },
			  {
				label: 'Tkinter',
				badge: { text: 'WIP', variant: 'caution' },
				collapsed: true,
				autogenerate: { directory: 'App-Frameworks/Tkinter' },
			  },
			  {
				label: 'GTK',
				badge: { text: 'WIP', variant: 'caution' },
				collapsed: true,
				autogenerate: { directory: 'App-Frameworks/Gtk' },
			  },
			],
		  },
		{
			label: 'Build Systems',
			badge: { text: 'WIP', variant: 'caution' },
			autogenerate: { directory: 'Build Systems'}
		},
		{
			label:'Cyber Security Tools',
			badge: { text: 'WIP', variant: 'caution' },
			autogenerate: { directory: 'Cyber Security'}
		},
        {
		label: 'Programming Languages',
		collapsed: true,
		items: [
			{
			label: 'HTML',
			collapsed: true,
			autogenerate: { directory: 'High-Level/HTML' },
			},
			{
			label: 'CSS',
			collapsed: true,
			autogenerate: { directory: 'High-Level/CSS' },
			},
			{
			label: 'JavaScript',
			collapsed: true,
			autogenerate: { directory: 'High-Level/JavaScript' },
			},
			{
			label: 'C#',
			collapsed: true,
			autogenerate: { directory: 'High-Level/CSharp' },
			},
			{
			label: 'Dart',
			collapsed: true,
			autogenerate: {directory: 'High-Level/Dart'},
			badge: { text: 'WIP', variant: 'caution' }
			},
			{
			label: 'Java',
			collapsed: true,
			autogenerate: { directory: 'High-Level/Java' },
			},
			{
			label: 'PHP',
			collapsed: true,
			autogenerate: { directory: 'High-Level/PHP' },
			},
			{
			label: 'Python',
			collapsed: true,
			autogenerate: { directory: 'High-Level/Python' },
			},
			{
			label: 'R',
			collapsed: true,
			autogenerate: { directory: 'High-Level/R' },
			},
			{
			label: 'SQL',
			collapsed: true,
			autogenerate: { directory: 'High-Level/SQL' },
			},
			{
			label: 'TypeScript',
			collapsed: true,
			autogenerate: { directory: 'High-Level/TypeScript' },
			},
			{
				label: 'C',
				collapsed: true,
				autogenerate: { directory: 'Low-Level/C' },
				},
				{
				label: 'C++',
				collapsed: true,
				autogenerate: { directory: 'Low-Level/CPP' },
				},
				{
				label: 'NASM',
				collapsed: true,
				autogenerate: { directory: 'Low-Level/NASM' },
				},
				{
				label: 'Rust',
				collapsed: true,
				autogenerate: { directory: 'Low-Level/Rust' },
				}
		],
		},
		{
			label: 'Frontend Frameworks',
			badge: { text: 'WIP', variant: 'tip' },
			collapsed: true,
			autogenerate: { directory: 'Frontend Frameworks' }
		},
		{
			label: "Server Side",
			badge: { text: 'WIP', variant: 'tip' },
			collapsed: true,
			autogenerate: {directory: "Server Side"}
		}
      ],
    }),
  ],
});
