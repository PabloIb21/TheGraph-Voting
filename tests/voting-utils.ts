import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  newCandidate,
  newVote
} from "../generated/Voting/Voting"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createnewCandidateEvent(
  idCandidate: BigInt,
  firstName: string,
  lastName: string,
  party: string,
  votes: BigInt
): newCandidate {
  let newCandidateEvent = changetype<newCandidate>(newMockEvent())

  newCandidateEvent.parameters = new Array()

  newCandidateEvent.parameters.push(
    new ethereum.EventParam(
      "idCandidate",
      ethereum.Value.fromUnsignedBigInt(idCandidate)
    )
  )
  newCandidateEvent.parameters.push(
    new ethereum.EventParam("firstName", ethereum.Value.fromString(firstName))
  )
  newCandidateEvent.parameters.push(
    new ethereum.EventParam("lastName", ethereum.Value.fromString(lastName))
  )
  newCandidateEvent.parameters.push(
    new ethereum.EventParam("party", ethereum.Value.fromString(party))
  )
  newCandidateEvent.parameters.push(
    new ethereum.EventParam("votes", ethereum.Value.fromUnsignedBigInt(votes))
  )

  return newCandidateEvent
}

export function createnewVoteEvent(
  idCandidate: BigInt,
  voter: Address,
  votes: BigInt
): newVote {
  let newVoteEvent = changetype<newVote>(newMockEvent())

  newVoteEvent.parameters = new Array()

  newVoteEvent.parameters.push(
    new ethereum.EventParam(
      "idCandidate",
      ethereum.Value.fromUnsignedBigInt(idCandidate)
    )
  )
  newVoteEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  newVoteEvent.parameters.push(
    new ethereum.EventParam("votes", ethereum.Value.fromUnsignedBigInt(votes))
  )

  return newVoteEvent
}
