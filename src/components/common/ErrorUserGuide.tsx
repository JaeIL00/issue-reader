import { useNavigate } from "react-router-dom";

const ErrorUserGuide = () => {
    const navigate = useNavigate();

    return (
        <>
            <span>잘못된 요청입니다</span>
            <br />
            <button onClick={() => navigate("/")}>이슈 목록으로 이동</button>
        </>
    );
};

export default ErrorUserGuide;
