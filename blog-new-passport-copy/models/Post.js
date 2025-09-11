const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',   // Must match your User model name
    required: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true
  },
  coverUrl: String,       // Cloudinary URL
  coverPublicId: String,  // Cloudinary public id (for deletion if needed)
  localPath: String,      // Local file path (public/uploads/filename.jpg)
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',          // Must match your User model
    required: true
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  comments: [commentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
