import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="specialPermissions"
          multiline
          source="specialPermissions"
        />
      </SimpleForm>
    </Create>
  );
};
