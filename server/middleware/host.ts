// @ts-ignore
export default defineEventHandler(async (event: any) => {

  const req = event.node.req
  const res = event.node.res
  const host = req.headers.host
  let url = req.url
  const env = process.env.NODE_ENV
  const forceDomain = 'https://www.vincent-orru.com'

  if (
    (req.headers['x-forwarded-proto'] !== 'https' ||
      host === 'portfolio-vincent-orru.herokuapp.com' ||
      host === 'vincent-orru.com')
    &&
    env === 'production'
  ) {
    if (url === undefined || url === '/') {
      url = ''
    }
    res.writeHead(301, { Location: forceDomain + url })
    return res.end()
  }
})
