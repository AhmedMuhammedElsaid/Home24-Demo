import React, { FunctionComponent } from 'react';
import { Article as Product } from '../../types';
import styled from '@emotion/styled';
import { P } from '../StyledComponents';
import { formatPrice } from '../../utils/helpers';
import { theme } from '../../services/theme';

const ProductHolder = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button.background};
  padding: 8px 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  cursor: pointer;
  opacity: 0.9;
`;

const ProductDetails = styled.div`
  flex-grow: 1;
  img {
    display: block;
    margin: 0 auto;
  }
`;

interface Props {
  article: Product;
}

const ProductItem: FunctionComponent<Props> = ({ article }) => {
  return (
    <ProductHolder>
      <ProductDetails>
        <img src={article?.images[0]?.path} alt={article?.name || 'article-image'} />
        <P textAlign="center">{article?.name}</P>
        <P textAlign="center" fontWeight="bold" color={theme.colors.text.secondary}>
          {formatPrice(article?.prices?.regular?.value)}
        </P>
      </ProductDetails>
      <Button>Add to cart</Button>
    </ProductHolder>
  );
};

export default ProductItem;
