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
                  buildHookId: '60f18097b5f6560fb7820669',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-32mnsaib',
                  apiId: '6aa33b8f-a045-4bd0-88b7-59d8b347c857'
                },
                {
                  buildHookId: '60f18097785d45115074e314',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vznb2j2r',
                  apiId: '786c7cb4-197f-4cc2-a701-a6e92c584e4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/panchi568/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vznb2j2r.netlify.app',
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
