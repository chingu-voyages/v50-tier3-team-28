import { useGetProductByIdQuery } from "../app/service/apiData";

export const TestRTKqueryDummyDataSpecificProduct = ({ productId }) => {
  const { isError, isLoading, data } = useGetProductByIdQuery(productId);
  console.log("RES: ", data);

  return (
    <section className="border-2 border-red-500">
      <h3 className="text-green-600 underline">Test DummyJSON data - QueryById: `{productId}` - Product details</h3>
      {data && <>
        <p>Data - {JSON.stringify(data)}</p>
        <p>Title: {data.title}</p>
        <p>Description: {data.description}</p>
      </>}
    </section>
  );
};
