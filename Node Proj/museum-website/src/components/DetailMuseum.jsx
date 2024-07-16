import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function DetailMuseum() {
    return (
        <>
            <NavBar />
            <div style={{ padding: '70px' }}>
                <h2>About Mark Museum</h2>
                <p><strong>About this Site</strong></p>
                <p>
                    This is a collection of images, thoughts, and resources about Ancient Greece.
                    This site does not aspire to be a definitive and finite publication on the subject. Instead it exists in constant flux and evolves through time. Content is added as time allows in coherent, multi-page groupings informing one major topic at a time.
                </p>
                <p>
                    All images (with rare exceptions) are produced by the author, and essays reflect his knowledge and personal opinion as developed through research, college level coursework, historical sources, and other authoritative resources.
                </p>
                <p>
                    All content is original and every effort has been made to ensure the text accuracy of this site through extensively researched and on-site visits when possible. Direct quotes and sources are included in the text whenever necessary, and a bibliography is maintained.
                </p>
                <p>
                    Ancient-Greece.org is not affiliated with any government entity, or any other site that utilizes the words "ancient" and "greece" in the title or URL.
                </p>

                <hr />

                <h3>About the Author</h3>
                <p>
                    Thomas Sakoulas is a Professor and Chair of the Art Department at the State University of New York, at Oneonta. He earned his MFA at the Maryland Institute College of Art in Baltimore, Maryland (1994), and his BFA from Florida International University in Miami Florida.
                </p>

                <hr />

                <h3>About the Copyright</h3>
                <p>
                    All essays and images are the copyright of Ancient-Greece.org and its creator Thomas Sakoulas. No image or text may be reproduced without expressed and specific written permission by the author of Ancient-Greece.org.
                </p>

                <hr />

                <h3>Chronology and Historical Events</h3>
                <p>
                    Versions of historical events can vary considerably even in original sources, and their interpretation can span a wide gamut of opinion in the historical discourse. The most commonly accepted versions of events and interpretations are adopted here. Where scholarly opinion diverges considerably and where consultation of original sources is not available or possible, the most authoritative view (in the view of this author) is adopted.
                </p>
                <p>
                    While chronology of events and periods often varies, the most commonly accepted timelines have been adopted. In cases where the sources vary slightly, the chronology of the most authoritative (in the view of this author) publication has been adopted. In rare occasions where the time given by sources varies considerably, original sources are consulted and if no definitive dates are found notations are made to inform the viewer of the diverse views.
                </p>
                <p>
                    "BCE" (Before the Common Era) and "CE" (Common Era) has been adopted to describe chronology throughout the site instead of the popular BC and AD symbols.
                </p>

                <hr />

                <h3>How to cite this site</h3>
                <p>
                    Sakoulas, Thomas. [Web Page Title, underlined]. Ancient-Greece.org. [Date you visited the site] &lt;http://www.ancient-greece.org/[use exact address of the page you used]&gt;.
                </p>
                <p>
                    Each page's title appears on the top bar (or tab) of your browser when you visit it.
                </p>
                <p>
                    Example:
                    <br />
                    Sakoulas, Thomas. Archaic Acropolis. Ancient-Greece.org. 5/2/2022 &lt;http://www.ancient-greece.org/history/acropolis-archaic.html&gt;.
                </p>

                <hr />

                <h3>Privacy Policy</h3>
                <p>
                    The author places high value on the viewers' privacy. This server (like every other server on the Internet) collects anonymous data, like time and date of visit, URL, size of file transfer, IP address, Time Zone, referrer, browser version, and similar aggregate data that helps us optimize the performance of the site. This is the only data we have control and access to, and we never share this data with anyone. The company that provides these data is Google Analytics.
                </p>
                <p>
                    Ancient-Greece.org does not use cookies. However, the affiliates and advertisers use cookie technology. All ads that appear on our pages help offset the cost of maintaining this site (i.e., domain and hosting fees), and are served dynamically by Google AdSense. Ancient-Greece.org is not responsible for the content of the linked sites, nor does it specifically endorse external sites.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default DetailMuseum;
