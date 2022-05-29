export const addOpacityToColor = (color, opacity) => {
    const opacityHex = Math.random(opacity * 255).toString(16);
    return `${color}${opacityHex}`;
}