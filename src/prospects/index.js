import sample from './sample.js';

import prospectThefit24 from './thefit24.js';

import prospectRjFitness from './rj-fitness.js';

import prospectArmourFitnessGym from './armour-fitness-gym.js';

const prospects = {
  'sample': sample,

  'thefit24': prospectThefit24,

  'rj-fitness': prospectRjFitness,

  'armour-fitness-gym': prospectArmourFitnessGym,
};

export function getProspect(slug) {
  return prospects[slug] || null;
}

export default prospects;
