
const players = [
    {
        "id": 1,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "15 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg/800px-Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg"
    },
    {
        "id": 2,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='jasprit_bumrah.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Kieron Pollard",
        "from": "MI",
        "price": "9.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='kieron_pollard.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Quinton de Kock",
        "from": "MI",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='quinton_de_kock.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Hardik Pandya",
        "from": "MI",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='hardik_pandya.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Krunal Pandya",
        "from": "MI",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='krunal_pandya.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Trent Boult",
        "from": "MI",
        "price": "6.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='trent_boult.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Suryakumar Yadav",
        "from": "MI",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='suryakumar_yadav.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Rahul Chahar",
        "from": "MI",
        "price": "3.6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='rahul_chahar.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "2.6 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='ishan_kishan.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Adam Milne",
        "from": "MI",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='adam_milne.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Jaydev Unadkat",
        "from": "MI",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='jaydev_unadkat.jpg'></img>"
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