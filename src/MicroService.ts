import { IMicroService, IMicroServiceOptions } from '@nm/micriservice';

export default class MicroService implements IMicroService {
  options: IMicroServiceOptions;

  constructor(options: IMicroServiceOptions) {
    this.options = options;
  }
}
