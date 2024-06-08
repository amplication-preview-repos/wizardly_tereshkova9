import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="specialPermissions"
          multiline
          source="specialPermissions"
        />
      </SimpleForm>
    </Edit>
  );
};
