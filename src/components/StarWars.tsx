import {starWarsInfo} from "../utils/constants.tsx";
import Text from "./ui/Text.tsx";

const StarWars = () => {
    return (
        <Text>{starWarsInfo}</Text>
    );
};

export default StarWars;