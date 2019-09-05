export function createBaseUrl(req) {
  let protocol = 'https:';
  let host = req ? req.headers.host : window.location.host;
  if (host.indexOf('localhost') > -1) {
    protocol = 'http:';
  }
  return `${protocol}//${host}`;
}
