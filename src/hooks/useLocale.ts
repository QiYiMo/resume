import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default function useLocale() {
    const { locale } = useI18n()
    const isZh = computed(() => locale.value === 'zh')

    function toggleLang() {
        if (isZh.value) {
            locale.value = 'en'
        } else {
            locale.value = 'zh'
        }
    }

    return { toggleLang, locale, isZh }
}