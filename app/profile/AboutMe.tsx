export default function AboutMe() {
    return (
        <section id="profile" className="h-[750px] w-[580px] flex text-[#252525] p-6">
            <article>  
                <div className="h-auto w-auto flex-wrap justify-start">
                        <h1 className="text-6xl font-semibold">Hello, I am Alexis!</h1>
                        <h5 className="text-3xl line-clamp-3">Engineer Software</h5>
                    <br/><p className="line-clamp-3 px-2">Analyzing, learning and building is what I've been doing since I was 15. Developing software is just the fruit of continuing to do this consistently and I love it. 
                    <br/>Obviously my family is a priority.</p>
                </div>
            </article>
        </section>
    )
}