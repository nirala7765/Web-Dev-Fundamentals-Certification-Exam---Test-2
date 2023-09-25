



const players = [
    {
        "id": 1,
        "playerName": "Shikhar Dhawan",
        "from": "DC",
        "price": "10.75 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170660/shikhar-dhawan.jpg"
    },
    {
        "id": 2,
        "playerName": "Prithvi Shaw",
        "from": "DC",
        "price": "5.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='prithvi_shaw.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='rishabh_pant.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Kagiso Rabada",
        "from": "DC",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kagiso_rabada.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Amit Mishra",
        "from": "DC",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='amit_mishra.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Axar Patel",
        "from": "DC",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='axar_patel.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Ishant Sharma",
        "from": "DC",
        "price": "1.1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='ishant_sharma.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Steve Smith",
        "from": "DC",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='steve_smith.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Marcus Stoinis",
        "from": "DC",
        "price": "4.8 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='marcus_stoinis.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Shimron Hetmyer",
        "from": "DC",
        "price": "1.7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='shimron_hetmyer.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Kane Williamson",
        "from": "DC",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='kane_williamson.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Ripal Patel",
        "from": "DC",
        "price": "20 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='ripal_patel.jpg'></img>"
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