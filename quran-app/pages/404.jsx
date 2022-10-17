import Link from "next/link";
const Error = () => {
  return (
    <div>
      <h1 className="text-3xl  hover:text-blue-900">Route Error</h1>
      <Link href="/">
        <a className="text-3xl  hover:text-white hover:bg-pink-700">
          Go To Home
        </a>
      </Link>
    </div>
  );
};
export default Error;
