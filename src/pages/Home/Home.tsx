import React, { FunctionComponent, useCallback, useState } from 'react';
import ProductsList from '../../components/ProductsList';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { GET_PRODUCTS } from '../../services/queries';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { H1 } from '../../components/StyledComponents';
import { Category, ChildCategory } from '../../types';

const Home: FunctionComponent = () => {
    const { data, loading, error } = useQuery(GET_PRODUCTS);
    const [search, setSearch] = useState('');
    const { pathname } = useLocation();
    const handleChange = useCallback((product) => setSearch(product), []);

    if (loading) return <Loader />;
    if (error)
        return (
            <H1 textAlign="center">
                Etwas ist schief gelaufen. Bitte versuche es erneut... 😔
            </H1>
        );

    /*  grabbing the exact article based on the pathname which is the category urlPath ,
    in case there is no match,
    will set the default article "default one"
    */
    const currentData =
        data?.categories?.[0]?.childrenCategories.find(
            (category: ChildCategory) =>
                category.urlPath === pathname?.slice(1),
        ) || data?.categories?.[0];

    const {
        categoryArticles: { articles },
    } = currentData;

    // check if i have a product name to search by or should i render the whole products
    const currentProducts = search
        ? articles.filter((article: Category) => article.name.includes(search))
        : articles;

    return (
        <section>
            <Header handleChange={handleChange} value={search} />
            <Navbar categories={data?.categories?.[0]?.childrenCategories} />
            <ProductsList articles={currentProducts} />
        </section>
    );
};
export default Home;
