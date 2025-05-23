import Blgomodel from "../models/Blog.js";
import CommentModel from "../models/Comments.js";



const AddComment = async (req, res) => {
    try {
       // const { postId, userId, comment } = req.body;
    const { postId, comment } = req.body;
        const userId = req.user?.id;
        
const blogPost = await Blgomodel.findByPk(postId);
if (!blogPost) {
    return res.status(404).json({ success: false, message: 'Blog post not found' });
}


const newComment = await CommentModel.create({
    postId,
    userId,
    comment
});

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export { AddComment };
