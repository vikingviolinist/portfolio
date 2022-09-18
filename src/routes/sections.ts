import type { Section } from '../interfaces/Section';

export const sections: Section[] = [
	{ route: '/', icon: 'home', tooltip: 'Hjem' },
	{ route: '/work', icon: 'briefcase', tooltip: 'Jobb' },
	{ route: '/education', icon: 'user-graduate', tooltip: 'Utdanning' },
	{ route: '/technologies', icon: 'wrench', tooltip: 'Teknologier' },
	{ route: '/projects', icon: 'laptop', tooltip: 'Prosjekter' },
	{ route: '/contact', icon: 'envelope', tooltip: 'Kontakt' }
];
