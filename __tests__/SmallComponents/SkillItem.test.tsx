import { describe, expect, test } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SkillItem from '../../src/components/Resume/components/ResumeComponents/components/SkillItem';
import { Skill } from '../../src/shared/interfaces';

describe('SkillItem Component', () => {
    test('should render correctly with beginner level', async () => {
        const skill: Skill = {
            id: 1,
            name: 'JavaScript',
            type: 'frontend',
            level: 'beginner',
            imageSrc: '/javascript.png',
            keywords: ['js', 'es6', 'typescript'],
            label: 'JavaScript Skill'
        }

        render(
            <MemoryRouter>
                <SkillItem skill={skill}/>
            </MemoryRouter>
        )

        expect(screen.getByText('JavaScript')).toBeDefined();
        expect(screen.getByText('frontend')).toBeDefined();
        const result = await screen.findByTestId('skill-image')
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/javascript.png');
        const levels = await screen.findAllByTestId(/level-\d+/);
        expect(levels.length).toBe(1);
        expect(screen.queryByText('search.matchedKeywords')).toBeNull();
    })

    test('should render correctly with advanced level', async () => {
        const skill: Skill = {
            id: 1,
            name: 'JavaScript',
            type: 'frontend',
            level: 'advanced',
            imageSrc: '/javascript.png',
            keywords: ['js', 'es6', 'typescript'],
            label: 'JavaScript Skill'
        }

        render(
            <MemoryRouter>
                <SkillItem skill={skill}/>
            </MemoryRouter>
        )

        expect(screen.getByText('JavaScript')).toBeDefined();
        expect(screen.getByText('frontend')).toBeDefined();
        const result = await screen.findByTestId('skill-image')
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/javascript.png');
        const levels = await screen.findAllByTestId(/level-\d+/);
        expect(levels.length).toBe(3);
        expect(screen.queryByText('search.matchedKeywords')).toBeNull();
    })

    test('should render correctly with intermediate level', async () => {
        const skill: Skill = {
            id: 1,
            name: 'JavaScript',
            type: 'frontend',
            level: 'intermediate',
            imageSrc: '/javascript.png',
            keywords: ['js', 'es6', 'typescript'],
            label: 'JavaScript Skill'
        }

        render(
            <MemoryRouter>
                <SkillItem skill={skill}/>
            </MemoryRouter>
        )

        expect(screen.getByText('JavaScript')).toBeDefined();
        expect(screen.getByText('frontend')).toBeDefined();
        const result = await screen.findByTestId('skill-image')
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/javascript.png');
        const levels = await screen.findAllByTestId(/level-\d+/);
        expect(levels.length).toBe(2);
        expect(screen.queryByText('search.matchedKeywords')).toBeNull();
    })

    test('should render correctly with expert level', async () => {
        const skill: Skill = {
            id: 1,
            name: 'JavaScript',
            type: 'frontend',
            level: 'expert',
            imageSrc: '/javascript.png',
            keywords: ['js', 'es6', 'typescript'],
            label: 'JavaScript Skill'
        }

        render(
            <MemoryRouter>
                <SkillItem skill={skill}/>
            </MemoryRouter>
        )

        expect(screen.getByText('JavaScript')).toBeDefined();
        expect(screen.getByText('frontend')).toBeDefined();
        const result = await screen.findByTestId('skill-image')
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/javascript.png');
        const levels = await screen.findAllByTestId(/level-\d+/);
        expect(levels.length).toBe(4);
        expect(screen.queryByText('search.matchedKeywords')).toBeNull();
    })

    test('should render correctly with result matches', async () => {
        const skill: Skill = {
            id: 1,
            name: 'JavaScript',
            type: 'frontend',
            level: 'expert',
            imageSrc: '/javascript.png',
            keywords: ['js', 'es6', 'typescript'],
            label: 'JavaScript Skill'
        }

        render(
            <MemoryRouter>
                <SkillItem skill={skill} resultMatches={['JavaScript', 'frontend']} />
            </MemoryRouter>
        )

        expect(screen.queryByText('search.matchedKeywords')).toBeDefined();
        expect(screen.getByText('JavaScript, frontend')).toBeDefined();
    })
})