import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ rows, headingName }) {
  return (
    <TableContainer
      sx={{
        width: "100%",
        background: "transparent",
        border: "2px solid white",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        overflow: "hidden",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        // gap: "12px",
      }}
      component={Paper}
    >
       <div className="w-full flex justify-center">
        <div
          className="py-[9px] px-6 w-full   text-green-500 border-b-[2px] border-b-white bg-green-100 
          "
        >
          <p className="text-[13px] text-center whitespace-pre  font-semibold">
            v=DMARC1;   p=quarantine;   rua=mailto:najeeb@voltic.ai;
          </p>
        </div>
      </div>
      <Table
        sx={{ width: "100%", border: "none", tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <TableHead
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            border: "none",
            height: "32px",
            width: "100%",
          }}
        >
          <TableRow sx={{ width: "100%", border: "none" }}>
            {headingName.map((v, i) => (
              <TableCell
                key={i}
                align="center"
                sx={{
                  width: `${100 / headingName.length}%`,
                  border: "none",
                  fontSize: "12px",
                  fontWeight: "600",
                  padding: "0px",
                }}
              >
                {v}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ height: "12px" }}></TableRow>
          {rows.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: "none" } }}
            >
              {row.map((v, i) => (
                <TableCell
                  align="center"
                  sx={{
                    border: "none",
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    fontWeight: "500",
                    height: "18px",
                    paddingY: "8px",
                    paddingX: "0px",
                  }}
                  key={i}
                >
                  {v}
                </TableCell>
              ))}
            </TableRow>

          ))}
           <TableRow sx={{ height: "12px" }}></TableRow>
        </TableBody>
      </Table>
      <div className="w-full flex justify-center">
        <div
          className="py-1 px-3  border-t-[2px] border-r-[2px]  border-l-[2px] border-white bg-white/60 rounded-tr-2xl rounded-tl-2xl
          "
        >
          <p className="  whitespace-nowrap text-[12px] flex gap-[10px] font-medium">
            <span className="font-semibold"> www.voltic.ai:</span>
            Reported by ns4-05.azure-dns.onfo on 5/29/2025 at 12:50:36 PM (UTC
            -5)
          </p>
        </div>
      </div>
    </TableContainer>
  );
}
