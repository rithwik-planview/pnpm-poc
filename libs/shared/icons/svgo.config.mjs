export default {
    multipass: true,
    js2svg: {
        pretty: true,
    },
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    sortAttrs: false,
                },
            },
        },
        'removeViewBox',
        'prefixIds',
        'removeDimensions', // Moved here as plugin instead of top-level
        {
            name: 'convertColors',
            params: {
                currentColor: true,
            },
        },
        {
            name: 'addAttributesToSVGElement',
            params: {
                attributes: [{ preserveAspectRatio: 'xMidYMid meet' }, { focusable: 'false' }],
            },
        },
    ],
};
