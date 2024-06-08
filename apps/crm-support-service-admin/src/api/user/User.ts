import { CrmEntity } from "../crmEntity/CrmEntity";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  crmEntities?: Array<CrmEntity>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
