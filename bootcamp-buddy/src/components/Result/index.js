export function Result({ result }) {
    return (
            <div>
                <div className="result">
                    <div>
                        <h4>
                            <a href={result.URL}><img src="star.svg" height="15px"/></a>
                            <a href={result.URL}>{result.title}</a>
                        </h4>
                        <h4>{result.type}</h4>
                        <h4>{result.topic}</h4>
                    </div>
                    <p>{result.description}</p>
                </div>
                <hr />
            </div>
    )
}