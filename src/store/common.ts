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
            const app = document.querySelector('#app') as Element;

            if (!this.isDark) {
                this.theme = 'dark'
                app.classList.add('dark')
            } else {
                this.theme = 'light'
                app.classList.remove('dark')
            }
            console.log("🚢 丝滑切换主题");
        }
    }
})