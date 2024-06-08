import { CrmEntity as TCrmEntity } from "../api/crmEntity/CrmEntity";

export const CRMENTITY_TITLE_FIELD = "name";

export const CrmEntityTitle = (record: TCrmEntity): string => {
  return record.name?.toString() || String(record.id);
};
