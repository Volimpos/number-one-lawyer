import { p as getRequestURL } from '../_/nitro.mjs';
import { d as useRequestEvent } from './server.mjs';

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}

export { useRequestURL as u };
//# sourceMappingURL=url-Dhw-ogpB.mjs.map
