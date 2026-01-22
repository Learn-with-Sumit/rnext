import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('post/:postId', './routes/post.tsx'),
    route('profile', './routes/profile/index.tsx', [
        route('account', './routes/profile/account.tsx'),
        route('settings', './routes/profile/settings.tsx'),
    ])
] satisfies RouteConfig;
