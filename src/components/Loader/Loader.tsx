import React from 'react';
import Loader from 'react-loader-spinner';
import { theme } from '../../services/theme';

const LoaderComponent = () => {
    return (
        <div className="Loader">
            <Loader
                type="ThreeDots"
                color={theme.colors.loader.loaderColor}
                height={100}
                width={100}
            />
        </div>
    );
};

export default LoaderComponent;
