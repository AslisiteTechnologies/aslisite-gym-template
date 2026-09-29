import sample from './sample.js';

const prospects = {
  'sample': sample,
};

export function getProspect(slug) {
  return prospects[slug] || null;
}

export default prospects;
