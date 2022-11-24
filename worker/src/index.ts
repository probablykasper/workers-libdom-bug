export default {
    async fetch(request: Request) {
        return fetch('https://example.com', {
            // properties like `mode` and `cache`, etc should be unavailable
            cache: request.cacxhe,
        });
    },
};
