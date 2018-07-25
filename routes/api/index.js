const express = require('express')
const router = express.Router()

const Polls = require('./Polls');
const Emotions = require('./EmotionStat');
const Votes = require('./Votes');
const Comments = require('./Comments');

router.route('/polls')
    .get(Polls.getPolls)
    .post(Polls.postPolls)
    .delete(Polls.removePolls)

router.route('/polls/:id')
    .get(Polls.getPoll)
    .put(Polls.putPoll)
    .delete(Polls.removePoll)

router.route('/emotions')
    .get(Emotions.getEmotions)
    .post(Emotions.postEmotions)
    .delete(Emotions.removeEmotions)

router.route('/emotions/:id')
    .get(Emotions.getEmotion)
    .put(Emotions.putEmotion)
    .delete(Emotions.removeEmotion)

router.route('/comments')
    .get(Comments.getComments)
    .post(Comments.postComments)
    .delete(Comments.removeComments)

router.route('/comments/:userId/:pollId')
    .get(Comments.getComment)
    .put(Comments.putComment)
    .delete(Comments.removeComment)

router.route('/votes')
    .get(Votes.getVotes)
    .post(Votes.postVotes)
    .delete(Votes.removeVotes)

router.route('/votes/:pollId/:emoType')
    .get(Votes.getVote)
    .put(Votes.putVote)
    .delete(Votes.removeVote)

module.exports = router