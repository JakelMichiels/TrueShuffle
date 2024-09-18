

export default async function Page({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { id: string };
}) {
  const name = params.name;
  const uri = searchParams.id;
  return (
    <div >

    </div>
  );
}
