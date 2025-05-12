import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

interface TableRow {
  id: string;
  item: string;
  cost: number;
  price: number;
  analysis: string;
}

const data: TableRow[] = [
  { id: "1", item: "Item A", cost: 100, price: 150, analysis: "Profit" },
  { id: "2", item: "Item B", cost: 200, price: 180, analysis: "Loss" },
  { id: "3", item: "Item C", cost: 300, price: 350, analysis: "Profit" },
];

const CostPriceAnalysisTable: React.FC = React.memo(() => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="table-cell-padding font-circular-medium">
              Item
            </TableHead>
            <TableHead className="table-cell-padding font-circular-medium">
              Cost
            </TableHead>
            <TableHead className="table-cell-padding font-circular-medium">
              Price
            </TableHead>
            <TableHead className="table-cell-padding font-circular-medium">
              Analysis
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="table-cell-padding font-circular-normal">
                {row.item}
              </TableCell>
              <TableCell className="table-cell-padding font-circular-normal">
                ${row.cost}
              </TableCell>
              <TableCell className="table-cell-padding font-circular-normal">
                ${row.price}
              </TableCell>
              <TableCell className="table-cell-padding font-circular-normal">
                {row.analysis}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
});

CostPriceAnalysisTable.displayName = "CostPriceAnalysisTable";

export default CostPriceAnalysisTable;
