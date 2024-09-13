import { useAddNewProductMutation } from "../app/service/apiData";

export const TestRTKqueryDummyDataAddNewProduct = () => {
  // we get an array - res is an array
  // const res = useAddNewProductMutation();
  // console.log("RES: ", res);

  // USE - array destructuring syntax
  const [addNewProduct, { data, isError, isLoading }] = useAddNewProductMutation();

  const onClickHandleAddProduct = async () => {
    try {
      const newProductData = {
        // id: ID will be provided by dummyjson, in this case id is 195
        title: "Test Product",
        description: "This is a test product"
      };

      await addNewProduct(newProductData);
    }
    catch (err) {
      console.error("Error adding new product: ", err);
    }
  };

  return (
    <section className="border-2 border-gray-400">
      <h3 className="text-green-600 underline">Add new product</h3>
      <button className="border-2 border-blue-600 p-2" type="button" onClick={onClickHandleAddProduct} disabled={isLoading}>Add new product</button>
      {data && <>
        <p>Data - {JSON.stringify(data)}</p>
        <p>Id: {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Description: {data.description}</p>
      </>}
    </section>
  );
};
