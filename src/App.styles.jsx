import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'Roboto', sans-serif;
	src: url("../public/fonts/Roboto-Black.ttf"),
}

	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		}

	*:before,
	*:after {
    box-sizing: border-box;
		}

	a,
	a:visited {
    text-decoration: none;
    
    cursor: pointer;
		}

	button {
        cursor: pointer;
    }


ul li {
    list-style: none;
}

html,
body {
    width: 100%;
    min-height: 100%;
    font-family: 'Roboto', sans-serif;
    color: #000000;

}

button,
a {
    font-family: 'Roboto', sans-serif;
}

`;
