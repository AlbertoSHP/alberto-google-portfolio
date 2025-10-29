import { describe, expect, it } from "vitest";
import ProjectItem from "../../src/components/Resume/components/ResumeComponents/components/ProjectItem";
import { Project } from "../../src/shared/interfaces";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('ProjectItem Component', () => {
    it('should render correctly with project data', async () => {
        const project: Project = {
            id: 1,
            name: 'Project 1',
            description: 'Description for Project 1',
            imageSrc: '/project1.png',
            label: 'Project 1',
            companyId: 1,
            keywords: ['React', 'TypeScript'],
            url: 'https://www.project1.com'
        }
        render(
            <MemoryRouter>
                <ProjectItem project={project} index={0} />
            </MemoryRouter>
        )

        const titleElement = screen.getByTestId('project-name');
        expect(titleElement).toBeTruthy();
        expect(titleElement.textContent).toBe('Project 1');
        const descriptionElement = screen.getByTestId('project-description');
        expect(descriptionElement).toBeTruthy();
        expect(descriptionElement.textContent).toBe('Description for Project 1');
        const result = await screen.findByTestId('project-image');
        expect(result).toHaveProperty('src', 'http://localhost:3000/images/project1.png');
    })

    it('should render correctly with result matches', async () => {
        const project: Project = {
            id: 1,
            name: 'Project 1',
            description: 'Description for Project 1',
            imageSrc: '/project1.png',
            label: 'Project 1',
            companyId: 1,
            keywords: ['React', 'TypeScript'],
            url: 'https://www.project1.com'
        }

        render(
            <MemoryRouter>
                <ProjectItem project={project} index={0} resultMatches={['React', 'TypeScript']} />
            </MemoryRouter>
        )

        expect(screen.queryByText('search.matchedKeywords')).toBeDefined();
        expect(screen.getByText('React, TypeScript')).toBeDefined();
    })
})