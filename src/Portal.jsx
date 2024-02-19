import { createPortal } from "react-dom";
import { useEffect } from "react";

const Portal = ({children}) => {
    const mountElement = document.getElementById('portal-root');
    const elementDiv = document.createElement('div');

    useEffect(() => {
        mountElement.appendChild(elementDiv);

        return () => mountElement.removeChild(elementDiv);
    }, [elementDiv, mountElement]);

    return createPortal(children, elementDiv);
}

export default Portal;