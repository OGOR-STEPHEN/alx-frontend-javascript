// crud.d.ts
import { RowID, RowElement } from '../interface';

// Declare the functions of the CRUD module
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function updateRow(rowId: RowID, row: RowElement): void;
  export function deleteRow(rowId: RowID): void;
}
