import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      loader: {
        loaderColor: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      header: {
        background: string;
      };
      navbar: {
        background: string;
        link: string;
        active: string;
        boxShadow: string;
      };
      article: {
        border: string;
      };
      button: {
        background: string;
      };
    };
  }
}
