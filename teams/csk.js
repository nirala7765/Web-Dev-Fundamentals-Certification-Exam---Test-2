const players = [{
    "id": 1,
    "playerName": "MS Dhoni",
    "from": "CSK",
    "age": 34,
    "isPlaying": true,
    "description": "Wicketkeeper-Batsman",
    "Image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png"
},
{
    "id": 2,
    "playerName": "Suresh Raina",
    "from": "CSK",
    "price": "11 Cr",
    "isPlaying": true,
    "description": "Batsman",
    "Image": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c148324/suresh-raina.jpg"
},
{
    "id": 3,
    "playerName": "Ravindra Jadeja",
    "from": "CSK",
    "price": "7 Cr",
    "isPlaying": true,
    "description": "All-rounder",
    "Image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png"
},
{
    "id": 4,
    "playerName": "Faf du Plessis",
    "from": "CSK",
    "price": "1.6 Cr",
    "isPlaying": true,
    "description": "Batsman",
    "Image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png"
},
{
    "id": 5,
    "playerName": "Deepak Chahar",
    "from": "CSK",
    "price": "2 Cr",
    "isPlaying": true,
    "description": "Bowler",
    "Image": "https://www.mykhel.com/thumb/247x100x233/cricket/players/9/5059.jpg"
},
{
    "id": 6,
    "playerName": "Ambati Rayudu",
    "from": "CSK",
    "price": "2.2 Cr",
    "isPlaying": true,
    "description": "Batsman",
    "Image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316499.png"
},
{
    "id": 7,
    "playerName": "Imran Tahir",
    "from": "CSK",
    "price": "1 Cr",
    "isPlaying": true,
    "description": "Bowler",
    "Image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/898.png"
},
{
    "id": 8,
    "playerName": "Sam Curran",
    "from": "CSK",
    "price": "5.5 Cr",
    "isPlaying": true,
    "description": "All-rounder",
    "Image": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c244812/sam-curran.jpg"
},
{
    "id": 9,
    "playerName": "Dwayne Bravo",
    "from": "CSK",
    "price": "6.4 Cr",
    "isPlaying": true,
    "description": "All-rounder",
    "Image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/25.png"
},
{
    "id": 10,
    "playerName": "Shardul Thakur",
    "from": "CSK",
    "price": "2.6 Cr",
    "isPlaying": true,
    "description": "Bowler",
    "Image": "https://static.toiimg.com/photo/msid-74174942/74174942.jpg"
},
{
    "id": 11,
    "playerName": "Josh Hazlewood",
    "from": "CSK",
    "price": "2 Cr",
    "isPlaying": true,
    "description": "Bowler",
    "Image": "https://i.guim.co.uk/img/media/41eac396bac9673b3638b494ba41fa4673a9a079/0_214_7515_4510/master/7515.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=dd030709e0cf1446940b234514f6370a"
},
{
    "id": 12,
    "playerName": "Moeen Ali",
    "from": "CSK",
    "price": "7 Cr",
    "isPlaying": true,
    "description": "All-rounder",
    "Image": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c244796/moeen-ali.jpg"
}];// yha pe sab player array dal do

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