import { useState } from 'react'

function App() {
    const [counter, setCounter] = React.useState(0);

    function increment(){
        setCounter(counter + 1);
    }
    
    function decrement(){
        setCounter(counter - 1);
    }

    function reset(){
        setCounter(0);
    }

    return (
        <div>
            <MyButton text={'-'} onClick={decrement} counter={counter} />
            <MyCounter counter={counter} />
            <MyButton text={'+'} onClick={increment} counter={counter} />
            <MyButton text={'Reset!'} onClick={reset} counter={counter} />
        </div>
    )
}

export default App
