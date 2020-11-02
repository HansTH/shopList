import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

  :root{
    --green: #29BB9C;
    --white: #F1F1F1;
    --dark-green: #159588;
    --light-gray: #efefef;
    --black: #222;
    --box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.14);
    --border-radius: 4px;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    color: var(--black);
  }

  body{

  }

  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 2rem;
  }

  h3{
    font-size: 1.6
  }

  p{
    font-size: 1.3rem;
  }
  .container{
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
  }


`;
