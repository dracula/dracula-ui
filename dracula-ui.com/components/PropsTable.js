import { Table } from "dracula-ui";
import React from "react";

const PropsTable = ({ props }) => {
  const propList = Object.values(props);

  return (
    <Table color="yellowPink">
      <tbody>
        {propList.map((prop) => (
          <tr key={prop.name}>
            <td className="drac-text drac-text-sm drac-text-pink drac-text-semibold">
              {prop.name}
            </td>
            <td className="drac-text drac-text-green drac-text-xs" style={{ maxWidth: 200 }}>
              {prop.type.name} {prop.required ? "*" : ""}
            </td>
            <td className="drac-text drac-text-white drac-text-xs" style={{ maxWidth: 200 }}>
              {prop.description}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PropsTable;
