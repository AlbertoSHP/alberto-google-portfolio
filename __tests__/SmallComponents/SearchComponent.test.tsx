import { beforeEach, describe, expect, it, vi } from "vitest";
import { SuggestionItem } from "../../src/components/Search/GoogleSearchBar";
import { render, screen } from "@testing-library/react";
import * as useAppNavigate from "../../src/hooks/useAppNavigate";
import { Location } from "react-router-dom";
import SearchComponent from "../../src/components/Resume/components/ResumeComponents/components/SearchComponent";

describe('SearchComponent tests', () => {
    beforeEach(() => {
        // Mock the useBreakpoint hook to always return 'md' for consistent testing
        vi.spyOn(useAppNavigate, 'useAppNavigate').mockImplementation(() => ({
            getParamValue: vi.fn(),
            updateQueryParams: vi.fn(),
            isCVPage: false,
            isMainPage: false,
            setParamValue: vi.fn(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            location: vi.fn().mockImplementation(() => ({ pathname: '/', hash: '' , key: '', search: '', state: {} })) as unknown as Location<any>,
        }));
    });

    it('should render SearchComponent with no errors', () => {
        const suggestions: SuggestionItem[] = [
            { type: 'experiences', label: 'oneO', matches: ['Java', 'Software'], data: 'Experience Data' },
            { type: 'education', label: 'UC3M-degree2', matches: ['Bachelor', 'Computer Science'], data: 'Education Data' },
            { type: 'skills', label: 'JavaScript', matches: ['JavaScript', 'React'], data: 'Skill Data' },
            { type: 'projects', label: 'Otto', matches: ['Project A', 'Project B'], data: 'Project Data' },
        ];

        render(
            <SearchComponent label="experiences" data={suggestions} />
        )

        expect(screen.getByText('Search.resultType.experiences')).toBeDefined();
        
        const titleElement = screen.getByTestId('experience-title');
        expect(titleElement).toBeTruthy();
        expect(titleElement.textContent).toBe('Senior Frontend Developer - one.O Otto Group');
        const datesElement = screen.getByTestId('experience-dates');
        expect(datesElement).toBeTruthy();
        expect(datesElement.textContent).toBe('months.January 2020 - months.Current');
        const result = screen.getByTestId('experience-image')
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/companies/oneO.svg');

        const educationTitleElement = screen.getByTestId('education-title');
        expect(educationTitleElement).toBeTruthy();
        expect(educationTitleElement.textContent).toBe('Grado en Ingeniería Informática - Universidad Carlos III de Madrid');
        const educationDatesElement = screen.getByTestId('education-dates');
        expect(educationDatesElement).toBeTruthy();
        expect(educationDatesElement.textContent).toBe('months.January 2010 - months.December 2011');
        const educationResult = screen.getByTestId('education-image')
        expect(educationResult).toHaveProperty('src', 'http://localhost:3000/images/education/uc3m.png');

        const skillTitleElement = screen.getByTestId('skill-name');
        expect(skillTitleElement).toBeTruthy();
        expect(skillTitleElement.textContent).toBe('Javascript');
        const skillResult = screen.getByTestId('skill-image')
        expect(skillResult).toHaveProperty('src', 'http://localhost:3000/images/skills/JS.png');

        const projectTitleElement = screen.getByTestId('project-name');
        expect(projectTitleElement).toBeTruthy();
        expect(projectTitleElement.textContent).toBe('Otto Liveshopping Platform');
        const projectDescriptionElement = screen.getByTestId('project-description');
        expect(projectDescriptionElement).toBeTruthy();
        expect(projectDescriptionElement.textContent).toBe('Development of a live shopping platform using React, TypeScript, and Material-UI.');
        const projectResult = screen.getByTestId('project-image')
        expect(projectResult).toHaveProperty('src', 'http://localhost:3000/images/companies/oneO.svg');
    })
})