export default function ProductDetails({ params: { id, name } }: string) {
  return (
    <div className="p-6 text-center">
      <h1>Product Id:{id}</h1>
      {/* <p>product name:{name}</p> */}
    </div>
  );
}
