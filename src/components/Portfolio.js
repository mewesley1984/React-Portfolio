import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
            <div className="category work">
               
                <h2 id="my-work">My Work</h2>
            </div>
            <div className="content work">

                <a href="https://github.com/Trevor-McGuire/GigPub-2.0">
                    <div className="card gigpub2">
                        <h3>GigPub-2.0</h3>
                    </div>
                  </a>
                
                <a href="https://mewesley1984.github.io/GitPub/">
                    <div className="card gigpub">
                        <h3>GigPub</h3>
                    </div>
                </a>
              
                <a href="https://mewesley1984.github.io/prework-study-guide/">
                    <div className="card prework">
                        <h3>Prework Study Guide</h3>
                    </div>
                </a>
               
                <a href="https://github.com/mewesley1984/Week-1-Mini-Project">
                    <div className="card mini">
                        <h3>Mini Project</h3>
                    </div>
                </a>
            </div>
        </section>
  )
}

export { Portfolio };