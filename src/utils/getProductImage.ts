const PLACEHOLDER_IMAGE = '/images/common/product-placeholder-image.jpg';

export const getProductImage = (imageName: string | null): string => {
  if (!imageName) return PLACEHOLDER_IMAGE;
  const isBackendPlaceholder = /product-[0-9]\.png/.test(imageName);
  if (isBackendPlaceholder) return PLACEHOLDER_IMAGE;

  return imageName;
};
