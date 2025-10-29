import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ProjectsComponent from "../../src/components/Resume/components/ResumeComponents/ProjectsComponent";

describe('Project Component', () => {
    it('should render ProjectComponent correctly', () => {
        render(
            <MemoryRouter>
                <ProjectsComponent />
            </MemoryRouter>
        )


        const titleElements = screen.getAllByTestId('project-name');
        expect(titleElements).toHaveLength(10);
        expect(titleElements[0].textContent).toBe("Hermes Digital Transformation projects");
        expect(titleElements[1].textContent).toBe("Otto Liveshopping Platform");
        expect(titleElements[2].textContent).toBe("Developing solutions for E-commerce logistics");
        expect(titleElements[3].textContent).toBe("Airline Industry Platform");
        expect(titleElements[4].textContent).toBe("Digital transformation for Industry sector company DIA");
        expect(titleElements[5].textContent).toBe("USP Project and Space Observation");
        expect(titleElements[6].textContent).toBe("Instituto Geográfico Nacional");
        expect(titleElements[7].textContent).toBe("Human Resources Management System");
        expect(titleElements[8].textContent).toBe("Economic capital calculator");
        expect(titleElements[9].textContent).toBe("Monitoring the proper functioning of ATMs ABIL new generation");
    })
})