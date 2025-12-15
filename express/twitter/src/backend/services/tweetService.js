import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "../data/tweets.json");

function readTweets() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

function writeTweets(tweets) {
  fs.writeFileSync(dataPath, JSON.stringify(tweets, null, 2));
}

export function getAllTweets() {
  return readTweets();
}

export function addTweet(tweet) {
  const tweets = readTweets();
  tweets.push(tweet);
  writeTweets(tweets);
}

export function updateTweet(id, updatedText) {
  const tweets = readTweets();
  const index = tweets.findIndex(t => t.id === id);
  if (index === -1) return false;

  tweets[index].tweet = updatedText;
  tweets[index].edited = true;
  writeTweets(tweets);
  return true;
}

export function deleteTweet(id) {
  const tweets = readTweets();
  const filtered = tweets.filter(t => t.id !== id);
  writeTweets(filtered);
}
