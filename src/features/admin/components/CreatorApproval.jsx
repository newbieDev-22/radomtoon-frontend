import Button from "../../../components/Button";
import TablePagination from "../../../components/TablePagination";

const creatorApprovalColumns = ["Creator name", "Register form", "Approval"];

const creatorApprovalData = [
  ["John Doe", <Button>See form...</Button>, <Button bg="green">Approve</Button>],
  ["John Doe", <Button>See form...</Button>, <Button bg="green">Approve</Button>],
  ["John Doe", <Button>See form...</Button>, <Button bg="green">Approve</Button>],
];

export default function CreatorApproval() {
  return (
    <div>
      <div className="px-28">
        <h1 className="font-bold text-3xl py-4">Creator Approval</h1>
        <TablePagination data={creatorApprovalData} columns={creatorApprovalColumns} />
      </div>
    </div>
  );
}
