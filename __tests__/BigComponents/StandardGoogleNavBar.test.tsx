import { beforeEach, describe, expect, it, vi } from "vitest";
import * as useAppNavigate from "../../src/hooks/useAppNavigate";
import * as useScroll from "../../src/hooks/useScroll";
import { fireEvent, render, screen } from "@testing-library/react";
import { Location, MemoryRouter } from "react-router-dom";
import StandardGoogleNavBar from "../../src/components/NavBar/StandardGoogleNavBar";

vi.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      t: (i18nKey: any) => i18nKey,
      i18n: {
        language: 'en-US',
      },
    };
  },
}));

describe('StandardGoogleNavBar tests', () => {
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
        
        vi.spyOn(useScroll, 'useScroll').mockImplementation(() => ({ isNavbarLimitReached: false }));
    });

    it('should render StandardGoogleNavBar correctly', () => {
        render(
            <MemoryRouter>
                <StandardGoogleNavBar />
            </MemoryRouter>
        )

        expect(screen.getByTestId('standard-google-navbar')).toBeTruthy();
    })
    
    it('should render StandardGoogleNavBar and show shortcut modal when clicking', () => {
        render(
            <MemoryRouter>
                <StandardGoogleNavBar />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByTestId('standard-google-navbar-shortcut-button'));
        expect(screen.getByTestId('shortcut-content-box')).toBeTruthy();
    })
    
    it('should render StandardGoogleNavBar and show profile content modal when clicking', () => {
        render(
            <MemoryRouter>
                <StandardGoogleNavBar />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByTestId('standard-google-navbar-profile-button'));
        expect(screen.getByTestId('profile-content-box')).toBeTruthy();
    })
})