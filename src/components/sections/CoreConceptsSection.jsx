import CoreConcepts from "../CoreConcepts";
import {CORE_CONCEPTS} from "../../data";

export default function CoreConceptsSection(data) {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) =>
                    (<CoreConcepts key={conceptItem.title} {...conceptItem} />)
                )}

            </ul>
        </section>
    );
}



