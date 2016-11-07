/**
 * Created by ddn on 16/11/7.
 */


function tick(){
    const element = (
        <div>
            <h1>hello world</h1>
            <h2>it is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    )
}
setInterval(tick, 1000);