import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ExperienceComponent from "../../src/components/Resume/components/ResumeComponents/ExperienceComponent";

describe('Experience Component', () => {
    it('should render ExperienceComponent correctly', () => {
        render(
            <MemoryRouter>
                <ExperienceComponent />
            </MemoryRouter>
        )

        
        const titleElements = screen.getAllByTestId('experience-title');
        expect(titleElements).toHaveLength(7);
        expect(titleElements[0].textContent).toBe('Senior Frontend Developer - one.O Otto Group');
        expect(titleElements[1].textContent).toBe('Senior Software Engineer - Accelya Group');
        expect(titleElements[2].textContent).toBe('Java Analyst Developer - Alten Spain');
        expect(titleElements[3].textContent).toBe('JAVA/JavaScript Analyst Developer - CAS Training');
        expect(titleElements[4].textContent).toBe('System Engineer - Isdefe');
        expect(titleElements[5].textContent).toBe('Sharepoint Developer - BBVA');
        expect(titleElements[6].textContent).toBe('Internship - BBVA - Innovation Center');
    })

    it('should render ExperienceComponent and show the floating component when an experience is clicked', () => {
        render(
            <MemoryRouter>
                <ExperienceComponent />
            </MemoryRouter>
        )

        const experienceElements = screen.getAllByTestId('experience-title');
        fireEvent.click(experienceElements[0]);

        const floatingComponent = screen.getByTestId('experience-floating-component');
        expect(floatingComponent).toBeTruthy();
        expect(floatingComponent.textContent).toContain('Senior Frontend Developer - one.O Otto Group');
    })
})