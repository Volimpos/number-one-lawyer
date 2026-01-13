import { useScroll } from "~/src/shared/lib/useScroll";

const isBurgerMenuOpen = ref<boolean>(false);
const scrollBlock = useScroll();

export const useBurgerMenu = () => {
    const toggleBurgerMenu = () => {
        isBurgerMenuOpen.value = !isBurgerMenuOpen.value;
        isBurgerMenuOpen.value ? scrollBlock.lock() : scrollBlock.unlock();
    };

    const closeBurgerMenu = () => {
        if (!isBurgerMenuOpen.value) return;
        isBurgerMenuOpen.value = false;
        scrollBlock.unlock();
    };

    return {
        isBurgerMenuOpen,
        toggleBurgerMenu,
        closeBurgerMenu,
    };
};
