import { NewDeck } from "../../utils/DeckofCardsAPI-conn.util";
import type { DeckInfo } from "../../interfaces/card-interfaces";
import { useState } from "react";


function Home() {

    // add usestate to hold deck data.
    //fix what ever is causing typescript to not see the interface file

    const [DeckState, setDeckState] = useState<DeckInfo>(
        {
            success: true,
            deck_id: "-1",
            shuffled: false,
            remaining: -1
        }
    );

    const getNewDeck = async () => {
        try {
            const new_deck = await NewDeck() as DeckInfo;
            
            if (new_deck) {
                setDeckState(new_deck);
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <button onClick={() => getNewDeck()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get new deck
            </button>

            { DeckState && 
                <>
                    <h1>
                        {/* Enter deck data but need to store the obj somewhere*/}
                    </h1>
                </>
            }
        </>
    )
}

export default Home;