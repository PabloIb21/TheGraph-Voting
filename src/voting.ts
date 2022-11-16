import {
  newCandidate,
  newVote,
} from "../generated/Voting/Voting"
import { Candidate } from "../generated/schema";

export function handleNewCandidate(event: newCandidate): void {
  const candidateId = event.params.idCandidate.toString();

  let candidate = new Candidate(candidateId);

  candidate.idCandidate = event.params.idCandidate;
  candidate.firstName = event.params.firstName;
  candidate.lastName = event.params.lastName;
  candidate.party = event.params.party;
  candidate.votes = event.params.votes;

  candidate.save();
}

export function handleNewVote(event: newVote): void {
  const candidateId = event.params.idCandidate.toString();

  let candidate = Candidate.load(candidateId);

  if (candidate) {
    candidate.votes = event.params.votes;

    candidate.save();
  }
}
