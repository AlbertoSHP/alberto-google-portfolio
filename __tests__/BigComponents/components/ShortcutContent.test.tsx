import { beforeEach, describe, expect, it, vi } from "vitest";
import * as useAppNavigate from "../../../src/hooks/useAppNavigate";
import { fireEvent, render, screen } from "@testing-library/react";
import { Location, MemoryRouter } from "react-router-dom";
import ShortcutContent from "../../../src/components/NavBar/Shortcut/ShortcutContent";

describe('ShortcutContent Component tests', () => {
    const updateQueryParamsMock = vi.fn();
    const closePopoverMock = vi.fn();

    beforeEach(() => {
        // Mock the useBreakpoint hook to always return 'md' for consistent testing
        vi.spyOn(useAppNavigate, 'useAppNavigate').mockImplementation(() => ({
            getParamValue: vi.fn(),
            updateQueryParams: updateQueryParamsMock,
            isCVPage: false,
            isMainPage: false,
            setParamValue: vi.fn(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            location: vi.fn().mockImplementation(() => ({ pathname: '/', hash: '' , key: '', search: '', state: {} })) as unknown as Location<any>,
        }));
    });

    it('should render ShortcutContent correctly', () => {
        render(
            <MemoryRouter>
                <ShortcutContent closePopover={closePopoverMock} />
            </MemoryRouter>
        )

        expect(screen.getByTestId('shortcut-content-box')).toBeTruthy();
        expect(screen.getByTestId('shortcut-all')).toBeTruthy();
        expect(screen.getByTestId('shortcut-experiences')).toBeTruthy();
        expect(screen.getByTestId('shortcut-education')).toBeTruthy();
        expect(screen.getByTestId('shortcut-skills')).toBeTruthy();
        expect(screen.getByTestId('shortcut-projects')).toBeTruthy();
    })

    it('should render ShortcutContent and redirect when an item is clicked', () => {
        render(
            <MemoryRouter>
                <ShortcutContent closePopover={closePopoverMock} />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByTestId('shortcut-item-shortcuts.cv'));
        expect(updateQueryParamsMock).toHaveBeenCalledWith({ tab: 'all' },{ path: '/cv', replace: true });
        expect(closePopoverMock).toHaveBeenCalled();

        fireEvent.click(screen.getByTestId('shortcut-item-shortcuts.experiences'));
        expect(updateQueryParamsMock).toHaveBeenCalledWith({ tab: 'experiences' },{ path: '/cv', replace: true });
        expect(closePopoverMock).toHaveBeenCalled();

        fireEvent.click(screen.getByTestId('shortcut-item-shortcuts.education'));
        expect(updateQueryParamsMock).toHaveBeenCalledWith({ tab: 'education' },{ path: '/cv', replace: true });
        expect(closePopoverMock).toHaveBeenCalled();
        
        fireEvent.click(screen.getByTestId('shortcut-item-shortcuts.skills'));
        expect(updateQueryParamsMock).toHaveBeenCalledWith({ tab: 'skills' },{ path: '/cv', replace: true });
        expect(closePopoverMock).toHaveBeenCalled();

        fireEvent.click(screen.getByTestId('shortcut-item-shortcuts.projects'));
        expect(updateQueryParamsMock).toHaveBeenCalledWith({ tab: 'projects' },{ path: '/cv', replace: true });
        expect(closePopoverMock).toHaveBeenCalled();

    })
})