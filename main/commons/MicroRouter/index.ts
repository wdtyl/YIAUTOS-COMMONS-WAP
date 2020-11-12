/*
* 执行路由跳转(本App内与预定义的路由)
* */
function push(route, params = {}): void {

  let jumpUrl = route += getQueryLine(params);

  window.history.pushState(null, null, jumpUrl);
  postMessage();
}

/*
* 执行全局路由跳转(跳转到其他App)
* */
function jump(parentRoute, childRoute, params = {}): void {
  let jumpUrl = `/${parentRoute}/${childRoute}` + getQueryLine(params);
  console.log('即将跳转 ==>', jumpUrl);
  window.history.pushState(null, null, jumpUrl);
  postMessage();
}

function getQueryLine(params: object) : string {
  if (!params) {
    return ''
  }
  if (Object.keys(params).length === 0) {
    return ''
  }
  const query = new URLSearchParams();
  Object.keys(params).forEach(key => {
    query.append(key, params[key]);
  });
  return '?' + query.toString();
}

//向全局EventBus发送路由变化事件
function postMessage() {
  // @ts-ignore
  const EventBus = window.EventBus as any;

  EventBus && EventBus.dispatch('ROUTE_UPDATE')
}

export default {
  jump, push
}
