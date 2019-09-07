import fetch from 'isomorphic-unfetch';

export async function loadProjects(baseUrl) {
  const res = await fetch(`${baseUrl}/static/data/projects.json`);
  const json = await res.json();
  return json;
}

export async function loadExperience(baseUrl) {
  const res = await fetch(`${baseUrl}/static/data/experience.json`);
  const json = await res.json();
  return json;
}
