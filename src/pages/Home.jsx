import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="detail">디테일페이지로</Link>
    </div>
  );
};

export default Home;
/* 
Home 컴포넌트는 <Link> 컴포넌트를 사용해서 Detail 컴포넌트로 이동하도록 하세요.
*/
