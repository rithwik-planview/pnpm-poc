export default {
    rules: {
        'clzdev-ticket-in-body': ({ body }) => {
            const pattern = /CLZDEV-\d{5}/;
            const isValid = pattern.test(body || '');
            return [
                isValid,
                'Commit body must include a CLZDEV-xxxxx ticket number (e.g., CLZDEV-12345)',
            ];
        },
    },
};
