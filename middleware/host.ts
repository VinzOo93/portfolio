// @ts-ignore
export default defineEventHandler(async (event: any) => {

  // @ts-ignore
  const config = useRuntimeConfig()
  const req = event.node.req;
  const res = event.node.res;
  const host = req.headers.host;
  let url = req.url;
  const env = process.env.NODE_ENV;
  const forceDomain = config.public.forcedDomain;

  if (
    (req.headers['x-forwarded-proto'] !== 'https' ||
      host === config.public.hostHeroku ||
      host === config.public.prodEnvHost)
    &&
    env === 'production'
  ) {
    if (url === undefined || url === '/') {
      url = '';
    }
    res.writeHead(301, { Location: forceDomain + url })
    return res.end();
  }
});


