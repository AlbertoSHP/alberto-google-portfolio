import { beforeEach, describe, expect, it, vi } from "vitest";
import { Experience } from "../../src/shared/interfaces";
import * as useBreakpoint from "../../src/hooks/useBreakpoint";
import * as useScroll from "../../src/hooks/useScroll";
import { render, screen } from "@testing-library/react";
import ExperienceFloatingComponent from "../../src/components/Resume/components/ResumeComponents/components/ExperienceFloatingComponent";

describe('Experience Floating Component', () => {

    beforeEach(() => {
        // Mock the useBreakpoint hook to always return 'md' for consistent testing
        vi.spyOn(useBreakpoint, 'useBreakpoint').mockImplementation(() => ({
            isMobile: false,
            isTablet: false,
            isMdUp: true,
            isLgUp: true,
            isXlUp: true,
            isDesktop: true,
            isLargeMobile: false,
            isSmallMobile: false,
        }));
        vi.spyOn(useScroll, 'useScroll').mockImplementation(() => ({ isNavbarLimitReached: false }));
    });

    it('should render experience in the floating component', () => {
        const experience: Experience = {
            keywords: ['Software', 'Engineer'],
            label: 'Software Engineer at Tech Company',
            id: 1,
            projectsIds: [1],
            skillIds: [1],
            position: 'Software Engineer',
            company: 'Tech Company',
            startDate: new Date('2020-01-01'),
            endDate: new Date('2021-01-01'),
            imageSrc: '/tech-company.png',
            url: 'https://www.techcompany.com',
            description: 'Worked on various projects',
        };

        render(
            <ExperienceFloatingComponent setChecked={() => {}} expSelected={experience} />
        );

        expect(screen.getByTestId('floating-experience-image')).toBeDefined();
        expect(screen.getByTestId('floating-experience-company').textContent).toBe('Tech Company');
        expect(screen.getByTestId('floating-experience-url').textContent).toBe('https://www.techcompany.com');
        expect(screen.getByTestId('floating-experience-position').textContent).toBe('Software Engineer - Tech Company');
        expect(screen.getByTestId('floating-experience-dates').textContent).toBe('January 2020 - January 2021');
        expect(screen.getByTestId('floating-experience-description').textContent).toBe('Worked on various projects');
    });
})