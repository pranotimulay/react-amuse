import TabButton from "../TabButton";
import {EXAMPLES} from "../../data";

export default function ExamplesSection(data) {

    const topic = data.topic;

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={topic === 'components'}
                           onSelect={() => data.handleSelect('components')}>Components</TabButton> {/*React is not aware where to output this value unless configured */}
                <TabButton isSelected={topic === 'jsx'}
                           onSelect={() => data.handleSelect('jsx')}>JSX</TabButton> {/*React is not aware where to output this value unless configured */}
                <TabButton isSelected={topic === 'props'}
                           onSelect={() => data.handleSelect('props')}>Props</TabButton> {/*React is not aware where to output this value unless configured */}
                <TabButton isSelected={topic === 'state'}
                           onSelect={() => data.handleSelect('state')}>State</TabButton> {/*React is not aware where to output this value unless configured */}
            </menu>

            {!topic && <p> Please select a topic. </p>}

            {topic && (
                <>
                    <div id="tab-content"></div>
                    <h3> {EXAMPLES[topic].title}</h3><p> {EXAMPLES[topic].description}</p>
                    <pre>
                            <code>{EXAMPLES[topic].code}</code>
                        </pre>
                </>
            )}
        </section>
    );

}