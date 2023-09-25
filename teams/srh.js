



const players = [
    {
        "id": 1,
        "playerName": "Kane Williamson",
        "from": "SRH",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "https://d1af7m13b2f34i.cloudfront.net/media/kane-williamson-new-zealand-sportstiger-1691758846112-original.jpg"
    },
    {
        "id": 2,
        "playerName": "Jonny Bairstow",
        "from": "SRH",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "jonny_bairstow.jpg"
    },
    {
        "id": 3,
        "playerName": "Rashid Khan",
        "from": "SRH",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "rashid_khan.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "T Natarajan",
        "from": "SRH",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='t_natarajan.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Manish Pandey",
        "from": "SRH",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='manish_pandey.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Wriddhiman Saha",
        "from": "SRH",
        "price": "1.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='wriddhiman_saha.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Jason Holder",
        "from": "SRH",
        "price": "3.8 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='jason_holder.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Bhuvneshwar Kumar",
        "from": "SRH",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='bhuvneshwar_kumar.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Abdul Samad",
        "from": "SRH",
        "price": "20 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='abdul_samad.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Khaleel Ahmed",
        "from": "SRH",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='khaleel_ahmed.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Siddarth Kaul",
        "from": "SRH",
        "price": "3.8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='siddarth_kaul.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Priyam Garg",
        "from": "SRH",
        "price": "1.9 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='priyam_garg.jpg'></img>"
    }
]



document.getElementById('loadPlayerbtn').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = '';

    players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `


                <div style="display:flex; flex-direction: row; flex-wrap:wrap; gap:15px;">

                    <div style = "width:350px; height:300px; border: 2px solid black; display:flex; flex-direction: column; gap: 10px;  flex-wrap:wrap; border-radius:10px;" >

                        <img src="${player.Image}" alt="${player.playerName}" style = " width:150px; height:150px; border: none; border-radius: 100px; margin-left:90px; margin-top:10px;" >
                        <h2 style = "color: black; text-align:center; font-size:20px;">${player.playerName}</h2>
                        <p style = "color: black; text-align:center; font-size:20px;">Team: ${player.from}</p>
                        <p style = "color: black;  text-align:center;font-size:20px;">Price: ${player.price || 'N/A'}</p>
                        <p style = "color: black;  text-align:center;font-size:20px;">Description: ${player.description}</p>

                    </div>
                </div>



           

            


           
            
        `;
        playerList.appendChild(listItem);
    });
});