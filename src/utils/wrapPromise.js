export default function wrapPromise(promise) {
    let status = "pending";
    let response;

    const suspender = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (error) => {
            status = "error";
            response = error;
        }
    );

    const read = () => {
        switch (status) {
            case "pending":
                throw suspender;

            case "error":
                throw response;

            default:
                return response;
        }
    };

    return {
        read,
    };
}
