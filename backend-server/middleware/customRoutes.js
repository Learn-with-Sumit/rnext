const { PostService } = require("../services/post.service");
const { ProfileService } = require("../services/profile.service");
const router = require("../util/Router");

const customRoute = (req, res, next) => {
    // Posts Routes
    router.likePost(req, res, next, PostService.likePost);
    router.comment(req, res, next, PostService.comment);    
    router.deleteComment(req, res, next, PostService.deleteComment);

    // Profiles
    router.profile(req, res, next, ProfileService.profile);

    next(); 
};

module.exports = customRoute;