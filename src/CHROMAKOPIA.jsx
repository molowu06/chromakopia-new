import React from 'react';
import styles from './KOPIA.module.css';
import { useEffect } from 'react';
import chromakopiaImage from './chromakopia-album.jpg';


const CHROMAKOPIA = () => {
    
    useEffect(() => {
        // Dynamically load the YouTube Iframe API script
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
    
        // When the script loads, set up the global YT object
        window.onYouTubeIframeAPIReady = () => {
          console.log('YouTube API Loaded');
        };
    
        return () => {
          // Cleanup the script when the component unmounts
          document.body.removeChild(script);
        };
      }, []);


    return (
    <body>  
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.heroWrapper}>
                <div className={styles.heroBackground} style={{ backgroundImage: `url(${chromakopiaImage})` }}></div>
                <div className={styles.heroText}>
                    <h1>CHROMAKOPIA</h1>
                    <p className={`${styles.tagline} ${styles.typingEffect}`}>
                        Tyler, The Creator's 8th Studio Album.
                    </p>
                </div>
            </div>

            {/*Introduction */}
            <section className={styles.section}>
               
                <div className={styles.unmasking}>
                <h2>The Unmasking</h2>
                </div>
                <p>
                    <div className = {styles.unmaskingText}>
                    CHROMAKOPIA marks the evolution of Tyler, The Creator—a fearless confrontation with identity and artistry.
                    </div>
                </p>
                
            </section>

            <section className={styles.section}>
                <div className={styles.tylerImageWrapper}>
                <img src="/tyler-creator.jpg" alt="Tyler, The Creator" className={styles.tylerImage} />
                </div>
            </section>

            {/* The Death of the Alter Egos */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>The Death of the Alter Egos</h2>
                <p className={styles.sectionText}>
                    In his past albums, Tyler has used the following alter egos as shields.               
                </p>
            </section>

            {/* Display each alter ego with an image */}
            <section className={styles.alterEgoSection}>
                <div className={styles.alterEgoContainer}>
                    <a href="https://music.apple.com/us/album/goblin-deluxe-edition/433409557" target="_blank" rel="noopener noreferrer">
                    <img src="/ace_creator.jpg" alt="Ace" className={styles.alterEgoImage} />
                    <p className={styles.alterEgoText}>Ace</p>
                    </a>
                </div>
                <div className={styles.alterEgoContainer}>
                    <a href="https://music.apple.com/us/album/wolf/600946351" target="_blank" rel="noopener noreferrer">
                    <img src="/wolf_haley.jpg" alt="Wolf Haley" className={styles.alterEgoImage} />
                    <p className={styles.alterEgoText}>Wolf Haley</p>
                    </a>
                </div>
                <div className={styles.alterEgoContainer}>
                    <a href="https://music.apple.com/us/album/cherry-bomb/983056044" target="_blank" rel="noopener noreferrer">
                    <img src="/chur bomb.jpg" alt="Chur Bomb" className={styles.alterEgoImage} />
                    <p className={styles.alterEgoText}>Chur Bomb</p>
                    </a>
                </div>
                <div className={styles.alterEgoContainer}>
                    <a href="https://music.apple.com/us/album/flower-boy/1254572564" target="_blank" rel="noopener noreferrer">
                    <img src="/flower-boy.jpg" alt="Flower Boy" className={styles.alterEgoImage} />
                    <p className={styles.alterEgoText}>Flower Boy</p>
                    </a>
                </div>
                <div className={styles.alterEgoContainer}>
                    <a href="https://music.apple.com/us/album/igor/1463409338" target="_blank" rel="noopener noreferrer">
                    <img src="/igor.jpg" alt="IGOR" className={styles.alterEgoImage} />
                    <p className={styles.alterEgoText}>IGOR</p>
                    </a>
                </div>
                <div className={styles.alterEgoContainer}>
                    <a href="https://music.apple.com/us/album/call-me-if-you-get-lost-the-estate-sale/1679454273" target="_blank" rel="noopener noreferrer">
                    <img src="/tyler-baudelaire.jpg" alt="Tyler Baudelaire" className={styles.alterEgoImage} />
                    <p className={styles.alterEgoText}>Tyler Baudelaire</p>
                    </a>
                </div>


            <section className={styles.maskSection}>
                <div className={styles.maskTextContainer}>
                    <h2 className={styles.maskTitle}>Sorry, Not Sorry Music Video</h2>
                    <p className={styles.maskText}>
                    In the 2023 "Sorry, Not Sorry" music video, Tyler symbolically kills off these 
                    alter egos, marking a pivotal shift in his career. 
                    </p>
                    <p className= {styles.triggerWarning}>*The following video contains scenes 
                    of fighting and blood. Please proceed with caution.* </p>
                </div>
                <div className={styles.videoContainer}>
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/LSIOcCcEVaE?start=179"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Sorry, Not Sorry - Tyler, The Creator"
                    ></iframe>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Themes of Self-Identity and Family</h2>
                <p className={styles.sectionText}>
                    Tyler explores themes reagarding his family relatioships and self-identity.
                </p>
            
            {/* Bonita Smith Intro */}
                <div className={styles.sectionContent}>
                    <h3 className={styles.themesTitle}>Bonita Smith: A Guiding Voice</h3>
                    <p className={styles.voiceText}>
                        Tyler's mother, Bonita Smith, serves as a guide throughout the album, embodying strength & wisdom. 
                    </p>
                    <div className={styles.audioSection}>                        
                        <p className={styles.lyrics}>
                            "You are the light. <br /> It's not on you, it's in you"
                        </p>
                    </div>

                    <div>
                        {/* Embed the YouTube video */}
                        <iframe
                            id="audioPlayer"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/9RuII0Ej2lk?start=0&end=5"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Bonita Smith Audio"
                        ></iframe>
                    </div>

                </div>



                <section className={styles.section}>
                    <div className={styles.tylerImageWrapper}>
                        <img src="/bonita-image.jpg" alt="Tyler & Bonita" className={styles.tylerImage} />
                    </div>
                </section>

            {/* Absence of Father */}
                <div className={styles.sectionContent}>
                    <h3 className={styles.themesTitle}>The Absence of His Father</h3>
                    <p className={styles.voiceText}>
                        Tyler reflects on his father's absence, revealing the lasting emotional impact in <strong>Like Him</strong>.
                    </p>
                    <div className={styles.audioSection}>
                        <p className={styles.lyrics}>
                            "Mama, I'm chasin' a ghost <br /> I don't know who he is"
                        </p>
                    </div>
                    
                    <div>
                        {/* Embed the YouTube video */}
                        <iframe
                            id="audioPlayer"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/dgUHE8wWhiE?start=62&end=70"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Bonita Smith Audio"
                        ></iframe>
                    </div>
                </div>

            {/* Societal Perceptions of Black Hair */}
                <div className={styles.sectionContent}>
                    <h3 className={styles.themesTitle}>Societal Perceptions of Black Hair</h3>
                    <p className={styles.voiceText}>
                        In <em>I Killed You</em>, Tyler critiques societal perceptions of Black hair & how it affected his self-esteem.
                    </p>
                    <div className={styles.audioSection}>
                        <p className={styles.lyrics}>
                            "Your natural state is threatening <br /> To the point that I point at myself and self-esteem"
                        </p>
                    </div>

                    <div>
                        {/* Embed the YouTube video */}
                        <iframe
                            id="audioPlayer"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Ub_rPI2D9cw?start=15&end=20"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Bonita Smith Audio"
                        ></iframe>
                    </div>
                </div>


            </section>

            {/* Musical Production and Emotional Rollercoaster */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Musical Production and Emotional Rollercoaster</h2>
                    <p className={styles.sectionText}>
                        Tyler's contrast in production styles amplifies the album's introspective themes.
                    </p>
                    {/* Tyler Producing Section */}
                    <div className={styles.tylerProducingSection}>
                    <img 
                        src="/producing.jpg" 
                        alt="Tyler producing in the studio" 
                        className={styles.producingImage} 
                    />
                </div>

            {/* Mellow Tracks */}
            <div className={styles.lyricsSection}>
                <h3 className={styles.lyricsTitle}> From Mellow Synthesized Tracks</h3>
                <p className={styles.scribeText}>
                    Songs like <em>Hey Jane</em> and <em>Like Him</em> immerse listeners in a serene, reflective atmosphere.
                </p>
                <div className={styles.lyricsContent}>
                    {/* Embedded YouTube Video */}
                    <iframe
                        src="https://www.youtube.com/embed/qFfjnPOXmUM?start=3&end=9"
                        title="Hey Jane Video"
                        className={styles.lyricsVideo} // Use this new CSS class for styling
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* Lyrics and Description */}
                    <div className={styles.lyricsText}>
                        <p className={styles.largeLyrics}>
                            "Hey, Jane, we got the news and I ain't know what to <br></br>
                            do. I didn't panic, I was comfortin' you"
                        </p>
                        <p className={styles.lyricsDescription}>
                            Mellow tracks like this provide a reflective atmosphere, highlighting Tyler’s softer, introspective side.
                        </p>
                    </div>
                </div>
            </div>

                    

            {/* Upbeat Tracks */}
                <div className={styles.lyricsSection}>
                    <h3 className={styles.lyricsTitle}>To Upbeat Electrifying Ones</h3>
                    <p className={styles.scribeText}>
                        Tracks like <em>Rah Tah Tah</em> and <em>Sticky</em> exude high-energy vibes, contrasting the mellow tracks.
                    </p>

                    <div className={styles.lyricsContent}>
                        {/* Lyrics and Description */}
                        <div className={styles.lyricsText}>
                            <p className={styles.largeLyrics}>
                                "She ain't never met no one who talk like that <br></br>
                                And if you hang up on a n****, b****, I'll call right back"
                            </p>
                            <p className={styles.lyricsDescription}>
                                Tracks like this provide an energetic contrast to the softer ones, showcasing Tyler’s versatility in production.
                            </p>
                        </div>

                        {/* Embedded YouTube Video */}
                        <iframe
                            src="https://www.youtube.com/embed/R_clisSImS4?start=69&end=75"
                            title="Rah Tah Tah Video"
                            className={styles.lyricsVideo} // Use this new CSS class for styling
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                
            </section>

            {/* Tyler's Mental and Emotional Growth */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Tyler’s Mental & Emotional Growth Lyrically</h2>
                    <p className={styles.sectionText}>
                        Now 33, <em>CHROMAKOPIA</em> demonstrates Tyler's evolution from his early playful,
                        eccentric persona to a mature, emotionally aware artist.
                    </p>

                {/* Old Lyrics Section */}
                    <div className={styles.lyricsSection}>
                        <h3 className={styles.lyricsTitle}>The Early Days: Immature Lyrics</h3>
                            <div className={styles.lyricsContent}>
                                <img
                                    src="/early-tyler.jpg"
                                    alt="Early Tyler, The Creator"
                                    className={styles.lyricsImage}
                                />
                                <div className={styles.lyricsText}>
                                    <p className={styles.largeLyrics}>
                                        "La-di-da-di, I'm going harder than coming out the closet <br></br>
                                        to conservative Christian fathers"
                                    </p>
                                    <p className={styles.lyricsDescription}>
                                        - From "Deathcamp" <br></br>
                                        <em>One of Tyler's famous toss-away lines</em>
                                    </p>
                        
                                </div>
                            </div>

                            <div className={styles.lyricsContent}>
                                <img
                                    src="/young-tyler.jpg"
                                    alt="Early Tyler, The Creator"
                                    className={styles.secondLyricsImage}
                                />
                                <div className={styles.lyricsText}>
                                    <p className={styles.largeLyrics}>
                                     "It's really awkward to know that a bunch of kids do adore me <br></br> 
                                     It's like I fathered these f*ckers <br></br> So you won't find me on Maury"
                                    </p>
                                    <p className={styles.lyricsDescription}>
                                        - From "Sam Is Dead" <br></br>
                                        <em>These lyrics are bold, playful, and brash, with a touch of humor & self-reflection </em>
                                    </p>
                        
                                </div>
                            </div>
                    </div>

                {/* Tomorrow Analysis */}
                    <div className={styles.lyricsSection}>
                        <h3 className={styles.lyricsTitle}> To A New Perspective: "Tomorrow"</h3>
                        <div className={styles.lyricsContent}>
                             <img
                                src="/tomorrow-pic.jpg"
                                alt="Tyler, The Creator 2023"
                                className={styles.lyricsImage}
                            />
                           <div className={styles.lyricsText}>
                                <p className={styles.largeLyrics}>
                                    "They sharin' pictures of these moments, shit is really cute <br></br>
                                    And all I got is photos of my 'Rari and some silly suits"
                                </p>
                                <p className={styles.lyricsDescription}>
                                    - From "Tomorrow" <br></br>
                                    <em>Tyler reflects on his isolation & longing for fulfillment beyond material pursuits, like his peers</em>
                                </p>
                            
                            </div>
                        </div>
                    </div>

                {/* Darling, I Analysis */}
                    <div className={styles.lyricsSection}>
                            <h3 className={styles.lyricsTitle}>Navigating Relationships: "Darling, I"</h3>
                            <div className={styles.lyricsContent}>
                             <img
                                src="/darling-i.jpg"
                                alt="chromakopia pic"
                                className={styles.lyricsImage}
                            />
                           <div className={styles.lyricsText}>
                                <p className={styles.largeLyrics}>
                                    "Life is short, but forever is so god***n long <br></br>
                                    I like alone time, I'm on my own time <br></br>
                                    I love this girl, though"
                                </p>
                                <p className={styles.lyricsDescription}>
                                    - From "Darling, I" <br></br>
                                    <em>Tyler reveals his uncertainty about dedicating himself to one person</em>
                                </p>
                            
                            </div>
                        </div>
                    </div>
            </section>
            <div className={styles.climaxSection}>
                <h3 className={styles.sectionTitle}>The Climax: “Take Your Mask Off”</h3>
                <p className={styles.sectionText}>
                    In this song, Tyler urges people to confront their vulnerabilities and embrace their true selves. <br></br> 
                    He hopes that people can find comfort within themselves, just as he did.
                </p>

                        <p className={styles.climaxLyrics}>
                            "And I hope you find yourself <br></br>
                            And I hope you find yourself <br></br>
                            And I hope you take your mask off"
                        </p>
                    

                <div className={styles.videoContainer}>
                    {/* Embed the YouTube video */}
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/JPOjiXoPmOk?start=42&end=52"
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen
                        title="Take Your Mask Off - Tyler, The Creator"
                    ></iframe>
                </div>

             
                <section className={styles.climaxSection}>
                    <div className={styles.tylerImageWrapper}>
                        <img src="/tyler-mask.jpg" alt="Tyler, The Creator" className={styles.secondTylerImage} />
                    </div>
                </section>
            </div>

            <section className={styles.authorNoteSection}>
                <h2 className={styles.authorNoteTitle}>Author's Note</h2>
                <div className={styles.authorNoteContent}>
                    <p className={styles.authorNoteText}>
                        I created an interactive, scrollable website for this project based on my media review of <em>CHROMAKOPIA</em>, 
                        Tyler, The Creator’s latest album. My primary modes of communication are visual, linguistic, spatial, and audio. 
                        These modes allowed me to engage with my audience differently and help convey the depth of Tyler’s artistic growth. 
                        I focused on visual elements such as colors, fonts, pictures, and videos to set the tone while using concise text to provide key information. 
                        Audio components, like music from <em>CHROMAKOPIA</em>, were also crucial in demonstrating the album's sound. The spatial design of the website was equally important, as the elements were organized in a way that guided visitors through the content smoothly.
                    </p>
                    <p className={styles.authorNoteText}>
                        I selected these modes because they are the most appealing to me. As someone very passionate about the album and its themes, 
                        I wanted to illustrate my analysis to reflect my enthusiasm and emotional connection to the material. 
                        The primary message I wanted to convey was Tyler's growth as an artist and how <em>CHROMAKOPIA</em>represents a monumental turning point in his career.
                         By remediating my original media essay into this digital format, I aimed to visually demonstrate the growth and development I described in my analysis. 
                         This remediation helped me do this by allowing me to pair words with visuals and sounds, bringing the depth of the album to life for my audience in a way that text alone could not.
                    </p>
                    <p className={styles.authorNoteText}>
                        My creative decisions were meant to make the website feel as immersive as possible so visitors could experience the album’s journey alongside my written interpretations. 
                        I intentionally designed the website to have a gradient that transitions from the signature <em>CHROMAKOPIA</em> green to black as you scroll down. 
                        Additionally, I structured the website to mirror the flow of my original paper, focusing on interactivity and digestible text. By using short blurbs of text, I ensured that users 
                        wouldn’t be overwhelmed by too much information and could easily navigate through the key points.
                    </p>
                    <p className={styles.authorNoteText}>
                        Overall, I had a lot of fun with this project, especially after figuring out the design and how everything would fit together. 
                        Although I couldn’t incorporate every detail from my original paper—mainly because I underestimated how much work coding an entire website would be—I am still satisfied with the final result.
                         I used JavaScript, React, HTML, and CSS to bring everything to life. Some parts of my creative vision, especially those involving design elements, were challenging due to my basic knowledge of CSS. 
                         Still, through trial and error and some troubleshooting help from ChatGPT, I overcame those hurdles. This project allowed me to learn and grow in my technical skills while also giving me a platform to 
                         express my passion for <em>CHROMAKOPIA</em> and Tyler’s evolution as an artist.
                    </p>
                </div>
            </section>

        </section>
        </div>
    </body>  
    );
};

export default CHROMAKOPIA;