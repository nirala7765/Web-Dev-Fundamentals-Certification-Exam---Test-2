


const players = [
    {
        "id": 1,
        "playerName": "Shubman Gill",
        "from": "KKR",
        "price": "1.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/352800/352812.6.jpg"
    },
    {
        "id": 2,
        "playerName": "Andre Russell",
        "from": "KKR",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png"
    },
    {
        "id": 3,
        "playerName": "Eoin Morgan",
        "from": "KKR",
        "price": "5.25 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/02/14130318/skysports-eoin-morgan-england_5816039.jpg"
    },
    {
        "id": 4,
        "playerName": "Sunil Narine",
        "from": "KKR",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320100/320119.png"
    },
    {
        "id": 5,
        "playerName": "Pat Cummins",
        "from": "KKR",
        "price": "15.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "https://cricfit.com/wp-content/uploads/2023/06/2292.jpg"
    },
    {
        "id": 6,
        "playerName": "Varun Chakravarthy",
        "from": "KKR",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "https://www.kreedon.com/wp-content/uploads/2021/07/1600x960_1007392-varun-chakravarthy.jpg"
    },
    {
        "id": 7,
        "playerName": "Nitish Rana",
        "from": "KKR",
        "price": "3.4 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "https://kheltalk.com/wp-content/uploads/2023/05/Nitish-Rana-1.jpg"
    },
    {
        "id": 8,
        "playerName": "Dinesh Karthik",
        "from": "KKR",
        "price": "7.4 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "https://staticg.sportskeeda.com/editor/2023/02/c7925-16762831581149-1920.jpg"
    },
    {
        "id": 9,
        "playerName": "Rahul Tripathi",
        "from": "KKR",
        "price": "3.4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://wikibio.in/wp-content/uploads/2023/01/Rahul-Tripathi.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Kamlesh Nagarkoti",
        "from": "KKR",
        "price": "3.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "https://starsunfolded.com/wp-content/uploads/2018/01/Kamlesh-Nagarkoti.jpg"
    },
    {
        "id": 11,
        "playerName": "Lockie Ferguson",
        "from": "KKR",
        "price": "1.6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/321200/321239.png"
    },
    {
        "id": 12,
        "playerName": "Prasidh Krishna",
        "from": "KKR",
        "price": "3.6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "https://pbs.twimg.com/profile_images/1493970538875670533/VYoaS6zi_400x400.jpg"
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