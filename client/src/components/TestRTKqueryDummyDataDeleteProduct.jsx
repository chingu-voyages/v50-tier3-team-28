import { useDeleteProductMutation } from "../app/service/apiData";

export const TestRTKqueryDummyDataDeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, isError, isLoading }] = useDeleteProductMutation();

  const onClickHandleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    }
    catch (err) {
      console.error("Error updating product: ", err);
    }
  };

  return (
    <section className="border-2 border-gray-400">
      <h4 className="text-green-600 underline">Delete product component</h4>
      <button className="border-2 border-blue-600 p-2" type="button" onClick={onClickHandleDeleteProduct} disabled={isLoading}>Delete product</button>
      <p> {data?.id ? `Id: ${data.id}  - successfully deleted.` : ""} </p>
      <p> {data?.title ? `Title: ${data.title}  - successfully deleted.` : ""} </p>
    </section>
  );
};
