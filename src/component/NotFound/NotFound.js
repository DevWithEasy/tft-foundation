import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-2 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-28 w-28 mx-auto text-yellow-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="uppercase font-bold text-lg">404- page not found</p>
      <p className="text-sm text-gray-400 text-justify">
        The page you are looking for might have benn removed hade it name
        changed or it temporarly available
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-1 bg-blue-500 text-white rounded-full"
      >
        Go to homepage
      </button>
    </div>
  );
};
export default NotFound;
