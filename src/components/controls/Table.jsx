import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

export default function MyTable(props) {
  const { titles, content, fields, selectable, onRowSelect } = props;
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    if (index === selectedRow) {
      setSelectedRow(null);
      if (onRowSelect) {
        onRowSelect(null);
      }
    } else {
      setSelectedRow(index);
      if (onRowSelect) {
        onRowSelect(index);
      }
    }
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              {selectable && <TableCell padding="checkbox"></TableCell>}
              {titles.map((title, index) => (
                <TableCell
                  align={index === 0 ? "inherit" : "right"}
                  key={index}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((item, index) => (
              <TableRow key={index} onClick={() => handleRowClick(index)}>
                {selectable && (
                  <TableCell padding="checkbox">
                    <Checkbox checked={selectedRow === index} />
                  </TableCell>
                )}
                {fields.map((field, index) => (
                  <TableCell
                    align={index === 0 ? "inherit" : "right"}
                    key={index}>
                    {item[field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
