import { useRouter } from "next/router";
// import Link from "next/link";

const Show = ({ show }) => {
  const router = useRouter();

  // This is never shown on Netlify. We just need it for NextJS to be happy,
  // because NextJS will render a fallback HTML page.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <h1>test fallback</h1>
        <p>Show: {show.id} {show.name}</p>
    </>
  );
};

export async function getStaticPaths() {
  // Set the paths we want to pre-render
  const paths = [{ params: { id: "2" } }, { params: { id: "3" } }, { params: { id: "4" } }];

  // We'll pre-render these paths at build time.
  // { fallback: true } means other routes will be rendered at runtime.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // The ID to render
  const { id } = params;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();

  return {
    props: {
      show: data,
    },
  };
}

export default Show;
