import { NewDeck } from "../../utils/DeckofCardsAPI-conn.util";

function Home() {

    const getNewDeck = async () => {
        try {
            NewDeck();
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
        </>
    )
}

export default Home;