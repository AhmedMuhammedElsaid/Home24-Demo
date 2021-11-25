import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Article } from './../../types';
import ProductItem from '../ProductItem';
import { P } from '../StyledComponents';

const Container = styled.div`
    display: grid;
    padding: 40px;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

interface Props {
    articles: Article[];
}

const ProductsList: FunctionComponent<Props> = ({ articles }) => {
    return (
        <>
            {articles.length > 0 ? (
                <Container>
                    {articles.map((article) => (
                        <ProductItem
                            key={article.name + article.variantName}
                            article={article}
                        />
                    ))}
                </Container>
            ) : (
                <P fontSize="25px" mt="6" fontWeight="bold" textAlign="center">
                    Leider konnten wir keine Ergebnisse finden, die Ihrer Suche
                    entsprechen.. 😔
                </P>
            )}
        </>
    );
};
export default ProductsList;
