import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  specialPermissions?: SortOrder;
  updatedAt?: SortOrder;
};
