import sample from './sample.js';

import prospectThefit24 from './thefit24.js';

import prospectRjFitness from './rj-fitness.js';

import prospectArmourFitnessGym from './armour-fitness-gym.js';

import prospectAimFitnessYelahanka from './aim-fitness-yelahanka.js';

import prospectHeartBeatGym from './heart-beat-gym.js';

import prospectFitOrFightGym from './fit-or-fight-gym.js';

import prospectTheFitnessClub from './the-fitness-club.js';

import prospectHighFitnessClubAvailableOnCultFit from './high-fitness-club-available-on-cult-fit.js';

import prospectLiveFitnessHsrLayout from './live-fitness-hsr-layout.js';

import prospectTheFitHouseGymJayanagar from './the-fit-house-gym-jayanagar.js';

import prospectHustleFitnessHsrLayout from './hustle-fitness-hsr-layout.js';

import prospectEurofitGym from './eurofit-gym.js';

import prospectBarbellCartelGym from './barbell-cartel-gym.js';

import prospectSriFitnessGym from './sri-fitness-gym.js';

import prospectSilhouetteFitness from './silhouette-fitness.js';

import prospectDFitness7 from './d-fitness-7.js';

import prospectAddictFitness from './addict-fitness.js';

import prospectActiveFitness from './active-fitness.js';

import prospectIronClanFitnessStudio from './iron-clan-fitness-studio.js';

import prospectWorkoutPlus from './workout-plus.js';

const prospects = {
  'sample': sample,

  'thefit24': prospectThefit24,

  'rj-fitness': prospectRjFitness,

  'armour-fitness-gym': prospectArmourFitnessGym,

  'aim-fitness-yelahanka': prospectAimFitnessYelahanka,

  'heart-beat-gym': prospectHeartBeatGym,

  'fit-or-fight-gym': prospectFitOrFightGym,

  'the-fitness-club': prospectTheFitnessClub,

  'high-fitness-club-available-on-cult-fit': prospectHighFitnessClubAvailableOnCultFit,

  'live-fitness-hsr-layout': prospectLiveFitnessHsrLayout,

  'the-fit-house-gym-jayanagar': prospectTheFitHouseGymJayanagar,

  'hustle-fitness-hsr-layout': prospectHustleFitnessHsrLayout,

  'eurofit-gym': prospectEurofitGym,

  'barbell-cartel-gym': prospectBarbellCartelGym,

  'sri-fitness-gym': prospectSriFitnessGym,

  'silhouette-fitness': prospectSilhouetteFitness,

  'd-fitness-7': prospectDFitness7,

  'addict-fitness': prospectAddictFitness,

  'active-fitness': prospectActiveFitness,

  'iron-clan-fitness-studio': prospectIronClanFitnessStudio,

  'workout-plus': prospectWorkoutPlus,
};

export function getProspect(slug) {
  return prospects[slug] || null;
}

export default prospects;
