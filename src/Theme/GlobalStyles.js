import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.themeDark};
    color: ${({ theme }) => theme.text};
    --theme-color-light: ${({ theme }) => theme.themeLight};
    --theme-color-dark: ${({ theme }) => theme.themeDark};
    --theme-card-bg: ${({ theme }) => theme.cardBackground};
    --border-color-light: ${({ theme }) => theme.borderColorLight};
    --repo-color: ${({ theme }) => theme.repoColor};
    --repo-color-hover: ${({ theme }) => theme.repoColorHover};
    transition: all 0.50s linear;
  }
  `