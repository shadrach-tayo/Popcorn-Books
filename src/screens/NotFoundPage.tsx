import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return <div
    className="h-screen w-full grid items-center justify-center"
  >
    <div>
      Sorry... nothing here. <Link to="/list" className="text-blue">Go home</Link>
    </div>
  </div>

}