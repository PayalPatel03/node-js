const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { isAuth } = require('../middlewares/auth');
const Post = require('../models/Post');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// Create a new post
router.post('/', isAuth, upload.single('cover'), async (req, res) => {
    try {
        const { title, body } = req.body;

        const newPost = new Post({
            title,
            body,
            cover: req.file ? `/uploads/${req.file.filename}` : null,
            author: req.user._id
        });

        await newPost.save();
        console.log("✅ New post created:", newPost);

        res.redirect('/write');
    } catch (err) {
        console.error("❌ Error creating post:", err);
        res.redirect('/write?error=failed');
    }
});

// Edit post
router.post('/edit/:id', isAuth, upload.single('cover'), async (req, res) => {
    try {
        const { title, body } = req.body;
        const updated = {
            title,
            body
        };
        if (req.file) updated.cover = `/uploads/${req.file.filename}`;

        await Post.findByIdAndUpdate(req.params.id, updated);
        res.redirect('/write');
    } catch (err) {
        console.error("❌ Error editing post:", err);
        res.redirect('/write?error=editfailed');
    }
});

// Delete post
router.post('/delete/:id', isAuth, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/write');
    } catch (err) {
        console.error("❌ Error deleting post:", err);
        res.redirect('/write?error=deletefailed');
    }
});

module.exports = router;
