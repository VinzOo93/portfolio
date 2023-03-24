// @ts-ignore
import requestIp from 'request-ip'

// @ts-ignore
export default defineEventHandler(async (event: any) => {

    const req = event.node.req
    return {
     ipClient: requestIp.getClientIp(req)
    }

})
