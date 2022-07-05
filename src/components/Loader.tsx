import { FaSpinner } from "react-icons/fa";

export default function Loader() {
  return <div className="flex items-center justify-center mt-10">
    <FaSpinner className="animate-spin" size={25} aria-label="loading" />
  </div>
}
