import sample from './sample.js';

import prospectThefit24 from './thefit24.js';

import prospectRjFitness from './rj-fitness.js';

import prospectArmourFitnessGym from './armour-fitness-gym.js';

import prospectAimFitnessYelahanka from './aim-fitness-yelahanka.js';

const prospects = {
  'sample': sample,

  'thefit24': prospectThefit24,

  'rj-fitness': prospectRjFitness,

  'armour-fitness-gym': prospectArmourFitnessGym,

  'aim-fitness-yelahanka': prospectAimFitnessYelahanka,
};

export function getProspect(slug) {
  return prospects[slug] || null;
}

export default prospects;
