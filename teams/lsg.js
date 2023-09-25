



const players = [
    {
        "id": 1,
        "playerName": "KL Rahul",
        "from": "LSG",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "https://img.redbull.com/images/c_crop,w_1600,h_800,x_0,y_14,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/4/18/dzzrqdgdjp8xmidszpz5/kl-rahul-india-cricket-team-opening-batsman"
    },
    {
        "id": 2,
        "playerName": "Chris Gayle",
        "from": "LSG",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='chris_gayle.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Rishabh Pant",
        "from": "LSG",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='rishabh_pant.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Shardul Thakur",
        "from": "LSG",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='shardul_thakur.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Jonny Bairstow",
        "from": "LSG",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='jonny_bairstow.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Kagiso Rabada",
        "from": "LSG",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kagiso_rabada.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Shakib Al Hasan",
        "from": "LSG",
        "price": "6.2 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='shakib_al_hasan.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Shreyas Iyer",
        "from": "LSG",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='shreyas_iyer.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Trent Boult",
        "from": "LSG",
        "price": "7.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='trent_boult.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Mayank Agarwal",
        "from": "LSG",
        "price": "6.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='mayank_agarwal.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Andre Russell",
        "from": "LSG",
        "price": "9.2 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='andre_russell.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Mohammed Shami",
        "from": "LSG",
        "price": "5.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mohammed_shami.jpg'></img>"
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