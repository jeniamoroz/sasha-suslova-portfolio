import fetch from 'isomorphic-unfetch';

export async function loadProjects(baseUrl) {
  const res = await fetch(`${baseUrl}/static/projects.json`);
  const json = await res.json();
  return json;
}
