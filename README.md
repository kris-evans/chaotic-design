# chaoticdesign.io

My personal website using Gatsby deployed with Wrangler as a Cloudflare Workers Site. 

![Deploy Production](https://github.com/mkevanz/chaotic-design/workflows/Deploy%20Production/badge.svg)  ![Deploy Staging](https://github.com/mkevanz/chaotic-design/workflows/Deploy%20Staging/badge.svg)

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

To deploy to staging:

```bash
wrangler login 
wrangler publish --env staging
```

#### Production

```bash
wrangler login
wrangler publish --env production
```