// Array of blog posts (like a save file!)
const posts = [
    {
        id: 1,
        title: "Night in the woods is one of my favorite games and I hope it will be yours too",
        date: "4/18/25",
        tags: ["Narrative", "Design"],
        content: `
            <p>Night in the woods follows a college drop out Mei in their journey of self discovery. Throughout this journey you meet some of the most well written characters in gaming. From rebelious escapades to heart warming conversations this game is well worth a try</p>
        `,
        link: "#"
    },
    {
        id: 2,
        title: "Why is Team Fortress 2 still relevant?",
        date: "4/19/25",
        tags: ["Game Design", "Community"],
        content: `
            <p>What makes this 18 year old game still have an active community? For starters the game has the golden mix of high skill cieling with low skill floor. 
            An expert TF2 player can rocket jump from one end of the map to the other in under ten seconds while a beginner player can walk at enemies and shoot them with a 
            flame thrower. Not only this but Valve released their source engine code so the community can make mods or animations around the game using this code. The community is 
            very creative and have not seen an end in sight to what is possible with their imaginations. From cinematic stories to quick bits the community creates all kinds of content
            which then brings more players in who then make more content. </p>
              `
    },
    {
        id: 3,
        title: "Reflecting on an amazing console.",
        date: "4/17/25",
        tags: ["Industry", "Marketing"],
        content: `
            <p>A few days ago the adaptor from 3 color prongs to HDMI arived and I pluged in my 20 year old console. I was supprised to find it intact and running like it did all of those years ago
            I used to play SSX tricky at my cousin's house but now that I am an adult I can afford to buy it for myself. I start the game and the music takes me to a rattatui-esc flashback of sitting 
            on the floor and getting absolutly dumpsteed by my cousin. All of this is to say I love the gamecube and have for some time. Many amazing games where made for it and the controller
            is still one of the best designs our there. </p>
              `
    },

];

// Render all posts
function renderPosts() {
    const container = document.getElementById('blog-posts');
    
    posts.forEach(post => {
        const postEl = document.createElement('article');
        postEl.className = 'blog-post';
        postEl.innerHTML = `
            <header>
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </span>
                </div>
            </header>
            <div class="post-content">
                ${post.content}
            </div>
        `;
        container.appendChild(postEl);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderPosts);