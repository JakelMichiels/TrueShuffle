interface PlaylistPageProps {
  params: { name: string };
  searchParams: { uri: string };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { uri: string };
}) {
  const name = params.name;
  const uri = searchParams.uri;
  return (
    <div >
      playlist
    </div>
  );
}
