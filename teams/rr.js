

const players = [
    {
        "id": 1,
        "playerName": "Sanju Samson",
        "from": "RR",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "https://images.indianexpress.com/2023/09/Sanju-Samson.jpg"
    },
    {
        "id": 2,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='jos_buttler.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Chris Morris",
        "from": "RR",
        "price": "16.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='chris_morris.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Ben Stokes",
        "from": "RR",
        "price": "12.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='ben_stokes.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Shreyas Gopal",
        "from": "RR",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='shreyas_gopal.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Rahul Tewatia",
        "from": "RR",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='rahul_tewatia.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Jaydev Unadkat",
        "from": "RR",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='jaydev_unadkat.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "David Miller",
        "from": "RR",
        "price": "75 L",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='david_miller.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Yashasvi Jaiswal",
        "from": "RR",
        "price": "2.4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='yashasvi_jaiswal.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Kartik Tyagi",
        "from": "RR",
        "price": "1.3 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kartik_tyagi.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Mustafizur Rahman",
        "from": "RR",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mustafizur_rahman.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Mayank Markande",
        "from": "RR",
        "price": "20 L",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mayank_markande.jpg'></img>"
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
