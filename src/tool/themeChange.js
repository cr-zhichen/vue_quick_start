import {useDark, useToggle} from '@vueuse/core';
import * as languageChange from "@/tool/languageChange.js";

// 定义枚举
export const Theme = {
    LIGHT: 'light',
    DARK: 'dark',
    AUTO: 'auto',
};

// 获取主题
export function getTheme() {
    return localStorage.getItem('vueuse-color-scheme');
}

// 获取主题名称
export function getThemeName() {
    let theme = getTheme();
    switch (theme) {
        case Theme.LIGHT:
            return languageChange.i18n.global.t('theme.light');
        case Theme.DARK:
            return languageChange.i18n.global.t('theme.dark');
        case Theme.AUTO:
            return languageChange.i18n.global.t('theme.auto');
        default:
    }
}

// 设置主题
export function setTheme(theme) {
    localStorage.setItem('vueuse-color-scheme', theme);
    const isDark = useDark();
    useToggle(isDark);
}

// 切换主题
export function toggleTheme() {
    let theme = getTheme();
    switch (theme) {
        case Theme.DARK:
            setTheme(Theme.LIGHT);
            break;
        case Theme.LIGHT:
            setTheme(Theme.AUTO);
            break;
        case Theme.AUTO:
        default:
            setTheme(Theme.DARK);
            break;
    }
}
