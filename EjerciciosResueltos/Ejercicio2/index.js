"use strict";

function max(nums) {
  max = 0;
  for(let idx in nums) {
    if(nums[idx] > max) {
      max = nums[idx];
    }
  }
  return max;
}

function votesCounting(votes) {
  // let counting = Array(Math.max(...votes) + 1).fill(0);
  let counting = Array(max(votes) + 1).fill(0);
  for(let idx in votes) {
    counting[votes[idx]]++;
  }
  let maxVotes = 0;
  let winnerID = 0;
  for(let id in counting) {
    if(counting[id] > maxVotes) {
      maxVotes = counting[id];
      winnerID = id;
    }
  }
  return {
    id: winnerID,
    votes: maxVotes
  }
}

const votes = [1, 1, 2, 3, 5, 2, 2, 10, 10, 10, 10];
const winner = votesCounting(votes);
console.log(winner);