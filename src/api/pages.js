import fetch from 'isomorphic-unfetch';

export async function loadPortfolio(baseUrl) {
  const res = await fetch(`${baseUrl}/static/data/pages/portfolio.json`);
  const json = await res.json();
  return json;
}

export async function loadAbout(baseUrl) {
  const res = await fetch(`${baseUrl}/static/data/pages/about.json`);
  const json = await res.json();
  return json;
}
