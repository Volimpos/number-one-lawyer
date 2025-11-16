import type {
  Product,
  ProductInCart,
  ProductSize,
} from "~/src/entities/product";

export const useCart = defineStore("cartStore", () => {
  const productsInCart = ref<ProductInCart[]>([]);

  const addProduct = (product: Product, size: ProductSize) => {
    if (!productsInCart.value) return;
    const existingProduct = productsInCart.value.find(
      (item) => item.id === product.id && item.selectedSize === size.value
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.totalPrice =
        Number(existingProduct.price) * existingProduct.quantity;
    } else {
      productsInCart.value.push({
        ...product,
        quantity: 1,
        selectedSize: size.value,
        totalPrice: Number(product.price),
      });
    }
  };

  const removeProduct = (product: ProductInCart) => {
    productsInCart.value = productsInCart.value.filter(
      (prod) =>
        !(prod.id === product.id && prod.selectedSize === product.selectedSize)
    );
  };

  const increaseQuantity = (product: ProductInCart) => {
    const existingProduct = productsInCart.value.find(
      (item) =>
        item.id === product.id && item.selectedSize === product.selectedSize
    );
    if (existingProduct) {
      existingProduct.quantity++;
      existingProduct.totalPrice =
        Number(existingProduct.price) * existingProduct.quantity;
    }
  };

  const decreaseQuantity = (product: ProductInCart) => {
    const existingProduct = productsInCart.value.find(
      (item) =>
        item.id === product.id && item.selectedSize === product.selectedSize
    );
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
      existingProduct.totalPrice =
        Number(existingProduct.price) * existingProduct.quantity;
    } else if (existingProduct && existingProduct.quantity <= 1) {
      removeProduct(product);
    }
  };

  const totalOrderPrice = computed(() =>
    productsInCart.value.reduce(
      (acc: number, curr: ProductInCart) => acc + curr.totalPrice,
      0
    )
  );

  return {
    productsInCart,
    totalOrderPrice,
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  };
});
