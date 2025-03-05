import { BaseModel } from '../base';

import type { CompanyInterface } from '../company';

import type { v2 } from '../../spec-types';

export class Company extends BaseModel<v2.CompanyObject> implements CompanyInterface {
  name(): string | undefined {
    return this._json.name;
  }

  logo(): string | undefined {
    return this._json.logo;
  }
}
