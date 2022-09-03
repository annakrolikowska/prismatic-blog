import * as prismic from '@prismicio/client'

export const repositoryName = 'culinary-blog'

export const client = prismic.createClient(repositoryName, {
    accessToken: 'MC5ZdV9lbmhBQUFDQUFwRnAy.77-9Dnjvv73vv73vv71P77-977-977-9G--_ve-_vTvvv70L77-977-977-9Te-_vUIr77-977-977-9ae-_ve-_vWEPOQ\n',

    routes: [
        {
            type: 'header',
            path: '/',
        },
    ],
})