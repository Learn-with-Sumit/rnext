import { forwardRef } from "react";

const MyInput = function (props, ref) {
    return <input {...props} ref={ref} />;
};

const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;
