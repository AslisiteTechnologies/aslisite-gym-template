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

import prospectSunFitness from './sun-fitness.js';

import prospectGreenFitnessStudioBestFitnessCenterInDoddathoguru from './green-fitness-studio-best-fitness-center-in-doddathoguru.js';

import prospectL7FitnessStudio from './l7-fitness-studio.js';

import prospectPlayOnFitnessJpNagar from './play-on-fitness-jp-nagar.js';

import prospectFit24PremiumFitnessClubTheBestGymInKengeri from './fit24-premium-fitness-club-the-best-gym-in-kengeri.js';

import prospectNeverSettleFamilyFitnessStudio from './never-settle-family-fitness-studio.js';

import prospectUniqueFitness from './unique-fitness.js';

import prospectOaksFittessGym from './oaks-fittess-gym.js';

import prospectGaradiManeFitness from './garadi-mane-fitness.js';

import prospectDFitness from './d-fitness.js';

import prospectIronClanGym from './iron-clan-gym.js';

import prospectFitnessFormula from './fitness-formula.js';

import prospectUPlankFitness from './u-plank-fitness.js';

import prospectJyFitness from './jy-fitness.js';

import prospectSriMarutiFitnessGym from './sri-maruti-fitness-gym.js';

import prospectFitZoneGym from './fit-zone-gym.js';

import prospectAbsoluteFitnessSolutionsBestGymInYelhankaNewTown from './absolute-fitness-solutions-best-gym-in-yelhanka-new-town.js';

import prospectSpartanFitness from './spartan-fitness.js';

import prospectDFitnessPlanet from './d-fitness-planet.js';

import prospectKeerthiFitness from './keerthi-fitness.js';

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

  'sun-fitness': prospectSunFitness,

  'green-fitness-studio-best-fitness-center-in-doddathoguru': prospectGreenFitnessStudioBestFitnessCenterInDoddathoguru,

  'l7-fitness-studio': prospectL7FitnessStudio,

  'play-on-fitness-jp-nagar': prospectPlayOnFitnessJpNagar,

  'fit24-premium-fitness-club-the-best-gym-in-kengeri': prospectFit24PremiumFitnessClubTheBestGymInKengeri,

  'never-settle-family-fitness-studio': prospectNeverSettleFamilyFitnessStudio,

  'unique-fitness': prospectUniqueFitness,

  'oaks-fittess-gym': prospectOaksFittessGym,

  'garadi-mane-fitness': prospectGaradiManeFitness,

  'd-fitness': prospectDFitness,

  'iron-clan-gym': prospectIronClanGym,

  'fitness-formula': prospectFitnessFormula,

  'u-plank-fitness': prospectUPlankFitness,

  'jy-fitness': prospectJyFitness,

  'sri-maruti-fitness-gym': prospectSriMarutiFitnessGym,

  'fit-zone-gym': prospectFitZoneGym,

  'absolute-fitness-solutions-best-gym-in-yelhanka-new-town': prospectAbsoluteFitnessSolutionsBestGymInYelhankaNewTown,

  'spartan-fitness': prospectSpartanFitness,

  'd-fitness-planet': prospectDFitnessPlanet,

  'keerthi-fitness': prospectKeerthiFitness,
};

export function getProspect(slug) {
  return prospects[slug] || null;
}

export default prospects;
