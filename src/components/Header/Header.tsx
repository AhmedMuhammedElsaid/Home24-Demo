import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  img {
    min-height: 42px;
    min-width: 40px;
  }
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-around;
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.colors.navbar.boxShadow};
  padding: 10px;
`;
export const Input = styled.input`
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  max-width: 400px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 16px;
  outline: none;
  text-overflow: ellipsis;
  ::placeholder {
    color: ${({ theme }) => theme.colors.navbar.boxShadow};
  }
`;

interface Props {
  value: string;
  handleChange: (product: string) => void;
}
const HeaderHolder: FunctionComponent<Props> = ({ handleChange, value }) => {
  return (
    <Header>
      <CustomLink to="/">
        <img
          data-testid="brand-logo"
          alt="home24 - Möbel online kaufen"
          src="https://cdn1.home24.net/corgi/static/media/home-24-logo.4f73bd13.svg"
        />
      </CustomLink>
      <Input
        data-testid="search-input-testid"
        placeholder="Search..."
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
      />
    </Header>
  );
};

export default HeaderHolder;
