import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log(param.id);

  return <div>Detail : {param.id}</div>;
};

export default Detail;
