

const players = [
    {
        "id": 1,
        "playerName": "Jason Roy",
        "from": "GT",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "https://i.guim.co.uk/img/media/23e5fbe2828f475a5b7854c4ac64803f9c327155/0_5_2768_1662/master/2768.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=181b09e0c2e5206dc4916784360ddd25"
    },
    {
        "id": 2,
        "playerName": "Shreyas Iyer",
        "from": "GT",
        "price": "7.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='shreyas_iyer.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Jos Buttler",
        "from": "GT",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='jos_buttler.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='rashid_khan.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='hardik_pandya.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Trent Boult",
        "from": "GT",
        "price": "7.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='trent_boult.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Sunil Narine",
        "from": "GT",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='sunil_narine.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Yuzvendra Chahal",
        "from": "GT",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='yuzvendra_chahal.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Ben Stokes",
        "from": "GT",
        "price": "9.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='ben_stokes.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Eoin Morgan",
        "from": "GT",
        "price": "7.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='eoin_morgan.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Kagiso Rabada",
        "from": "GT",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kagiso_rabada.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Krunal Pandya",
        "from": "GT",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='krunal_pandya.jpg'></img>"
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