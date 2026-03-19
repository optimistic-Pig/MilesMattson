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
        date: "5/6/25",
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
        date: "7/17/25",
        tags: ["Industry", "Marketing"],
        content: `
            <p>A few days ago the adaptor from 3 color prongs to HDMI arived and I pluged in my 20 year old console. I was supprised to find it intact and running like it did all of those years ago
            I used to play SSX tricky at my cousin's house but now that I am an adult I can afford to buy it for myself. I start the game and the music takes me to a rattatui-esc flashback of sitting 
            on the floor and getting absolutly dumpsteed by my cousin. All of this is to say I love the gamecube and have for some time. Many amazing games where made for it and the controller
            is still one of the best designs our there. </p>
              `
    },
    {
        id: 4,
        title: "Game Critique: Doom",
        date: "1/25/26",
        tags: ["Game Design", "Game Critique"],
        content: `
            <p>
            Right away I noticed the main actions (verbs) taken by the player with a corresponding physical input in the game are shooting and running. In the game you shoot enemies dealing damage thus slaying the enemy, this relation is inversely true as well enemies can damage you. When you take damage from the enemies, it will lead you to explore in the hopes of finding items such as health, armor, ammo, or new weapons, each of which increases your ability to deal with enemies. The development of these actions arises throughout the levels. The ammo you pick up at first is for your pistol. But when the level gives you shotgun ammo before you get the shotgun this both builds excitement as there is a stronger weapon in the vicinity, while also setting up so when the player gets the shotgun they can shoot without worrying of running out of ammo because they are stocked getting to it. Furthermore environmental story telling is prevalent as before you see any enemies you encounter other marines killed by the demons. This builds a moment of suspense before the first encounter. The last object in the game is the environment, and the level is designed in such a way where you can cover behind the left side of the door taking pot shots at those enemies. This builds as you get new weapons and encounter new enemies. The combination of enemies  in conjunction with the level design provides the complexity of interactions. At first it is mostly shooting demons that shoot back at you in open or closed rooms. However it evolves into ranged and melee enemies chasing you through multiple rooms with a combination of tight corridors and open space. As a player it is advantageous to utilize both. Pick off certain enemies and avoid projectiles in the open, or condense and mow through enemies in a tight space at the cost of them being able to kill you quickly.
                     
            Another and most synergetic advancement is the addition of new weapons. As more weapons are added to your arsenal and you are faced with more difficult enemies then a new layer of complexity arises as you have to balance your ammunition and save the right weapons for the right enemies. When you get all of the weapons then you would want to save the rockets for really difficult enemies, but for other enemies what is the best weapon to use? That depends on the context of the situation. The area you are in or the level as a whole plays a large part because certain weapons are better equipped for the open or closed spaces than others. For instance the chain/minigun is great for close corridors but it is easy to miss and waste ammo in the open. Another element is the enemies you are fighting, mainly if they are ranged or melee. A melee enemy could be taken out with a chainsaw, but if there are multiple then it would be best to take it out quickly with a chain gun then move and make space so the ranged enemies have more difficulty hitting you. 
            The combination of actions the player can take builds upon itself as the systems in place expand with more levels, more enemies, and more weapons. Whenever one is added the others are improved with it making a synergistic playstyle that still holds to this day.
            </p>
              `
    },

    {
        id: 5,
        title: "Game Critique: Mini Metro",
        date: "2/8/26",
        tags: ["Game Design", "Game Critique"],
        content: `
            <p>Mini Metro’s difficulty is interesting as it stems from both organization and randomization. Having good organizational skills is essential for playing longer than ten minutes. Meanwhile new stops are randomly added and it is essential to readjust the routes to compensate. This makes a state where the player is constantly reorganizing their routes to make sure any one station does not get overcrowded, and avoid a game over. However, personally I found there is a bit too much randomization as if stops are added across a river the only way to get to it is to use an existing tunnel or make a new one (which have a chance to be awarded at the end of the day but it comes at the opportunity cost of more passengers on a train or other rewards). So every time I lost it was either directly or indirectly because a stop was randomly placed across the river and I was not prepared for it. I understand that a part of the strategy in the game is to be prepared for anything, however when it comes at the cost of further progression it can feel like some runs are more dependent on luck than organizational skills. Overall I enjoyed the game, and thought the tutorial was an excellent introduction to how the game works allowing the player to figure out for themselves what to do while not allowing them to do anything but the "correct" choices as they make routes. With that being said, however, I would not play it again. I understand how the constant risk of failure can be appealing, but for me it was too stressful to be enjoyable.  </p>
              `
    },

    {
        id: 6,
        title: "Game Critique: Wheels of Aurelia",
        date: "2/17/26",
        tags: ["Game Design", "Game Critique"],
        content: `
        <p>
            Although in Wheels of Aurelia you are constantly making choices, only a few of them give agency to the player. Firstly, some choices will appear on the top left to signify a branching path. These meaningful choices are either made through dialogue or by choosing the route you are driving.  While the player is aware of all of their choices, not all of them have gameplay consequences, most are two ways of saying the same thing. Furthermore the only moments you as a player are reminded of your choices is at the end of the game with the screens explaining any one of the sixteen endings.  However every choice is permanent and uncertain which gives the illusion of meaningful choice. With that being said there is a good deal of agency in the game with certain choices affecting the ending the player gets. Some of the most meaningful choices are where you drive and if you stick with Olga (The 1st passenger in the game) or drop her off. The game discusses a wide range of topics from neofascism to abortion. Each of which with a simple enough choice either neutral or against. Most of the dialogue options do not affect the ending you get but do affect which dialogue options you can get. For this reason even though there are a good amount of choices that have agency in the game it is diluted with many that do not give agency. This led to me not fully understanding which choices are important as opposed to vanity until a few playthroughs in.
        </p> `
    },

    {
        id: 7,
        title: "Game Critique: Citizen Sleeper",
        date: "3/7/26",
        tags: ["Game Design", "Game Critique"],
        content: `
        <p>
            Citizen Sleeper is a game where you roll dice and survive in a mega space station. The game utilizes dramatic agency by rolling six-sided dice and allocating those rolls across the station to perform different actions. Interestingly enough despite what die is put in there is a chance of different results; either a success, neutral, or failure. The only time an outcome is certain is when you roll a six which would be an automatic success result. This exercises dramatic agency as the player dictates where to allocate their better rolls and where to put their low results. This gives the player a sense where the station is falling apart and they are only able to help so much each day, even when you have access to all of the dice. This sense is prevalent as I am usually a “save scummer” however when playing the game I never found the desire to save scum because ultimately reloading a day to get the best results is both boring and does not guarantee a successful result unless the die is a six.
	        The game is encoded to represent cyberpunk themes such as capitalism given free reign and transhumanism as the player transcends their initial human body into the consciousness of a new digital consciousness which controls a mechanised body. This is decoded through the dialogue and art-style which expresses the classic cyberpunk athletic of “high tech, low life” as large structures in the station are prevalent and certainly futuristic. However the residents are not particularly well off showing the range of working class from drone piloted scavengers to augmented individuals trying to build a tree house.
        </p> `
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