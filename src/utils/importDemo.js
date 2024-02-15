import { lazy } from "react";

export default function importDemo(file) {
    return lazy(() => import(`../components/${file}`)); // returns a promise
}
