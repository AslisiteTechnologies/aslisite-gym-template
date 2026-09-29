import sample from './sample.js';

import prospectThefit24 from './thefit24.js';

const prospects = {
  'sample': sample,

  'thefit24': prospectThefit24,
};

export function getProspect(slug) {
  return prospects[slug] || null;
}

export default prospects;
