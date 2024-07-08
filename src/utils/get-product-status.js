import { APPROVAL_STATUS_ID, STATUS_PRODUCT } from "../constants";

export default function getProductStatus(product) {
  const { approvalStatusId, productStatusId } = product;
  if (
    productStatusId === APPROVAL_STATUS_ID.PENDING &&
    approvalStatusId === APPROVAL_STATUS_ID.SUCCESS
  ) {
    return STATUS_PRODUCT.IN_PROGRESS;
  }

  if (
    productStatusId === APPROVAL_STATUS_ID.SUCCESS &&
    approvalStatusId === APPROVAL_STATUS_ID.SUCCESS
  ) {
    return STATUS_PRODUCT.SUCCESS;
  }

  if (
    productStatusId === APPROVAL_STATUS_ID.FAILED &&
    approvalStatusId === APPROVAL_STATUS_ID.SUCCESS
  ) {
    return STATUS_PRODUCT.FAILED;
  }

  if (approvalStatusId === APPROVAL_STATUS_ID.PENDING) {
    return STATUS_PRODUCT.PENDING;
  }

  if (approvalStatusId === APPROVAL_STATUS_ID.FAILED) {
    return STATUS_PRODUCT.REJECTED;
  }

  if (approvalStatusId === null) {
    return STATUS_PRODUCT.DRAFTING;
  }
}
