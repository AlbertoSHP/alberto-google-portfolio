import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import EducationComponent from "../../src/components/Resume/components/ResumeComponents/EducationComponent";

describe('EducationComponent tests', () => {
    it('should render EducationComponent correctly', () => {
        render(
            <MemoryRouter>
                <EducationComponent />
            </MemoryRouter>
        );


        const titleElements = screen.getAllByTestId('education-title');
        expect(titleElements).toHaveLength(6);
        expect(titleElements[0].textContent).toBe('Ingeniería Técnica en Informática de Gestión - Universidad Carlos III de Madrid');
        expect(titleElements[1].textContent).toBe('Grado en Ingeniería Informática - Universidad Carlos III de Madrid');
        expect(titleElements[2].textContent).toBe(`Advanced J2EE Development Master: Ajax, Spring-Hibernate, Ibatis, JSF's, Struts 2 and Agile Methodologies - Grupo Atrium`);
        expect(titleElements[3].textContent).toBe('React: from zero to expert - Udemy');
        expect(titleElements[4].textContent).toBe('React PRO: advanced React course - Udemy');
        expect(titleElements[5].textContent).toBe('SOLID principles and Clean Code - Udemy');
    })
})