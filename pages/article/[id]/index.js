import { useRouter } from "next/router";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>This is an article {id}</h1>
    </div>
  );
}

