const triggerLayout = () => {
    const { mode, changeMode } = useLayoutControl()
    const { matches } = window.matchMedia(`(max-width: ${import.meta.env.VITE_MAX_WIDTH_MOBILE}px)`)

    if (matches && mode === "mobile" ||
        !matches && mode === "desktop") {
        return
    }

    changeMode(matches ? "mobile" : "desktop")
}


export const useTriggerLayout = () => {
    onMounted(() => {
        triggerLayout();
        window.onresize = triggerLayout
    })
    onUnmounted(() => {
        window.onresize = null
    })
}

