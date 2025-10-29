import { describe, expect, test } from "vitest";
import { Education } from "../../src/shared/interfaces";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EducationItem from "../../src/components/Resume/components/ResumeComponents/components/EducationItem";

describe('EducationItem Component', () => {
    test('should render correctly with education data', async () => {
        const education: Education = {
            keywords: ['Computer Science', 'University'],
            label: 'Bachelor of Science in Computer Science',
            title: 'Bachelor of Science in Computer Science',
            institution: 'University of Example',
            startDate: new Date('2015-09-01'),
            endDate: new Date('2019-06-30'),
            imageSrc: '/education/university.png',
            url: 'https://www.example.com',
            type: 'degree',
        }

        render(
            <MemoryRouter>
                <EducationItem edu={education} index={0} />
            </MemoryRouter>
        )

        screen.debug();
        const titleElement = screen.getByTestId('education-title');
        expect(titleElement).toBeTruthy();
        expect(titleElement.textContent).toBe('Bachelor of Science in Computer Science - University of Example');
        const datesElement = screen.getByTestId('education-dates');
        expect(datesElement).toBeTruthy();
        expect(datesElement.textContent).toBe('months.September 2015 - months.June 2019');
        const result = await screen.findByTestId('education-image')
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/education/university.png');
    })

    test('should render correctly with result matches', async () => {
        const education: Education = {
            keywords: ['Computer Science', 'University'],
            label: 'Bachelor of Science in Computer Science',
            title: 'Bachelor of Science in Computer Science',
            institution: 'University of Example',
            startDate: new Date('2015-09-01'),
            endDate: new Date('2019-06-30'),
            imageSrc: '/education/university.png',
            url: 'https://www.example.com',
            type: 'degree'
        }

        render(
            <MemoryRouter>
                <EducationItem edu={education} index={0} resultMatches={['Computer Science', 'University of Example']} />
            </MemoryRouter>
        )

        expect(screen.queryByText('search.matchedKeywords')).toBeDefined();
        expect(screen.getByText('Computer Science, University of Example')).toBeDefined();
    })
})