import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query getProducts {
        categories(ids: "156126", locale: de_DE) {
            name
            articleCount
            childrenCategories {
                name
                urlPath
                articleCount
                ...categoryArticles
            }
            ...categoryArticles
        }
    }

    fragment categoryArticles on Category {
        categoryArticles(first: 50) {
            articles {
                name
                variantName
                prices {
                    currency
                    regular {
                        value
                    }
                }
                images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
                    path
                }
            }
        }
    }
`;
