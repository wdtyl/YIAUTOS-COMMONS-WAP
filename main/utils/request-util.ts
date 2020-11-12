export default function request(params: any, serviceName = 'http'): Promise<any> {
  return import(`../network/${serviceName}`).then(request => {
    return request.default(params);
  });
}
