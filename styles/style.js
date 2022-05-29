import { breakpoints, colors, fonts } from '../styles/theme'
import { addOpacityToColor } from '../styles/utils'
import css from 'styled-jsx/css';

const bgColor = addOpacityToColor(colors.primary, 0.1);
export default css`
html,
body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    background-image: radial-gradient(${bgColor} 1px, transparent 1px), radial-gradient(${bgColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
}

main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    height: 100%;
    width: 100%;
}

* {
    box-sizing: border-box
}

@media (min-width: ${breakpoints.mobile}) {
    main {
        height: 90vh;
        width: ${breakpoints.mobile};
        }
    }
`

