import { Ref } from "vue"

export const useLayoutControl = defineStore('layout', () => {
    const mode: Ref<'desktop' | 'mobile' | undefined> = ref(undefined)
    const getMode = computed(() => mode.value);

    const changeMode = (_mode: 'desktop' | 'mobile') => {
        mode.value = _mode
    }

    function checkOnResize() {
        function triggerLayout() {

            const { matches } = window.matchMedia(`(max-width: ${import.meta.env.VITE_MAX_WIDTH_MOBILE}px)`)

            if (matches && mode.value === "mobile" ||
                !matches && mode.value === "desktop") {
                return
            }

            changeMode(matches ? "mobile" : "desktop")
        }

        onMounted(() => {
            triggerLayout();
            window.onresize = triggerLayout
        })
        onUnmounted(() => {
            window.onresize = null
        })
    }

    return { mode, getMode, changeMode, checkOnResize }
})
