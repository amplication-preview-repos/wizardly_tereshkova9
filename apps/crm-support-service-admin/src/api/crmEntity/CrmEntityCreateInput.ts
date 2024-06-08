import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CrmEntityCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
