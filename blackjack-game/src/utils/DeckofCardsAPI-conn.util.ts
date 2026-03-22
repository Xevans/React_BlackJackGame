import axios from "axios";
import type { DeckInfo } from "../interfaces/card-interfaces";
// Instantiate a deck of cards
// handle response to maintain connection
// consider a base case should success member return false 
export async function NewDeck() {
    try {
        const response = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${1}`);
        console.log(response.data);
        return response.data as DeckInfo;
        /**
         data = {
            "success": bool,
            "deck_id": string,
            "shuffled": bool,
            "remaining": int
        }
 
         */
    } catch (error) {
        console.error(error);
    }
}

// shuffle deck
export async function ShuffleDeck(deck_id: number) {
    try {
        const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/?remaining=true`);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}



// draw card from deck to hand [associate card with local obj or rely exclusively on remote api's hand (associate id with play. would need an obj anywway)]
    // (verify) This function will need to call AddToPile where piles represent the plays' hands including dealer.
    // after the cards are drawn, call the pile api to add the cards to the necessary pile.

// show hand [defer to game logic]

// send cards back to deck [game logic updates plays objs hands to be cleared]
