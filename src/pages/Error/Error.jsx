import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex justify-center">
            <h3 className="text-3xl">{error.status}</h3>
            {
                (error)&&
                <h3 className="text-3xl mx-3"> || </h3>
            }
            <h3 className="text-3xl">{error.statusText}</h3>
        </div>
    );
};

export default Error;