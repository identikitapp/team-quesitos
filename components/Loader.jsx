let loaderStyles = `
    .loaderContainer {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
    }
    .loader {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-block;
        border-top: 3px solid lightgray;
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: rotation 800ms linear infinite;
    }
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const Loader = () => {
    return (
        <div className="loaderContainer">
            <span className='loader'/>
            <style jsx>{loaderStyles}</style>
        </div>

    )
}

export default Loader