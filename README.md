# chaoticdesign.io

My personal website using Gatsby deployed with Wrangler as a Cloudflare Workers Site. 

![Production](https://github.com/mkevanz/chaotic-design/workflows/Deploy%20Production/badge.svg)  ![Staging](https://github.com/mkevanz/chaotic-design/workflows/Deploy%20Staging/badge.svg)

## Getting started

### Prerequisites
* [Node >= v12.X](https://nodejs.org/en/download/)
* [Gatsby](https://www.gatsbyjs.com/docs/quick-start/)
* [Wrangler](https://github.com/cloudflare/wrangler)

### Development

#### Build

To build the site locally, simply run:

```bash
cd ~/path/to/project/root
gatsby build
```

#### Server

To spin up an instance of the development server:

```bash
cd ~/path/to/project/root
gatsby develop
```

### Deployment

#### Staging

Merges to master are automatically published to a [workers.dev](https://chaotic-design-staging.kris-evans.workers.dev/) 
domain. 

To deploy manually to staging:

```bash
wrangler login 
wrangler publish --env staging
```

#### Production

Production deploys rely on semantically versioned git tags. To deploy a new production release, 
simply add a new versioned git tag and merge to master. Releases are automatically deployed to 
[chaoticdesign.io](https://www.chaoticdesign.io/).

To deploy manually to production:

```bash
wrangler login
wrangler publish --env production
```