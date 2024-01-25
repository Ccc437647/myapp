export const server = {
    protocol: 'https://',
    // domain: process.env.NODE_ENV === 'production' ? 'club.biqr.cn' : 'drink.biqr.cn',
    domain: 'api.apiopen.top',
    context: '/api/',
}

export const baseURL = `${server.protocol}${server.domain}${server.context}`
