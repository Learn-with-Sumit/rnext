// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData(url) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }
    return cache.get(url);
}

async function getData(url) {
    if (url.includes("/comments")) {
        return await getComments(url);
    } else {
        throw Error("Not implemented");
    }
}

async function getComments(url) {
    const response = await fetch(url);

    const comments = await response.json();

    return comments;
}
