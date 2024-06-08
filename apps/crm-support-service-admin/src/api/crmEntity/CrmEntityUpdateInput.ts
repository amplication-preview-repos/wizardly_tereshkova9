import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CrmEntityUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
