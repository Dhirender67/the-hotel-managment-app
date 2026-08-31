import { createContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <>
      <TableContext.Provider value={{ columns }}>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <table role="table" className="w-full border-collapse text-base">
            {children}
          </table>
        </div>
      </TableContext.Provider>
    </>
  );
}

function Header({ children }) {
  return (
    <>
      <thead className="bg-gray-800 text-white">
        <tr>{children}</tr>
      </thead>
    </>
  );
}

function Head({ children }) {
  return (
    <>
      <th className="px-4 py-3 text-left">{children}</th>
    </>
  );
}

function Body({ data = [], render }) {
  return <tbody>{data.map(render)}</tbody>;
}

function Row({ children }) {
  return (
    <>
      <tr className="odd:bg-white font-medium even:bg-gray-50 hover:bg-gray-100">
        {children}
      </tr>
    </>
  );
}

function Cell({ children }) {
  return (
    <>
      <td className="px-4 py-3">{children}</td>
    </>
  );
}

Table.Header = Header;
Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
