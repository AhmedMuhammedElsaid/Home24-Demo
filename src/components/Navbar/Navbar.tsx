import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { ChildCategory } from '../../types';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../services/theme';
import { color } from 'styled-system';
export const CategoryLink = styled(Link)`
    text-decoration: none;
    ${color};
`;
const Nav = styled.nav`
    grid-area: navbar;
    margin-block-start: 2rem;
    padding: 10px;
    border-top: 1px;
    background-color: ${({ theme }) => theme.colors.navbar.background};
    min-width: 320px;
    font-weight: 500;
    box-shadow: inset 0 -1px 0 ${({ theme }) => theme.colors.navbar.boxShadow};
`;

const List = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
        padding: 0 0 1rem 0;
    }
`;

interface Props {
    categories?: ChildCategory[];
}

const Navbar: FunctionComponent<Props> = ({ categories }) => {
    const { pathname } = useLocation();
    return (
        <Nav>
            {categories && categories.length && (
                <List>
                    {categories.map(({ name, urlPath }) => (
                        <li key={name}>
                            <CategoryLink
                                // redirect to an exact category to filter by it's path.
                                to={`/${urlPath.split('/')[1]}`}
                                color={
                                    // change link color based on it's state ,active or not
                                    pathname.includes(urlPath.split('/')[1])
                                        ? theme.colors.navbar.active
                                        : theme.colors.navbar.link
                                }
                            >
                                {name}
                            </CategoryLink>
                        </li>
                    ))}
                </List>
            )}
        </Nav>
    );
};
export default Navbar;
