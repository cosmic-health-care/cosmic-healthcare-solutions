export type CatalogProduct = {
  code: string;
  name: string;
  specs: string;
  image: string;
};

export type CatalogGroup = {
  title: string;
  products: CatalogProduct[];
};
