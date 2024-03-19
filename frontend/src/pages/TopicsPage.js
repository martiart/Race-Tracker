import React from "react";
function TopicsPage() {
    return (
    <>
     <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#servers">Servers</a>
                <a href="#design">Design</a>
                <a href="#images">Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#javaScript">JavaScript</a>
            </nav>
                <article>
                    {/* <!-- <form action="/submit" method="POST"></form> --> */}
                    <article id="servers"></article>
                    <h3>Web Servers</h3>
                    {/* <!-- 1. Explain what the concept of a designated home page means as it relates to a website's and server's index file. --> */}
                    <p>
                        When it comes to the concept of a designated home page, there is a direct correlation to a website's and server's index file. 
                        The majority of web servers are set so that the request of, /, leads to the file at that path (i.e., index.html, default.html, index.js, index.php, etc.). 
                        By doing this, a user does not need to specify a path to a resource in the URL. A user can instead access the root URL and be presented with the <strong>designated home page</strong>.
                    </p>
                    {/* <!-- 1. Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen. What is different about the file's details when viewed from the web server versus the local computer?--> */}
                    <p>
                        The browser's Web Dev/Inspector Network tab output screen provides details of network activity of a webpage. 
                        On this screen, a developer can view things such as: request URL, request method, status code, remote address, response headers, request headers. 
                        However, the detailed information that is available to a developer will differ depending on if the file is viewed from the local computer versus the web server. 
                        When a file is viewed from the local computer, it does not have to interact with a <strong>server</strong>. 
                        Therefore, not all the details under the General, Response Headers, and Request Headers will be available since it is not appropriate. 
                        When a file is viewed from the web server, it is directly communicating with a server. 
                        Therefore, all details regarding the communication with the server will be available for display.
                    </p>
                    {/* <!-- 2. Explain why the favicon.ico file has a status 200, but the main.css and main.js files status 400. --> */}
                    <p>
                        The favicon.ico file has a status code 200 because the request was successful. 
                        This means the information needed to satisfy a <strong>status code</strong> 200 was available. 
                        In this case, the use of the ENGR web server helped favicon.ico satisfy the requirements for a <strong>status code</strong> 200. 
                        However, the file path ending in main.js or main.css do not exist. 
                        Due to the path not existing, the return code is 404. 
                        For example, the URL is https://web.engr.oregonstate.edu/~martiart/a1-martiart. 
                        In order for main.js to work, something would have to exist at https://web.engr.oregonstate.edu/~martiart/a1-martiart/main.js.
                    </p>
                    {/* <!-- Explain the parts of the URL to your web file. What is the scheme, the subdomain, the host domain, and the resources? --> */}
                    <p>
                        {/* <!-- The URL for the Web Dev Concepts page is: https://web.engr.oregonstate.edu/~martiart/a1-martiart/.  --> */}
                        For this URL, the <strong>scheme</strong> is “https”. The scheme is responsible for designating the protocol a web client must use to request a resource. In this case, it is HTTPS, which is encrypted.
                        The <strong>subdomain</strong> is “web”. The subdomain is a section within the <strong>host domain</strong>. 
                        The host domain is “engr.oregonstate.edu”. This is the location of where the content is hosted.
                        The resources are /~martiart/a1-martiart/. This facilitates a direct path to a specific resource or file. 
                    </p>
                </article>
                <article>
                    <article id="design"></article>
                    <h3>Frontend Design</h3>
                        {/* <!-- The concept of frontend design, in a <p> paragraph. --> */}
                            <p>
                                The concept of frontend design holds a lot of weight when it comes to building applications. This is because any form of neglect in the creation process can greatly affect the user experience. 
                                For this very reason, Frontend design focuses on creating the best user experience possible. This includes the creation of an efficient visual design of the page, GUI and interactive experience. 
                                In order to achieve this and due to the constant change in front end development, there is constant research being conducted to ensure the best possible application is being put out. 
                            </p>
                        {/* <!-- The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions. --> */}
                            <dl>
                                <dt><strong>Effective</strong></dt>
                                <dd>The topic of effectiveness focuses on ensuring that the user will get what they wanted.</dd>
                                <dt><strong>Efficient</strong></dt>
                                <dd>The topic of effectiveness focuses on ensuring that the user will be able to perform a given task in the fewest amount of steps.</dd>
                                <dt><strong>Easy to Navigate</strong></dt>
                                <dd>The topic of Easy Navigation focuses on ensuring that the user will be able to immediately understand not only how to achieve their goal, but also be able to replicate it.</dd>
                                <dt><strong>Error-free</strong></dt>
                                <dd>The topic of being Error-free focuses on ensuring that enough research was conducted to find any possible issues a user may have with the application. </dd>
                                <dt><strong>Enjoyable/Engaging</strong></dt>
                                <dd>The topic of being Enjoyable and Engaging focuses on ensuring that the application fully meets the user's needs. This includes content and design. If this is achieved, the likelihood of the user returning goes up.</dd>
                            </dl>
                        {/* <!-- The purpose of each of the page layout tags, in a <p> paragraph. 📌 Focus on the 6 we used in this assignment. --> */}
                            <p>
                                {/* <!-- <meta> <header> <main> <section> <article> <footer>--> */}
                                    This assignment had the addition of 6-page layout tags. The tags are: <strong>&lt;meta&gt;</strong>, <strong>&lt;header&gt;</strong>, <strong>&lt;main&gt;</strong>, <strong>&lt;section&gt;</strong>, <strong>&lt;article&gt;</strong>, <strong>&lt;footer&gt;</strong>.
                                    The <strong>&lt;meta&gt;</strong> tag helps control search engine interaction. The “noindex” portion of the tag instructs the search engine to not index the content on the page. The “noarchive” portion prevents search engines from storing a cached copy of the page. Finally, the “nofollow” portion prevents the search engine from following any links on the page. 
                                    The <strong>&lt;header&gt;</strong> tag contains the banner for the page. The header lets the user know they are on the same site. Therefore, the header is typically carried over from one page to another. 
                                    The <strong>&lt;main&gt;</strong> helps control page layout flow. This is done by categorizing the main content of a page into its own section. Additionally, it helps structure the document outline and highlight the fact that it contains the main content of the page. 
                                    The <strong>&lt;section&gt;</strong> is used to group content that is related. If the content is not all related, the <strong>&lt;article&gt;</strong> tag should be used instead. 
                                    The <strong>&lt;article&gt;</strong> is used for a single specific topic within the <strong>&lt;section&gt;</strong> tag. The <strong>&lt;section&gt;</strong> tag will use a second-level-headline to help specify the topic. 
                                    The <strong>&lt;footer&gt;</strong> contains important information such as: contact information, legal information, and links important to the pages. 
                            </p>
                        {/* <!-- How anchors link to external content, internal content, and from page-to-page, in an <ol> ordered list. --> */}
                            <ol>
                                <li>
                                    Anchors link to external content using the anchor element, <strong>&lt;a&gt;</strong>. The information within the anchor element describes the link that will be navigated to after being clicked. The href attribute specifies the URL that will be navigated to. 
                                </li>
                                <li>
                                    Anchors link to internal content using the anchor element <strong>&lt;article&gt;</strong> and the attribute “id”. Then the tag using the “id” attribute can be referenced using <strong>&lt;a&gt;</strong>, href attribute and a hashtag to define the reference. 
                                </li>
                                <li>
                                    Anchors link from page-to-page by using the <strong>&lt;nav&gt;</strong> tag, the anchor element <strong>&lt;a&gt;</strong> and the href attribute. 
                                </li>
                            </ol>
                </article>
                <article>
                    <article id="images"></article>
                    <h3>Optimizing Images</h3>
                    <p>
                        The six major specifications for web images include a descriptive file name, small file size, exact dimensions, correct file format, reduced resolution and color mode. 
                        A descriptive file name helps search engine optimization. Small file sizes ensure fast loading times. Exact dimensions prevent unnecessary load times.
                        Correct file formats optimize visual representations. Lastly, reduced resolution accommodates different monitors, and color mode specifications maintain color accuracy. 
                        These specifications come together to balance image quality, loading speed, and user accessibility on the web.
                    </p>
                    <p>
                        PNG files are typically best for line-art. The reason for this is that they have an alpha channel, or true transparency. Due to this characteristic, they can be placed over many colors without sacrificing quality. They also show through transparent or blank areas.
                        Another option for lineart is SVG. This has some benefits to PNG files. For instance, SVG files are vector based and are mathematicaly derived. This means they can be expanded without losing quality.
                        JPG files are the best for photos, and they are actually exclusive to photos. The reason for this is that photographs typically have great detail and color. This typically leads to large file sizes that are too big for the web. With a JPG, a user can resize and compress the file to the load being pushed onto the server.
                        Another good option for photos is WebP. It converts to a smaller file size resulting in faster load times and better image quality. However, the issue with Webp is browser compatibility.
                    </p>
                </article>
                <article>
                    <article id="favicons"></article>
                    <h3>Favicons</h3>
                    Favicons are visual identifiers for websites and apps across browsers and devices. They come from logos and can be in .GIF, .PNG, .ICO, or .SVG formats. 
                    The Favicon Generator optimizes them for different kinds of devices, creating multiple files. The browser recognizes these files, saves the favicon on bookmarks, favorites lists, and device screens.
                     However, different browsers on various devices may display favicons differently, as seen with Opera and Chrome on Android phones.
                </article>
                <article>
                    <article id="css"></article>
                    <h3> Cascading Stylesheets</h3>
                    <p>
                        Stylesheets are essential for maintaining a consistent and visually appealing design across a website or app. 
                        They allow for the separation of content from presentation, making it easier to manage and update the site's appearance.
                         Stylesheets enhance the user experience by providing a more organized and readable layout. They also support responsiveness, enabling the adaptation of content to different screen sizes and devices.
                    </p>
                    <p>
                       Five ways to incorporate style are: external CSS files, importing files, embedding files, inline styles within elements, and using JavaScript.
                       External CSS styles are important for maintaining consistent styles across a website or app. This styling method is modular and easily maintainable.
                       Embedding styles in the HTML file allows for quick style changes. It offers flexibility for specific elements but should be used sparingly due to its limited scalability.
                       Inline styles within elements are useful for overriding broader styles. They offer a targeted approach for unique styling requirements.
                       Importing specific stylesheets allows programmers to customize styles for individual parts of the application or website. This ensures flexibility and efficient management.
                       JavaScript-based styling facilitates dynamic updates to the Document Object Model. This allows for responsive and interactive interfaces. 
                    </p>
                </article>
                <article>
                    <article id="javaScript"></article>
                    <h3>JavaScript</h3>
                    <p>JavaScript has several data types, including:</p>
                    <ul>
                        <li>Numbers</li>
                        <li>Booleans</li>
                        <li>Strings</li>
                        <li>Symbols</li>
                        <li>Special values: undefined and null</li>
                        <li>Objects</li>
                    </ul>
                    <p>Objects and arrays are important data structures in JavaScript. 
                        Objects are collections of key-value pairs, while arrays are ordered lists of elements. 
                        JSON (JavaScript Object Notation) is a popular data interchange format that is based on the object syntax of JavaScript</p>
                    
                    <p>Conditionals, such as if statements and switch statements, allow you to execute different code blocks based on certain conditions. 
                        Loops, such as for loops, while loops, and do-while loops, allow you to execute a block of code repeatedly until a certain condition is met.
                    </p>
                    <p>Object-oriented programming (OOP) is a way of writing code that focuses on using "objects" to store both data and actions. 
                        It's like organizing your code into building blocks that can be easily reused and connected together.
                    </p>
                    <p>
                        Functional programming is a way of writing code that sees tasks as solving math problems. 
                        It avoids changing information once it's set. 
                        It prefers using simple functions, special functions that work with other functions, and combining functions in new ways.</p>
                    </article>
    </>
    );
}
export default TopicsPage;