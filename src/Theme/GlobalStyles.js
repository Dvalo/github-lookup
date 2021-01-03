import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.themeDark};
    color: ${({ theme }) => theme.textLightColor};
    --theme-text-light: ${({ theme }) => theme.textLightColor};
    --theme-color-light: ${({ theme }) => theme.themeLight};
    --theme-color-dark: ${({ theme }) => theme.themeDark};
    --theme-card-bg: ${({ theme }) => theme.cardBackground};
    --theme-light-yellow: ${({ theme }) => theme.lightYellow};
    --theme-light-orange: ${({ theme }) => theme.lightOrange};
    --theme-dark-orange: ${({ theme }) => theme.darkOrange};
    --border-color-light: ${({ theme }) => theme.borderColorLight};
    --repo-color: ${({ theme }) => theme.repoColor};
    --repo-color-hover: ${({ theme }) => theme.repoColorHover};
    --repo-bg-color: ${({ theme }) => theme.repoBgColor};
    --repo-bg-color-hover: ${({ theme }) => theme.repoBgColorHover};
  }
  `