import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ExperienceItem from "../../src/components/Resume/components/ResumeComponents/components/ExperienceItem";
import { Experience } from "../../src/shared/interfaces";

describe('ExperienceItem Component', () => {
    it('should render correctly with experience data', async () => {
        const experience: Experience = {
            keywords: ['Software', 'Engineer'],
            label: 'Software Engineer at Tech Company',
            id: 1,
            projectsIds: [],
            skillIds: [],
            position: 'Software Engineer',
            company: 'Tech Company',
            startDate: new Date('2020-01-01'),
            endDate: new Date('2021-01-01'),
            imageSrc: '/tech-company.png',
            url: 'https://www.techcompany.com',
            description: 'Worked on various projects',
        }

        render(
            <MemoryRouter>
                <ExperienceItem exp={experience} keyIndex={0} />
            </MemoryRouter>
        )

        const titleElement = screen.getByTestId('experience-title');
        expect(titleElement).toBeTruthy();
        expect(titleElement.textContent).toBe('Software Engineer - Tech Company');
        const datesElement = screen.getByTestId('experience-dates');
        expect(datesElement).toBeTruthy();
        expect(datesElement.textContent).toBe('months.January 2020 - months.January 2021');
        const result = await screen.findByTestId('experience-image')
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/tech-company.png');
    })
    it('should render correctly with result matches', async () => {
        const experience: Experience = {
            keywords: ['Software', 'Engineer'],
            label: 'Software Engineer at Tech Company',
            id: 1,
            projectsIds: [],
            skillIds: [],
            position: 'Software Engineer',
            company: 'Tech Company',
            startDate: new Date('2020-01-01'),
            endDate: new Date('2021-01-01'),
            imageSrc: '/tech-company.png',
            url: 'https://www.techcompany.com',
            description: 'Worked on various projects',
        }

        render(
            <MemoryRouter>
                <ExperienceItem exp={experience} keyIndex={0} resultMatches={['Software', 'Engineer']} />
            </MemoryRouter>
        )

        expect(screen.queryByText('search.matchedKeywords')).toBeDefined();
        expect(screen.getByText('Software, Engineer')).toBeDefined();
    })
})