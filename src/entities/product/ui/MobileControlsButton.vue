<template>
  <Button shape="circle" @click="openDrawerWithProps" severity="secondary">
    <i class="pi pi-ellipsis-v"></i>
  </Button>
</template>

<script setup lang="ts">
import { Button } from "~/src/shared/ui/button";
import { useBottomDrawer } from "~/src/shared/model/bottom-drawer/store";
import type { ProductInCart } from "~/src/entities/product";
const drawerStore = useBottomDrawer();
const { openDrawer, closeDrawer } = drawerStore;
const MobileControls = defineAsyncComponent(
  () => import("~/src/entities/product/ui/MobileControls.vue")
);

const props = defineProps<{ product: ProductInCart }>();

const openDrawerWithProps = () => {
  openDrawer(
    MobileControls,
    { product: props.product },
    {
      increase: () => emit("increase"),
      decrease: () => emit("decrease"),
      remove: () => {
        emit("remove");
        closeDrawer();
      },
    }
  );
};

const emit = defineEmits<{
  (e: "increase"): void;
  (e: "decrease"): void;
  (e: "remove"): void;
}>();
</script>

<style scoped></style>
