import { CrmEntityWhereInput } from "./CrmEntityWhereInput";
import { CrmEntityOrderByInput } from "./CrmEntityOrderByInput";

export type CrmEntityFindManyArgs = {
  where?: CrmEntityWhereInput;
  orderBy?: Array<CrmEntityOrderByInput>;
  skip?: number;
  take?: number;
};
