# SubDIY

An elegant way to use Clash anywhere

## Quickstart

Open the [SubDIY](https://subdiy.pages.dev/) page, enter your node subscription address, and click `Generate`.
Then enter the generated link into Clash.
Done!

## Usage

See [USAGE (zh-CN)](docs/USAGE.zh-cn.md)

## Deploy

You can deploy SubDIY with [Cloudflare Pages](https://pages.cloudflare.com/) or any platform you like.

- Build command: `npm run build`
- Build output directory: `dist`
- Set environment variables:
  - `VITE_SUBDIY_URL=https://subdiy.pages.dev`
  - `VITE_BACKEND_URL=https://api.dler.io`
  - `NODE_VERSION=16`
