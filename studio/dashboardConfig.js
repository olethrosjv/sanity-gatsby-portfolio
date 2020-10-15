export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f88e00f604b3c47f029feab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5v3wb2by',
                  apiId: 'b09e6ed5-fd5d-46b6-b815-71ed7198d361'
                },
                {
                  buildHookId: '5f88e00faf54a14ea73acf94',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2m9bkvd5',
                  apiId: 'a789bd36-5fc9-40d5-b17f-4a2e8b48faf8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olethrosjv/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2m9bkvd5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
