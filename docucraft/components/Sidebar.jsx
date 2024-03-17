import Link from "next/link";

const Sidebar = ({ docs }) => {
    const roots = docs.filter((doc) => !doc.parent);
    console.log({ roots });

    const nonRoots = Object.groupBy(
        docs.filter((doc) => doc.parent),
        ({ parent }) => parent
    );
    console.log({ nonRoots });

    return (
        <nav className="lg:block my-10">
            <ul>
                <div className="relative mt-3 pl-2">
                    <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
                    <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                    <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
                    <ul role="list" className="border-l border-transparent">
                        {roots.map((rootNode) => (
                            <li key={rootNode.id} className="relative">
                                <Link
                                    aria-current="page"
                                    className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                    href={`/docs/${rootNode.id}`}
                                >
                                    <span className="truncate">
                                        {rootNode.title}
                                    </span>
                                </Link>
                                {nonRoots[rootNode.id] && (
                                    <ul
                                        role="list"
                                        className="border-l border-transparent"
                                    >
                                        {nonRoots[rootNode.id].map(
                                            (subRoot) => (
                                                <li key={subRoot.id}>
                                                    <Link
                                                        className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href={`/docs/${rootNode.id}/${subRoot.id}`}
                                                    >
                                                        <span className="truncate">
                                                            {subRoot.title}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </nav>
    );
};

export default Sidebar;
