export default function ProductDetails({ params: { id } }) {
  return (
    <div className="p-6 text-center">
      <h1>Product Id:{id}</h1>
    </div>
  );
}
