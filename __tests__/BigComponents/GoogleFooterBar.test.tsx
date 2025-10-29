import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import GoogleFooterBar from "../../src/components/GoogleMainContainers/GoogleFooterBar";

let languageMock = 'en-US';

vi.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      t: (i18nKey: any) => i18nKey,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
        language: languageMock ?? 'en-US',
      },
    };
  },
}));

describe('GoogleFooterBar Component tests', () => {
    it('should render GoogleFooterBar correctly', () => {
        render(
            <GoogleFooterBar />
        )

        const footerElement = screen.getByTestId('footer-language-detected');
        expect(footerElement).toBeTruthy();
        expect(footerElement.textContent).toContain('language.languageDetected');
        expect(footerElement.textContent).toContain('language.english');
    })

    it('should render GoogleFooterBar correctly in Spanish', () => {
        languageMock = 'es-ES';
        render(
            <GoogleFooterBar />
        )

        const footerElement = screen.getByTestId('footer-language-detected');
        expect(footerElement).toBeTruthy();
        expect(footerElement.textContent).toContain('language.languageDetected');
        expect(footerElement.textContent).toContain('language.spanish');
    })

    it('should render GoogleFooterBar correctly in German', () => {
        languageMock = 'de-DE';
        render(
            <GoogleFooterBar />
        )

        const footerElement = screen.getByTestId('footer-language-detected');
        expect(footerElement).toBeTruthy();
        expect(footerElement.textContent).toContain('language.languageDetected');
        expect(footerElement.textContent).toContain('language.german');
    })

    it('should render GoogleFooterBar correctly in French', () => {
        languageMock = 'fr-FR';
        render(
            <GoogleFooterBar />
        )

        const footerElement = screen.getByTestId('footer-language-detected');
        expect(footerElement).toBeTruthy();
        expect(footerElement.textContent).toContain('language.languageDetected');
        expect(footerElement.textContent).toContain('language.french');
    })

    it('should render GoogleFooterBar correctly and show about modal when clicking on the button', () => {
        render(
            <GoogleFooterBar />
        )

        fireEvent.click(screen.getByTestId('footer-about-me-button'));
        expect(screen.getByText('about.welcome')).toBeTruthy();
    })
})