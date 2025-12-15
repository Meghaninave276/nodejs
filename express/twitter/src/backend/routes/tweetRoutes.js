import express from "express";
import {
  getAllTweets,
  addTweet,
  updateTweet,
  deleteTweet
} from "../services/tweetService.js";
import validateTweet from "../middleware/validateTweet.js";

const router = express.Router();

// GET all tweets
router.get("/", (req, res) => {
  res.json(getAllTweets());
});

// POST new tweet
router.post("/", validateTweet, (req, res) => {
  const { username, tweet } = req.body;

  const newTweet = {
    id: Date.now().toString(),
    username,
    tweet,
    createdAt: new Date(),
    edited: false
  };

  addTweet(newTweet);
  res.status(201).json(newTweet);
});

// PUT update tweet
router.put("/:id", validateTweet, (req, res) => {
  const success = updateTweet(req.params.id, req.body.tweet);

  if (!success) {
    return res.status(404).json({ error: "Tweet not found" });
  }

  res.json({ message: "Tweet updated" });
});

// DELETE tweet
router.delete("/:id", (req, res) => {
  deleteTweet(req.params.id);
  res.json({ message: "Tweet deleted" });
});

export default router;



