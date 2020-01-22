export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e28da88f429f58bf3944979',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iqwrw63u',
                  apiId: 'b2404af1-0616-4d65-b09b-e1cc812e61b2'
                },
                {
                  buildHookId: '5e28da87a982e29dd8a2cde1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tr5pzv49',
                  apiId: '8749cfd6-d3dd-40f6-8f59-eb07bf718de3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/richbai90/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tr5pzv49.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
