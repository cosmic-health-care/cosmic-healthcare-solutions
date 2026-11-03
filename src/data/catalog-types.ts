export type CatalogDetail = {
  label: string;
  value: string;
};

export type CatalogProduct = {
  code: string;
  name: string;
  /** One-line summary shown under the product name in the detail dialog. */
  specs: string;
  image: string;
  /** Optional longer product description shown in the detail dialog. */
  description?: string;
  /** Optional list of compatible equipment brands/models. */
  compatibility?: string;
  /** Optional technical specification rows shown as a table in the detail dialog. */
  details?: CatalogDetail[];
};

export type CatalogGroup = {
  title: string;
  products: CatalogProduct[];
};
