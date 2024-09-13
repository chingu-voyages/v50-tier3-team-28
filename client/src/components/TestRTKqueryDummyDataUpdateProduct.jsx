import { useUpdateProductMutation } from "../app/service/apiData";

export const TestRTKqueryDummyDataUpdateProduct = ({ productId }) => {
  const [updateProduct, { data, isError, isLoading }] = useUpdateProductMutation();

  const onClickHandleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Update Test Product",
        description: "This is a test product Update"
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData
      });
    }
    catch (err) {
      console.error("Error updating product: ", err);
    }
  };

  return (
    <section className="border-2 border-red-500 m-auto">
      <h4 className="text-green-600 underline">Update product component, by passing the id from parent component. Here id is - `{productId}`</h4>
      <button className="border-2 border-blue-600 p-2" type="button" onClick={onClickHandleUpdateProduct} disabled={isLoading}>Update product</button>
      {data && <>
        <p>Data - {JSON.stringify(data)}</p>
        <p>Title: {data.title}</p>
        <p>Description: {data.description}</p>
      </>}
    </section>
  );
};
