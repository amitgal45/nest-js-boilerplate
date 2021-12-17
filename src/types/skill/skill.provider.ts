import { Skill } from './skill.model';

export const skillsProviders = [
  {
    provide: 'SKILLS_REPOSITORY',
    useValue: Skill,
  },
];