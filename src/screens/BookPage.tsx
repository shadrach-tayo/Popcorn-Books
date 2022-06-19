import { useParams } from "react-router";
import GradientText from "../components/GradientText";

export default function BookPage() {
  const params = useParams<{ id: string}>();
  console.log("params: ", params);
  return <GradientText text={params.id!} />
}