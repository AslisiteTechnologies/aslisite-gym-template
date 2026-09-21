import defaultGym from './default.js';
import fitnessEdgePrime from './fitness-edge-prime.js';
import testGym from './test-gym.js';

const prospects = {
  'fitness-edge-prime': fitnessEdgePrime,
  'test-gym': testGym,
};

export function getProspectFromPath(pathname = window.location.pathname) {
  const slug = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return prospects[slug] || defaultGym;
}

export { prospects };
