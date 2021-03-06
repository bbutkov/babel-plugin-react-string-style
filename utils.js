const parseStyles = styles =>
    styles
        .split(';')
        .filter(style => style.split(':')[0] && style.split(':')[1])
        .map(style => [
            style
                .split(':')[0]
                .trim()
                .replace(/^-ms-/, 'ms-')
                .replace(/-./g, c => c.substr(1).toUpperCase()),
            style.split(':')[1].trim(),
        ])
        .reduce(
            (styleObj, style) => ({
                ...styleObj,
                [style[0]]: style[1],
            }),
            {}
        );

module.exports = {
    parseStyles,
}