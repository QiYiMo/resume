import { defineStore } from 'pinia'


export const useCommonStore = defineStore('common', {
    state: () => ({
        theme: 'light',
        locale: 'zh'
    }),
    getters: {
        isDark: state => state.theme === 'dark'
    },
    actions: {
        switchTheme() {

            if (!this.isDark) {
                this.theme = 'dark'
                document.documentElement.classList.add('dark')
            } else {
                this.theme = 'light'
                document.documentElement.classList.remove('dark')
            }
            console.log("🚢 丝滑切换主题");
        }
    }
})