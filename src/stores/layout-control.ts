import { Ref } from "vue"

export const useLayoutControl = defineStore('layout', () => {
    const mode: Ref<'desktop' | 'mobile' | undefined> = ref(undefined)
    const getMode = computed(() => mode.value);
    const changeMode = (_mode: 'desktop' | 'mobile') => {
        mode.value = _mode
    }

    return { mode, getMode, changeMode }
})