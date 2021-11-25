export interface Prices {
  currency: string;
  regular: {
    value: number;
  };
}
export interface Article {
  name: string;
  variantName: string;
  prices: Prices;
  images: string[];
}
export interface CategoryArticle {
  articles: Article[];
}
export interface ChildCategory {
  name: string;
  urlPath: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
}

export interface Category {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory[];
}
