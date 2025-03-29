
// First part

async function fetchUserProfile () {
    try {
        const response = await fetch('https://api.example.com/user/profile');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function fetchUserPosts () {  
    try {
        const response = await fetch('https://api.example.com/user/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function fetchUserComments () {
    try {
        const response = await fetch('https://api.example.com/user/comments');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
     

// Second part

async function fetchUserData () {   
    try {
        const [profile, posts, comments] = await Promise.all([
            fetchUserProfile(),
            fetchUserPosts(),
            fetchUserComments()
        ]);
        console.log('Profile:', profile);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUserProfile (profile) {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = `
        <h2>${profile.name}</h2>
        <p>${profile.email}</p>
    `;
}  

function displayUserPosts (posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = posts.map(post => `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
    `).join('');
console.error('There was a problem with fetching the posts:', error);


}

function displayUserComments (comments) {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = comments.map(comment => `
        <div class="comment">
            <p>${comment.body}</p>
        </div>
    `).join('');

    console.error('There was a problem with fetching the comments:', error);
}

// Third part

async function displayAllDataInParallel () {

    try {
        const [profile, posts, comments] = await Promise.all([
            fetchUserProfile(),
            fetchUserPosts(),
            fetchUserComments()
        ]);
        displayUserProfile(profile);
        displayUserPosts(posts);
        displayUserComments(comments);
        
    } catch (error) {
        console.error('Error displaying user data:', error);
    }
}

// Fourth part
function getUserContent () {
    const fetchButton = document.getElementById('fetch-button');
    fetchButton.addEventListener('click', async () => {
        try {
            console.log('Fetching user profile...');
            const profile = await fetchUserProfile();
            console.log ('user profile fetched successfully');

            console.log('Fetching user posts...');
            const posts = await fetchUserPosts();
            console.log ('user posts fetched successfully');

            console.log('Fetching user comments...');
            const comments = await fetchUserComments();
            console.log ('user comments fetched successfully');

        displayUserProfile(profile);
        displayUserPosts(posts);
        displayUserComments(comments);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        
    }
);  


} 
// error handling is implemented//

