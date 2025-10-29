import { beforeEach, describe, expect, it, vi } from "vitest";
import * as useBreakpoint from "../../src/hooks/useBreakpoint";
import { render, screen } from "@testing-library/react";
import GoogleNavBar from "../../src/components/NavBar/GoogleNavBar";
import { MemoryRouter } from "react-router-dom";

describe('GoogleNavBar tests', () => {
    let isSmallMobileMock: boolean = false;

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
            isSmallMobile: isSmallMobileMock,
        }));
    });

    it('should render GoogleNavBar correctly in desktop view', () => {
        render(
            <MemoryRouter>
                <GoogleNavBar />
            </MemoryRouter>
        )

        expect(screen.getByTestId('standard-google-navbar')).toBeTruthy();
    })

    it('should render GoogleNavBar correctly in mobile view', () => {
        isSmallMobileMock = true;
        render(
            <MemoryRouter>
                <GoogleNavBar />
            </MemoryRouter>
        )

        expect(screen.getByTestId('mobile-google-navbar')).toBeTruthy();
    })
})