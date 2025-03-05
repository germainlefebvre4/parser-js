import type { BaseModel } from './base';

export interface CompanyInterface extends BaseModel {
  name(): string | undefined;
  logo(): string | undefined;
}
