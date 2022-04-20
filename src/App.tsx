import React from 'react'
import './app.css'
import Counter from './Counter'
import Todo from './Todo'


// const title = (<h2 style={{textAlign: 'center', marginTop: 20}}>React MobX</h2>)


export function App() {
    return (
        <>
            {/*{title}*/}
            <h1 style={{textAlign: 'center', marginTop: 20}}>Counter MobX</h1>
            <div className="center">
                <Counter/>
                <Todo/>
            </div>
        </>
    )
}

