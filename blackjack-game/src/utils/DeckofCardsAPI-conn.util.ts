import axios from "axios";

// Instantiate a deck of cards
// handle response to maintain connection
// consider a base case should success member return false 
export async function NewDeck() {
    try {
        const response = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${1}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}