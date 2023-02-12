import { ThreeDots } from "react-loader-spinner";
import {ThreeDotsWrapper} from './Loader.styled';


export const Loader = () => {
    return (
        <ThreeDotsWrapper>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                radius="9"
                color="#3f51b5"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
            />
        </ThreeDotsWrapper>
    );
};
